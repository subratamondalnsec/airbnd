import { useState, useEffect } from 'react';
import { listing } from '../../data/listing';
import { gallery } from '../../data/gallery';
import { useLightbox } from '../../hooks/useLightbox';

import ListingGallery from '../../components/listing/ListingGallery/ListingGallery';
import Amenities from '../../components/listing/Amenities/Amenities';
import Reviews from '../../components/listing/Reviews/Reviews';
import NearbyListings from '../../components/listing/NearbyListings/NearbyListings';
import BookingCard from '../../components/booking/BookingCard/BookingCard';
import PhotoTour from '../../components/gallery/PhotoTour/PhotoTour';
import Lightbox from '../../components/gallery/Lightbox/Lightbox';
import styles from './ListingPage.module.css';

/* ── Icon helpers ─────────────────────────────── */
const ShareIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none" />
  </svg>
);
const SaveIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
  </svg>
);
const StarFill = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
  </svg>
);

const GuestFavLeaf = () => (
  <svg style={{ display: 'block', height: '100%', width: 'auto' }} viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.4895 25.417L14.8276 24.4547L16.5303 23.6492L17.1923 24.6116L16.3409 25.0143L17.1923 24.6116C18.6638 26.751 17.9509 29.3868 15.5999 30.4989C14.8548 30.8513 14.0005 31.0196 13.1221 30.987L12.8044 30.9752L12.7297 29.2305L13.0474 29.2423C13.5744 29.2618 14.0871 29.1608 14.5341 28.9494C15.9447 28.2821 16.3725 26.7007 15.4895 25.417Z" fill="#222222" />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.32441 10.235C10.0819 8.96204 10.9247 7.4878 10.853 5.81232C10.7813 4.13685 9.80929 2.59524 7.93708 1.18749C6.17964 2.46049 5.33678 3.93473 5.40851 5.6102C5.48024 7.28568 6.45221 8.82729 8.32441 10.235Z" fill="#F7F7F7" />
    <path fillRule="evenodd" clipRule="evenodd" d="M7.19425 0.489275C7.55718 0.226387 8.10753 0.246818 8.49416 0.537533C10.5385 2.07473 11.7071 3.84975 11.7923 5.84026C11.8775 7.83076 10.8574 9.52453 8.93841 10.9146C8.57548 11.1775 8.02513 11.157 7.6385 10.8663C5.59415 9.32914 4.4256 7.55411 4.34039 5.56361C4.25517 3.57311 5.27521 1.87933 7.19425 0.489275ZM7.92362 2.3684C6.77985 3.38355 6.29788 4.47199 6.3478 5.63813C6.39772 6.80428 6.97457 7.93203 8.20904 9.03547C9.35281 8.02032 9.83478 6.93187 9.78486 5.76573C9.73493 4.59959 9.15809 3.47184 7.92362 2.3684Z" fill="#222222" />
    <path fillRule="evenodd" clipRule="evenodd" d="M15.6806 24.0529C14.1314 22.353 12.4326 21.4688 10.5842 21.4001C8.73575 21.3315 7.10737 22.0923 5.69905 23.6824C7.24822 25.3823 8.94702 26.2666 10.7955 26.3352C12.6439 26.4038 14.2723 25.6431 15.6806 24.0529Z" fill="#F7F7F7" />
    <path fillRule="evenodd" clipRule="evenodd" d="M4.90529 24.1787C4.60807 23.8526 4.58911 23.4097 4.8593 23.1046C6.38985 21.3765 8.27538 20.4331 10.521 20.5164C12.7666 20.5998 14.7391 21.6864 16.4227 23.5339C16.7199 23.86 16.7389 24.303 16.4687 24.608C14.9381 26.3361 13.0526 27.2795 10.807 27.1962C8.56134 27.1128 6.5889 26.0262 4.90529 24.1787ZM6.98781 23.7198C8.22307 24.8808 9.46778 25.4045 10.7323 25.4515C11.9968 25.4984 13.2005 25.0656 14.3402 23.9928C13.1049 22.8318 11.8602 22.3081 10.5957 22.2611C9.3312 22.2142 8.12744 22.6471 6.98781 23.7198Z" fill="#222222" />
    <path fillRule="evenodd" clipRule="evenodd" d="M10.6766 20.7043C10.2137 18.5957 9.16392 17.0928 7.52727 16.1956C5.89062 15.2984 3.99442 15.1864 1.83867 15.8596C2.30157 17.9683 3.35135 19.4712 4.988 20.3684C6.62465 21.2656 8.52085 21.3775 10.6766 20.7043Z" fill="#F7F7F7" />
    <path fillRule="evenodd" clipRule="evenodd" d="M0.791956 15.9443C0.703053 15.5393 0.94431 15.1569 1.37329 15.023C3.7337 14.2859 5.9714 14.3695 7.95247 15.4554C9.92449 16.5364 11.1013 18.3139 11.6022 20.5956C11.6911 21.0006 11.4499 21.3829 11.0209 21.5169C8.66048 22.254 6.42277 22.1704 4.4417 21.0844C2.46969 20.0034 1.29285 18.226 0.791956 15.9443ZM2.95349 16.4656C3.43375 17.9951 4.27991 19.007 5.41321 19.6282C6.5306 20.2407 7.84423 20.4286 9.44069 20.0743C8.96043 18.5448 8.11427 17.5329 6.98097 16.9116C5.86358 16.2991 4.54995 16.1113 2.95349 16.4656Z" fill="#222222" />
    <path fillRule="evenodd" clipRule="evenodd" d="M7.90911 15.6267C8.65652 13.6743 8.53705 11.9555 7.55072 10.4702C6.56438 8.98484 4.90844 8.03014 2.58291 7.60605C1.8355 9.55846 1.95497 11.2773 2.9413 12.7626C3.92764 14.2479 5.58357 15.2026 7.90911 15.6267Z" fill="#F7F7F7" />
    <path fillRule="evenodd" clipRule="evenodd" d="M1.66037 7.28295C1.80927 6.89397 2.26578 6.67525 2.74598 6.76282C5.29848 7.22831 7.26368 8.31371 8.44396 10.0911C9.61955 11.8614 9.70866 13.854 8.89805 15.9715C8.74915 16.3605 8.29264 16.5792 7.81244 16.4916C5.25994 16.0261 3.29474 14.9407 2.11446 13.1634C0.938866 11.393 0.849755 9.40048 1.66037 7.28295ZM3.3385 8.6613C2.94038 10.1267 3.14588 11.3465 3.83454 12.3835C4.51397 13.4067 5.60091 14.1584 7.21992 14.5931C7.61804 13.1278 7.41254 11.9079 6.72388 10.8709C6.04445 9.84774 4.95751 9.09607 3.3385 8.6613Z" fill="#222222" />
  </svg>
);

/* Calendar component (minimal inline) */
function Calendar() {
  const oct2026 = { month: 'October 2026', days: Array.from({ length: 31 }, (_, i) => i + 1), startDay: 4, selected: [18, 19, 20, 21, 22, 23], checkin: 18, checkout: 23 };
  const nov2026 = { month: 'November 2026', days: Array.from({ length: 30 }, (_, i) => i + 1), startDay: 0, unavailable: [18, 19, 20, 21, 22, 23, 24, 29, 30] };
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  function renderMonth(m, hasPrev, hasNext) {
    return (
      <div className={styles.calMonth}>
        <div className={styles.calMonthHeader}>
          {hasPrev ? (
            <button aria-label="Previous month" className={styles.calNavBtn}>
              <span className={styles.calNavIcon}>
                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
                  <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
                </svg>
              </span>
            </button>
          ) : <div style={{width: 32}} />}
          <div className={styles.calMonthLabel}>{m.month}</div>
          {hasNext ? (
            <button aria-label="Next month" className={styles.calNavBtn}>
              <span className={styles.calNavIcon}>
                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
                  <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
                </svg>
              </span>
            </button>
          ) : <div style={{width: 32}} />}
        </div>
        <div className={styles.calWeekRow}>{days.map((d, i) => <span key={i}>{d}</span>)}</div>
        <div className={styles.calGrid}>
          {Array.from({ length: m.startDay }).map((_, i) => <div key={`e${i}`} className={`${styles.calDay} ${styles.empty}`} />)}
          {m.days.map((d) => {
            let cls = styles.calDay;
            if (m.selected?.includes(d)) cls += ` ${styles.selected}`;
            if (m.checkin === d) cls += ` ${styles.checkin}`;
            if (m.checkout === d) cls += ` ${styles.checkout}`;
            if (m.unavailable?.includes(d)) cls += ` ${styles.unavailable}`;
            return <div key={d} className={cls}>
              <span className={styles.dayInner}>{d}</span>
            </div>;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.calWrap}>
      <div className={styles.calMonths}>
        {renderMonth(oct2026, true, false)}
        {renderMonth(nov2026, false, true)}
      </div>
      <div className={styles.calFooter}>
        <div className={styles.keyboardIcon}>
          <span aria-hidden="true">
            <svg viewBox="0 0 32 22" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="1" width="30" height="20" rx="3" />
              <path d="M6 7h.01M11 7h.01M16 7h.01M21 7h.01M26 7h.01M6 12h.01M26 12h.01M9 16h14" />
            </svg>
          </span>
        </div>
        <button className={styles.clearDatesBtn}>Clear dates</button>
      </div>
    </div>
  );
}



/* Sticky bar for mobile-ish scroll */
function StickyBar({ rating, reviewCount, price, nights, onReserve }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('photos');

  useEffect(() => {
    function handleScroll() {
      const gallery = document.getElementById('heroGallery');
      if (gallery) {
        // Show sticky bar when the user scrolls past the bottom of the hero gallery
        setIsVisible(gallery.getBoundingClientRect().bottom < 0);
      } else {
        // Fallback
        setIsVisible(window.scrollY > 500);
      }

      // Scroll spy logic
      const sections = ['photos', 'amenities', 'reviews', 'location'];
      let current = '';
      const offset = 100; // Offset for the sticky header height + some buffer
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 500) {
        setActiveSection('photos');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.stickyBar} ${isVisible ? styles.stickyBarVisible : ''}`} id="_JXzroy" aria-hidden={!isVisible}>
      <div className={styles.stickyBarInner}>
        <nav className={styles.stickyNav} aria-label="Listing sections">
          <a href="#photos" className={activeSection === 'photos' ? styles.active : ''}>Photos</a>
          <a href="#amenities" className={activeSection === 'amenities' ? styles.active : ''}>Amenities</a>
          <a href="#reviews" className={activeSection === 'reviews' ? styles.active : ''}>Reviews</a>
          <a href="#location" className={activeSection === 'location' ? styles.active : ''}>Location</a>
        </nav>
        <div className={styles.stickyRight}>
          <div className={styles.stickyMeta}>
            <div><span className={styles.stickyPrice}>{price}</span> <span className={styles.stickyNights}>for {nights} nights</span></div>
            <div className={styles.stickyRating}>
              <span className={styles.starDot} aria-hidden="true" />
              {rating} · <span className={styles.stickyReviews}>{reviewCount} reviews</span>
            </div>
          </div>
          <button className={styles.stickyReserveBtn} type="button" onClick={onReserve}>Reserve</button>
        </div>
      </div>
    </div>
  );
}

/* Location map placeholder */
function LocationMap() {
  return (
    <section className={styles.wideSection} id="location">
      <h2 className={styles.sectionHeading}>Where you'll be</h2>
      <div className={styles.locationName}>Candolim, Goa, India</div>
      <div className={styles.mapContainer}>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapBg} />
          <div className={styles.mapPin}>
            <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
              <path d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <button className={styles.mapSearchBtn} aria-label="Search">
            <span style={{ width: 16, height: 16, display: 'flex' }}>
              <svg viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
                <circle cx="14" cy="14" r="9" /><path d="M21 21l7 7" />
              </svg>
            </span>
          </button>
          <div className={styles.mapZoomBtns}>
            <button aria-label="Zoom in">
              <svg viewBox="0 0 32 32" style={{ display: 'block', height: 16, width: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}><path d="M16 6v20M6 16h20" /></svg>
            </button>
            <button aria-label="Zoom out">
              <svg viewBox="0 0 32 32" style={{ display: 'block', height: 16, width: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}><path d="M6 16h20" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.locationNote}>Exact location will be provided after booking.</div>
      <div className={styles.neighborhoodTitle}>Neighbourhood highlights</div>
      <div className={styles.neighborhoodText}>{listing.neighborhoodInfo}</div>
      <button className={styles.showMoreBtn}>
        Show more <span className={styles.arrowIcon}><ArrowRight /></span>
      </button>
    </section>
  );
}

/* Host section */
function HostSection() {
  const { host, coHosts } = listing;
  return (
    <section className={styles.wideSection}>
      <h2 className={styles.sectionHeading}>Meet your host</h2>
      <div className={styles.hostLayout}>
        <div>
          <div className={styles.hostCard}>
            <div className={styles.hostAvatarArea}>
              <div className={styles.hostAvatarWrap}>
                <img src={host.avatar} alt="" />
                <span className={styles.verifiedBadge}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
                    <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
                  </svg>
                </span>
              </div>
              <div className={styles.hostName}>{host.name}</div>
              <div className={styles.hostRole}>Host</div>
            </div>
            <div className={styles.hostStats}>
              <div className={styles.hostStat}><div className={styles.statNum}>{host.totalReviews.toLocaleString()}</div><div className={styles.statLabel}>Reviews</div></div>
              <div className={styles.hostStat}><div className={styles.statNum}>{host.rating}★</div><div className={styles.statLabel}>Rating</div></div>
              <div className={styles.hostStat}><div className={styles.statNum}>{host.yearsHosting}</div><div className={styles.statLabel}>Years hosting</div></div>
            </div>
          </div>
          <div className={styles.hostDetails}>
            <div className={styles.hostDetail}>
              <span className={styles.detailIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: 24, width: 24, fill: 'currentColor' }}>
                  <path d="M16 1.8a9.7 9.7 0 0 0-9.7 9.7c0 3.8 2.2 7 5.6 8.6l1.4.6v6.5l2.7-1.5 2.7 1.5v-6.5l1.4-.6c3.4-1.6 5.6-4.8 5.6-8.6A9.7 9.7 0 0 0 16 1.8zm2.7 17.5v5.3l-2.7-1.5-2.7 1.5v-5.3l-.6-.3A8.2 8.2 0 0 1 7.8 11.5a8.2 8.2 0 1 1 16.4 0c0 3-1.8 5.6-4.5 7l-.6.3z" />
                </svg>
              </span>
              {host.bornIn}
            </div>
            <div className={styles.hostDetail}>
              <span className={styles.detailIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: 24, width: 24, fill: 'currentColor' }}>
                  <path d="M16 1.1 1.7 8.5l2.8 1.4v7.7c0 2 3.6 4.4 11.5 4.4s11.5-2.4 11.5-4.4v-7.7l1.3-.7v7.3h2v-8.3L16 1.1zm0 2.2 11.5 6-11.5 6-11.5-6L16 3.3zm9.5 7.6v6.7c0 1.2-3.1 3-9.5 3s-9.5-1.8-9.5-3v-6.7l9.5 4.9 9.5-4.9z" />
                </svg>
              </span>
              {host.school}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.coHostsTitle}>Co-Hosts</div>
          <div className={styles.coHostsList}>
            {coHosts.map((co, i) => (
              <div key={i} className={styles.coHost}>
                {co.avatar ? (
                  <img src={co.avatar} alt="" />
                ) : (
                  <div className={styles.coHostInitial} style={{ background: co.bg, color: co.color }}>{co.initials}</div>
                )}
                <span>{co.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.hostDetailsTitle}>Host details</div>
          <div className={styles.hostResponseInfo}>Response rate: {host.responseRate}<br />{ host.responseTime}</div>
          <button className={styles.messageHostBtn}>Message host</button>
          <div className={styles.safetyNote}>
            <span className={styles.shieldIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: 16, width: 16, fill: 'currentColor' }}>
                <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z" />
              </svg>
            </span>
            <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Things to know */
function ThingsToKnow() {
  return (
    <section className={styles.wideSection}>
      <h2 className={styles.sectionHeading}>Things to know</h2>
      <div className={styles.thingsGrid}>
        <div className={styles.thingsCol}>
          <div className={styles.thingsIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: 24, width: 24, fill: 'currentColor' }}>
              <path d="m12 0v2h8v-2h2v2h6c1.1045695 0 2 .8954305 2 2v21c0 2.7614237-2.2385763 5-5 5h-18c-2.76142375 0-5-2.2385763-5-5v-21c0-1.1045695.8954305-2 2-2h6v-2zm16 12h-24v13c0 1.6568542 1.34314575 3 3 3h18c1.6568542 0 3-1.3431458 3-3zm-8.2071068 2.2928932 1.4142136 1.4142136-3.7921068 3.7928932 3.7921068 3.7928932-1.4142136 1.4142136-3.7928932-3.7921068-3.7928932 3.7921068-1.4142136-1.4142136 3.7921068-3.7928932-3.7921068-3.7928932 1.4142136-1.4142136 3.7928932 3.7921068zm-9.7928932-10.2928932h-6v6h24v-6h-6v2h-2v-2h-8v2h-2z" />
            </svg>
          </div>
          <div className={styles.thingsLabel}>Cancellation policy</div>
          <p>{listing.cancellationPolicy}</p>
          <p>Review this host's full policy for details.</p>
          <a className={styles.learnMore} href="#">Learn more</a>
        </div>
        <div className={styles.thingsCol}>
          <div className={styles.thingsIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: 24, width: 24, fill: 'currentColor' }}>
              <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
            </svg>
          </div>
          <div className={styles.thingsLabel}>House rules</div>
          {listing.houseRules.map((r, i) => <p key={i}>{r}</p>)}
          <a className={styles.learnMore} href="#">Learn more</a>
        </div>
        <div className={styles.thingsCol}>
          <div className={styles.thingsIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: 24, width: 24, fill: 'currentColor' }}>
              <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z" />
            </svg>
          </div>
          <div className={styles.thingsLabel}>Safety &amp; property</div>
          {listing.safetyInfo.map((s, i) => <p key={i}>{s}</p>)}
          <a className={styles.learnMore} href="#">Learn more</a>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Highlights Helper
   ══════════════════════════════════════════ */
const OutdoorIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m15.59 1.91 1.02.8C22.17 7.04 25 11.46 25 15.98a8.99 8.99 0 0 1-.5 3.02H31v2h-2v9a1 1 0 0 1-.88 1H4a1 1 0 0 1-1-.88V21H1v-2h6.42c-.28-.9-.42-1.91-.42-3.01 0-2.25 1.1-4.82 3.27-7.75l.27-.35.55-.73 1.78 1.12L15.6 1.9zM27 21H5v8h22v-8zM16.4 5.1l-2.6 6.1-2.21-1.37-.17.24C9.87 12.3 9.07 14.2 9 15.77l-.01.21c0 1.1.17 2.04.48 2.85l.07.17h3a6.1 6.1 0 0 1-.05-.83c0-1.52.86-3.19 2.52-5.07l.24-.27.74-.81.74.8c1.82 2 2.76 3.76 2.76 5.35 0 .3-.02.57-.05.83h3.06l-.14-.07a6.7 6.7 0 0 0 .63-2.95c0-3.42-2.03-6.93-6.17-10.51l-.43-.36zm-.4 9.94-.08.1c-.9 1.14-1.36 2.11-1.41 2.88l-.01.15c0 .35.03.63.09.83h2.82c.06-.2.09-.48.09-.83 0-.79-.46-1.8-1.42-3.04l-.08-.1z" />
  </svg>
);
const CoolIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="M20.33 3.08c1.5 2.24.96 5.55-1.38 9.9l-.12.2.18.18c.1.13.21.26.3.4l.23.38.14.02c.7.06 1.78-.11 2.87-.48.89-.3 1.78-.78 2.68-1.45l.66-.52a3 3 0 0 1 4.77 1.33l.12.44c.59 3.35.02 5.73-1.86 6.98-2.24 1.5-5.54.96-9.9-1.39a3 3 0 0 1-.27-.16l-.07.07-.39.3-.28.19V20c-.03.7.15 1.68.48 2.68.3.88.78 1.78 1.45 2.68l.26.33.26.33a3 3 0 0 1-.36 4.22C19 31 17.95 31 17 31h-.54l-1.39-.1c-1.24-.19-2.56-.65-3.36-1.84-1.5-2.25-.96-5.55 1.39-9.91.04-.09.1-.17.15-.25a4.12 4.12 0 0 1-.37-.4.82.82 0 0 0-.18-.23.5.5 0 0 0-.21-.11c-.7-.1-1.85.06-3.04.46-.88.3-1.78.78-2.68 1.45l-.66.52a3 3 0 0 1-4.77-1.33l-.12-.44c-.59-3.35-.02-5.73 1.86-6.98 2.24-1.5 5.55-.96 9.9 1.38l.1.05c.3-.3.55-.5.72-.61l.2-.13.03-.2c.06-.7-.11-1.78-.48-2.88a9.6 9.6 0 0 0-1.45-2.68l-.52-.66a3 3 0 0 1 1.33-4.77l.44-.12c3.35-.59 5.73-.02 6.98 1.86zm-5.31 16.8-.16.22c-2.04 3.77-2.5 6.45-1.49 7.85 1.13 1.55 4.63 1.55 5.44.77.38-.36.47-.89.2-1.31l-.37-.45a11.94 11.94 0 0 1-2.05-3.64 10.93 10.93 0 0 1-.59-3.03V20h-.14a4.01 4.01 0 0 1-.63-.07l-.21-.05zM4.09 13.52c-1.56 1.13-1.56 4.63-.78 5.44.36.38.9.46 1.32.19l.44-.36c1.2-.96 2.42-1.64 3.65-2.05 1.16-.4 2.33-.6 3.28-.6V16c0-.14 0-.28.02-.42l.08-.46-.16-.12c-3.78-2.03-6.46-2.5-7.85-1.48zm23.24-.36-.45.36c-1.2.96-2.41 1.64-3.64 2.05-1.15.38-2.3.6-3.24.6-.01.25-.05.5-.1.74l-.07.26.19.14c3.77 2.03 6.45 2.5 7.85 1.48 1.55-1.13 1.55-4.63.78-5.44-.36-.38-.9-.47-1.32-.19zM16 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13.2 3.39c-.37.36-.46.89-.18 1.31l.36.45c.95 1.2 1.64 2.42 2.05 3.64.37 1.14.59 2.27.59 3.2l.54.05.3.05.2.05.1-.13c2.04-3.77 2.5-6.45 1.49-7.84-1.13-1.56-4.63-1.56-5.44-.78z" />
  </svg>
);
const SelfCheckinIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z" />
  </svg>
);

const HighlightIcon = ({ icon }) => {
  if (icon === 'outdoor') return <div className={styles.highlightIcon}><OutdoorIcon /></div>;
  if (icon === 'cool') return <div className={styles.highlightIcon}><CoolIcon /></div>;
  if (icon === 'selfcheckin') return <div className={styles.highlightIcon}><SelfCheckinIcon /></div>;
  return <div className={styles.highlightIcon} />;
};

/* ══════════════════════════════════════════
   Main ListingPage
   ══════════════════════════════════════════ */
export default function ListingPage() {
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const { isOpen: lbOpen, currentIndex, openLightbox, closeLightbox, goNext, goPrev } = useLightbox();

  function openPhotoTour() { setPhotoTourOpen(true); }
  function closePhotoTour() { setPhotoTourOpen(false); }
  function openLightboxFromTour(idx) { setPhotoTourOpen(false); openLightbox(idx); }

  return (
    <>
      {/* Sticky top bar (below header) */}
      <StickyBar
        rating={listing.rating}
        reviewCount={listing.reviewCount}
        price={listing.priceForNights}
        nights={listing.nights}
        onReserve={() => document.getElementById('reserveBtn')?.click()}
      />

      <main id="main">
        <div className={styles.pageContainer}>

          {/* Listing title + actions */}
          <section className={styles.listingHeader} id="photosHeader">
            <h1 className={styles.listingTitle}>{listing.title}</h1>
            <div className={styles.actionRow}>
              <button className={styles.actionBtn} type="button" id="shareBtn">
                <span className={styles.actionIcon}><ShareIcon /></span>
                <span className={styles.actionLabel}>Share</span>
              </button>
              <button className={styles.actionBtn} type="button" id="saveBtn">
                <span className={styles.actionIcon}><SaveIcon /></span>
                <span className={styles.actionLabel}>Save</span>
              </button>
            </div>
          </section>

          {/* Hero gallery */}
          <div id="heroGallery">
            <ListingGallery
              images={listing.heroImages}
              listingTitle={listing.title}
              onOpenPhotoTour={openPhotoTour}
              onOpenLightbox={openLightbox}
            />
          </div>

          {/* Two-column layout */}
          <div className={styles.twoCol}>
            {/* Left content */}
            <div className={styles.leftCol} id="contentLeft">

              {/* Type + guests */}
              <div className={styles.metaBlock}>
                <h2 className={styles.typeHeading}>{listing.type}</h2>
                <div className={styles.typeDetails}>
                  {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.baths} bathroom
                </div>
              </div>

              {/* Guest favourite badge */}
              <div className={styles.guestFavBlock}>
                <div className={styles.guestFavLeft}>
                  <span className={styles.leafIcon}><GuestFavLeaf /></span>
                  <span className={styles.guestFavText}>Guest<br />favourite</span>
                  <span className={styles.leafIconR}><GuestFavLeaf /></span>
                </div>
                <div className={styles.guestFavSubText}>One of the most loved homes<br />on Airbnb, according to guests</div>
                <div className={styles.guestFavStats}>
                  <div className={styles.gfStat}>
                    <div className={styles.gfStatNum}>{listing.rating}</div>
                    <div className={styles.gfStars}>
                      {[...Array(5)].map((_, i) => <span key={i} style={{ width: 10, height: 10, display: 'inline-flex' }}><StarFill /></span>)}
                    </div>
                  </div>
                  <div className={styles.gfDivider} />
                  <div className={styles.gfStat}>
                    <div className={styles.gfStatNum}>{listing.reviewCount}</div>
                    <div className={styles.gfStatLabel}>Reviews</div>
                  </div>
                </div>
              </div>

              {/* Host mini row */}
              <div className={styles.hostRow}>
                <img className={styles.hostAvatar} src={listing.host.avatar} alt="" />
                <div>
                  <div className={styles.hostName}>Hosted by {listing.host.name}</div>
                  <div className={styles.hostMeta}>{listing.host.yearsHosting} years hosting</div>
                </div>
              </div>

              {/* Property highlights */}
              <div className={styles.highlightsBlock}>
                {listing.highlights.map((h) => (
                  <div key={h.title} className={styles.highlight}>
                    <HighlightIcon icon={h.icon} />
                    <div className={styles.highlightContent}>
                      <div className={styles.highlightTitle}>{h.title}</div>
                      <div className={styles.highlightDesc}>{h.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className={styles.descBlock}>
                <div className={styles.autoTranslate}>
                  Some info has been automatically translated. <a href="#">Show original</a>
                </div>
                <div className={styles.descWrapper}>
                  <p className={`${styles.descText} ${descExpanded ? '' : styles.descTruncated}`} id="descText">
                    {listing.description}
                  </p>
                </div>
                <button className={styles.showMoreBtn} id="descMore" onClick={() => setDescExpanded(!descExpanded)}>
                  {descExpanded ? 'Show less' : 'Show more'}{' '}
                  <span className={styles.arrowIcon}><ArrowRight /></span>
                </button>
              </div>

              {/* Sleeping arrangements */}
              <div className={styles.sleepSection}>
                <h2 className={styles.sectionHeading}>Where you'll sleep</h2>
                <div className={styles.sleepGrid}>
                  {listing.sleepingArrangements.map((s) => (
                    <div key={s.room} className={styles.sleepCard}>
                      <img src={s.image} alt="" />
                      <div className={styles.sleepRoomName}>{s.room}</div>
                      <div className={styles.sleepBedType}>{s.bedType}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <Amenities />

              {/* Calendar */}
              <div className={styles.calSection}>
                <div className={styles.calHeader}>
                  <div className={styles.calTitle}>5 nights in Candolim</div>
                  <div className={styles.calSubtitle}>18 Oct 2026 - 23 Oct 2026</div>
                </div>
                <Calendar />
              </div>
            </div>

            {/* Right: booking card */}
            <aside className={styles.rightCol}>
              <div className={styles.bookingSticky} id="bookingSticky">
                <BookingCard />
              </div>
            </aside>
          </div>

          {/* Wide sections (full width) */}
          <div className={styles.wideSections} id="wideSections">
            <Reviews />
            <LocationMap />
            <HostSection />
            <ThingsToKnow />
            <NearbyListings />
          </div>
        </div>
      </main>

      {/* Modals */}
      <PhotoTour
        isOpen={photoTourOpen}
        onClose={closePhotoTour}
        onOpenLightbox={openLightboxFromTour}
      />
      <Lightbox
        isOpen={lbOpen}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onNext={goNext}
        onPrev={goPrev}
        onShowAll={() => { closeLightbox(); openPhotoTour(); }}
        listingTitle={listing.title}
      />
    </>
  );
}
