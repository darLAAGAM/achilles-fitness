import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function PageContainer({ children, className = '', noPadding = false }: PageContainerProps) {
  return (
    <main
      className={`
        flex-1 overflow-y-auto w-full max-w-lg mx-auto
        pb-[calc(var(--bottom-nav-height)+var(--safe-area-bottom)+0.5rem)]
        ${noPadding ? '' : 'px-[var(--spacing-page)] py-4'}
        landscape-compact
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </main>
  );
}
