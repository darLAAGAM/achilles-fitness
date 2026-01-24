import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function PageContainer({ children, className = '', noPadding = false }: PageContainerProps) {
  return (
    <main
      className={`flex-1 overflow-y-auto pb-20 ${noPadding ? '' : 'px-4 py-4'} max-w-lg mx-auto w-full ${className}`}
    >
      {children}
    </main>
  );
}
