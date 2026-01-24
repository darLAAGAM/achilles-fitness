import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export function Header({ title, subtitle, showBack, onBack, rightAction }: HeaderProps) {
  return (
    <header className="sticky top-0 bg-[var(--color-background)] border-b border-[var(--color-border)] safe-area-top z-40">
      <div className="flex items-center justify-between h-14 px-4 max-w-lg mx-auto">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {showBack && (
            <button
              onClick={onBack}
              className="p-2 -ml-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          <div className="min-w-0">
            <h1 className="text-lg font-bold text-[var(--color-text)] truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs text-[var(--color-text-secondary)] truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {rightAction && (
          <div className="flex-shrink-0 ml-2">
            {rightAction}
          </div>
        )}
      </div>
    </header>
  );
}
