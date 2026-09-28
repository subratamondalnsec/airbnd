import { useState } from 'react';
import { nearbyListings } from '../../../data/nearbyListings';
import styles from './NearbyListings.module.css';

const StarIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'inline-block', height: 12, width: 12, fill: 'currentColor' }}>
    <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
  </svg>
);
const ChevronLeft = () => (
  <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
  </svg>
);

const VISIBLE = 5;

export default function NearbyListings() {
  const [startIdx, setStartIdx] = useState(0);

  const canPrev = startIdx > 0;
  const canNext = startIdx + VISIBLE < nearbyListings.length;

  const visible = nearbyListings.slice(startIdx, startIdx + VISIBLE);
  const pageLabel = `${Math.floor(startIdx / VISIBLE) + 1} / ${Math.ceil(nearbyListings.length / VISIBLE)}`;

  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.heading}>More stays nearby</h2>
        <div className={styles.navControls}>
          <span className={styles.pageLabel}>{pageLabel}</span>
          <button
            className={styles.navBtn}
            id="simPrev"
            disabled={!canPrev}
            onClick={() => setStartIdx(Math.max(0, startIdx - VISIBLE))}
            aria-label="Previous"
          >
            <span className={styles.navIcon}><ChevronLeft /></span>
          </button>
          <button
            className={styles.navBtn}
            id="simNext"
            disabled={!canNext}
            onClick={() => setStartIdx(Math.min(nearbyListings.length - VISIBLE, startIdx + VISIBLE))}
            aria-label="Next"
          >
            <span className={styles.navIcon}><ChevronRight /></span>
          </button>
        </div>
      </div>
      <div className={styles.track} id="simTrack">
        {visible.map((listing) => (
          <div key={listing.id} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={listing.image} alt="" loading="lazy" />
            </div>
            <div className={styles.cardTitle}>{listing.title}</div>
            <div className={styles.cardMeta}>
              {listing.price}&nbsp;&nbsp;
              <span className={styles.star}><StarIcon /></span>
              {' '}{listing.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
