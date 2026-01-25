import { useUserStore } from './stores/userStore';
import { BottomNav } from './components/layout';
import { TodayWorkout } from './features/workouts';
import { ProgressDashboard } from './features/progress';
import { MacroTracker } from './features/nutrition';
import { InsightsPage } from './features/insights';
import { Settings, Onboarding } from './features/settings';

const styles = {
  app: {
    minHeight: '100dvh',
    backgroundColor: '#0a0a0a',
  },
};

function App() {
  const { isOnboarded, activeTab } = useUserStore();

  if (!isOnboarded) {
    return <Onboarding />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'workout':
        return <TodayWorkout />;
      case 'progress':
        return <ProgressDashboard />;
      case 'nutrition':
        return <MacroTracker />;
      case 'insights':
        return <InsightsPage />;
      case 'settings':
        return <Settings />;
      default:
        return <TodayWorkout />;
    }
  };

  return (
    <div style={styles.app}>
      {renderContent()}
      <BottomNav />
    </div>
  );
}

export default App;
