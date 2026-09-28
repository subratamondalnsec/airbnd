import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import { useKeyboardNavigation } from '../../../hooks/useKeyboardNavigation';
import { gallery } from '../../../data/gallery';
import styles from './Lightbox.module.css';

const CloseIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="M6 6l20 20M26 6 6 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 4, overflow: 'visible' }}>
    <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 4, overflow: 'visible' }}>
    <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28" />
  </svg>
);

const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);

export default function Lightbox({ isOpen, currentIndex, onClose, onNext, onPrev, onShowAll, listingTitle }) {
  useBodyScrollLock(isOpen);
  useKeyboardNavigation({ isOpen, onNext, onPrev, onClose });

  const closeRef = useRef(null);
  const total = gallery.allImages.length;
  const currentImage = gallery.allImages[currentIndex];

  useEffect(() => {
    if (isOpen && closeRef.current) {
      closeRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          id="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <header className={styles.lbHeader}>
            <button
              className={`${styles.iconBtn} ${styles.gridBtn}`}
              type="button"
              aria-label="Show all photos"
              onClick={onShowAll}
            >
              <span className={styles.btnIcon}><GridIcon /></span>
            </button>
            <div className={styles.lbTitle} id="lbTitle">
              {currentImage?.room || listingTitle}
            </div>
            <div className={styles.lbRight}>
              <span className={styles.lbCounter} id="lbCounter">{currentIndex + 1} / {total}</span>
              <button
                className={`${styles.iconBtn} ${styles.closeBtn}`}
                type="button"
                aria-label="Close"
                onClick={onClose}
                ref={closeRef}
              >
                <span className={styles.btnIcon}><CloseIcon /></span>
              </button>
            </div>
          </header>

          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            type="button"
            aria-label="Previous"
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            <span className={styles.navIcon}><ChevronLeft /></span>
          </button>

          <div className={styles.stage} id="lbStage">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImage?.src}
                alt={currentImage?.room || `Image ${currentIndex + 1}`}
                className={styles.mainImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </div>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            type="button"
            aria-label="Next"
            onClick={onNext}
            disabled={currentIndex === total - 1}
          >
            <span className={styles.navIcon}><ChevronRight /></span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
