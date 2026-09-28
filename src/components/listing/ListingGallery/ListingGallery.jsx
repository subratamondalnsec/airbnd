import styles from './ListingGallery.module.css';

const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);

export default function ListingGallery({ images, listingTitle, onOpenPhotoTour, onOpenLightbox }) {
  return (
    <section className={styles.gallerySection} id="photos" aria-label="Photos of this place">
      <div className={styles.heroGrid} id="heroGrid">
        {images.slice(0, 5).map((src, i) => (
          <button
            key={i}
            className={styles.imageBtn}
            type="button"
            aria-label={`${listingTitle} image ${i + 1}`}
            onClick={() => onOpenLightbox(i)}
          >
            <img
              src={src}
              alt=""
              decoding="async"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
      </div>
      <button
        className={styles.showAllBtn}
        type="button"
        id="showAllPhotos"
        onClick={onOpenPhotoTour}
      >
        <span className={styles.showAllIcon}>
          <GridIcon />
        </span>
        Show all photos
      </button>
    </section>
  );
}
