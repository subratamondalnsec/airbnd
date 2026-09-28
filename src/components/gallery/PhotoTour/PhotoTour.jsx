import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import { gallery } from '../../../data/gallery';
import styles from './PhotoTour.module.css';

const BackIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m20 28-11.2928932-11.2928932c-.3905243-.3905243-.3905243-1.0236893 0-1.4142136l11.2928932-11.2928932" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none" />
  </svg>
);

const SaveIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
  </svg>
);

export default function PhotoTour({ isOpen, onClose, onOpenLightbox }) {
  useBodyScrollLock(isOpen);
  const containerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (isOpen && closeRef.current) {
      closeRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          id="tourScroll"
          role="dialog"
          aria-modal="true"
          aria-label="Photo tour"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <header className={styles.tourBar} id="tourBar">
            <button
              className={`${styles.iconBtn} ${styles.backBtn}`}
              type="button"
              aria-label="Back"
              onClick={onClose}
              ref={closeRef}
            >
              <span className={styles.btnIcon}><BackIcon /></span>
            </button>
            <h2 className={styles.tourTitle}>Photo tour</h2>
            <div className={styles.headerActions}>
              <button className={styles.iconBtn} type="button" aria-label="Share">
                <span className={styles.btnIcon}><ShareIcon /></span>
              </button>
              <button className={styles.iconBtn} type="button" aria-label="Save">
                <span className={styles.btnIcon}><SaveIcon /></span>
              </button>
            </div>
          </header>

          <div className={styles.scrollArea} ref={containerRef}>
            <nav className={styles.tourNav} aria-label="Photo categories">
              {gallery.rooms.map((room) => (
                <button
                  key={room.id}
                  className={styles.navBtn}
                  type="button"
                  aria-label={room.name}
                  onClick={() => {
                    const el = document.getElementById(`tour-room-${room.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <img loading="lazy" alt="" src={room.thumbnail} />
                  <span className={styles.navLabel}>{room.name}</span>
                </button>
              ))}
            </nav>

            <div className={styles.tourRooms}>
              {gallery.rooms.map((room) => (
                <section key={room.id} className={styles.roomSection} id={`tour-room-${room.id}`}>
                  <div className={styles.roomInfo}>
                    <div className={styles.roomName}>{room.name}</div>
                    {room.features && <div className={styles.roomFeatures}>{room.features}</div>}
                  </div>
                  <div className={styles.roomImages}>
                    {room.layout.map((layoutItem, li) => {
                      if (layoutItem.type === 'wide') {
                        const imgIndex = layoutItem.index;
                        const img = gallery.allImages[imgIndex];
                        return (
                          <div key={li} className={`${styles.imageSlot} ${styles.wide}`}>
                            <button
                              className={styles.imageBtn}
                              type="button"
                              data-idx={imgIndex}
                              aria-label={`${room.name} image ${li + 1}`}
                              onClick={() => onOpenLightbox(imgIndex)}
                            >
                              <img loading="lazy" alt={room.name} src={img?.src} />
                            </button>
                          </div>
                        );
                      }
                      if (layoutItem.type === 'pair') {
                        return (
                          <div key={li} className={`${styles.imageSlot} ${styles.pair}`}>
                            {layoutItem.indexes.map((imgIndex) => {
                              const img = gallery.allImages[imgIndex];
                              return (
                                <button
                                  key={imgIndex}
                                  className={styles.imageBtn}
                                  type="button"
                                  data-idx={imgIndex}
                                  aria-label={`${room.name} image`}
                                  onClick={() => onOpenLightbox(imgIndex)}
                                >
                                  <img loading="lazy" alt={room.name} src={img?.src} />
                                </button>
                              );
                            })}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
