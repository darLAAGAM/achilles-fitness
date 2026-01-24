import { Dumbbell, TrendingUp, Apple, Settings } from 'lucide-react';
import { useUserStore } from '../../stores/userStore';
import type { Tab } from '../../types';

const tabs: { id: Tab; label: string; icon: typeof Dumbbell }[] = [
  { id: 'workout', label: 'Entreno', icon: Dumbbell },
  { id: 'progress', label: 'Progreso', icon: TrendingUp },
  { id: 'nutrition', label: 'Nutrición', icon: Apple },
  { id: 'settings', label: 'Ajustes', icon: Settings }
];

export function BottomNav() {
  const { activeTab, setActiveTab } = useUserStore();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--color-surface)] border-t border-[var(--color-border)] safe-area-bottom z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-text-secondary)]'
              }`}
            >
              <Icon
                size={24}
                strokeWidth={isActive ? 2.5 : 2}
                className="mb-1"
              />
              <span className={`text-xs ${isActive ? 'font-semibold' : 'font-normal'}`}>
                {label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 w-12 h-0.5 bg-[var(--color-primary)] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
