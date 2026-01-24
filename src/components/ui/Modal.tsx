import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  fullScreen?: boolean;
}

export function Modal({ isOpen, onClose, title, children, fullScreen = false }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className={`
          relative bg-[var(--color-surface)] rounded-t-3xl w-full max-w-lg animate-slide-up safe-area-bottom modal-responsive shadow-oled
          ${fullScreen ? 'h-[90dvh]' : 'max-h-[85dvh]'}
        `.trim().replace(/\s+/g, ' ')}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)] border-sharp">
          <h2 className="text-lg font-bold text-[var(--color-text)]">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 touch-target text-[var(--color-text-secondary)] hover:text-[var(--color-text)] active:scale-95 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div
          className="overflow-y-auto p-[var(--spacing-page)]"
          style={{ maxHeight: 'calc(85dvh - 65px)' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
