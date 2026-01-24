import { Dumbbell, TrendingUp, Apple, Settings } from 'lucide-react';
import { useUserStore } from '../../stores/userStore';
import type { Tab } from '../../types';

const tabs: { id: Tab; label: string; icon: typeof Dumbbell }[] = [
  { id: 'workout', label: 'Entreno', icon: Dumbbell },
  { id: 'progress', label: 'Progreso', icon: TrendingUp },
  { id: 'nutrition', label: 'Nutrición', icon: Apple },
  { id: 'settings', label: 'Ajustes', icon: Settings }
];

const styles = {
  nav: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#141414',
    borderTop: '1px solid #2a2a2a',
    zIndex: 50,
    paddingBottom: 'env(safe-area-inset-bottom)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '64px',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '0 8px',
  },
  button: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'relative' as const,
    padding: '8px 0',
  },
  label: {
    fontSize: '11px',
    lineHeight: 1.2,
    marginTop: '4px',
  },
  indicator: {
    position: 'absolute' as const,
    bottom: '8px',
    width: '40px',
    height: '2px',
    backgroundColor: '#d4af37',
    borderRadius: '1px',
  },
};

export function BottomNav() {
  const { activeTab, setActiveTab } = useUserStore();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={styles.button}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 2}
                style={{ color: isActive ? '#d4af37' : '#888' }}
              />
              <span style={{
                ...styles.label,
                color: isActive ? '#d4af37' : '#888',
                fontWeight: isActive ? 600 : 400,
              }}>
                {label}
              </span>
              {isActive && <div style={styles.indicator} />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
