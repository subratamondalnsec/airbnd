import { useEffect } from 'react';

export function useKeyboardNavigation({ isOpen, onNext, onPrev, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      switch (e.key) {
        case 'ArrowRight':
          onNext?.();
          break;
        case 'ArrowLeft':
          onPrev?.();
          break;
        case 'Escape':
          onClose?.();
          break;
        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);
}
