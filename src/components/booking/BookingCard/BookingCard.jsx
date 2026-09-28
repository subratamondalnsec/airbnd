import { useState } from 'react';
import styles from './BookingCard.module.css';
import { listing } from '../../../data/listing';

const ChevronDown = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="M4 10l12 12 12-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FlagIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m7.5011 1c.5272 0 .9591.40794.99725.92537l.00275.07463v1h5.5c.31265 0 .5435.281645.4935.581075l-.01275.056285-.96125 3.36264.96125 3.36265c.08055.2818-.0967.5625-.36775.62465l-.0554.00945-.0576.00325h-5.5c-.5272 0-.9591-.40795-.99725-.92535l-.00275-.07465v-1h-5v6h-1v-14zm1 3h-1v4h1z" />
  </svg>
);

export default function BookingCard() {
  const [guestsOpen, setGuestsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Discount banner */}
      <div className={styles.discountCard}>
        <img className={styles.discountIcon} src="/images/ui/discount.svg" alt="" aria-hidden="true" />
        <div className={styles.discountText}>
          Get 10% off your next stay.<br />
          <a href="#">Terms apply</a>
        </div>
        <button className={styles.claimBtn} type="button">Claim</button>
      </div>

      {/* Main Booking Card */}
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div className={styles.priceRow}>
            <span className={styles.priceMain}>{listing.priceForNights}</span>
            <span className={styles.priceLabel}>for {listing.nights} nights</span>
          </div>

          <div className={styles.dateGuest}>
            <div className={styles.dateRow}>
              <div className={styles.dateField}>
                <div className={styles.fieldLabel}>CHECK-IN</div>
                <div className={styles.fieldValue}>{listing.checkin}</div>
              </div>
              <div className={styles.dateField}>
                <div className={styles.fieldLabel}>CHECKOUT</div>
                <div className={styles.fieldValue}>{listing.checkout}</div>
              </div>
            </div>
            <div className={styles.guestField} onClick={() => setGuestsOpen(!guestsOpen)}>
              <div>
                <div className={styles.fieldLabel}>GUESTS</div>
                <div className={styles.fieldValue}>{listing.guestCount}</div>
              </div>
              <span className={styles.chevron}><ChevronDown /></span>
            </div>
          </div>

          <div className={styles.freeCancellation}>
            Free cancellation before <b>17 October</b>
          </div>

          <button className={styles.reserveBtn} type="button" id="reserveBtn">
            Reserve
          </button>

          <div className={styles.notCharged}>You won't be charged yet</div>
        </div>
      </div>

      <div className={styles.reportRow}>
        <span className={styles.flagIcon}><FlagIcon /></span>
        <a href="#">Report this listing</a>
      </div>
    </div>
  );
}
