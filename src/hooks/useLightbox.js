import { useState, useCallback } from 'react';
import { gallery } from '../data/gallery';

export function useLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % gallery.allImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? gallery.allImages.length - 1 : prev - 1
    );
  }, []);

  return {
    isOpen,
    currentIndex,
    openLightbox,
    closeLightbox,
    goNext,
    goPrev,
    total: gallery.allImages.length,
  };
}
