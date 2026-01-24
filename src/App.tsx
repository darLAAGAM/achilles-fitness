import { useUserStore } from './stores/userStore';
import { BottomNav } from './components/layout';
import { TodayWorkout } from './features/workouts';
import { ProgressDashboard } from './features/progress';
import { MacroTracker } from './features/nutrition';
import { Settings, Onboarding } from './features/settings';

function App() {
  const { isOnboarded, activeTab } = useUserStore();

  // Show onboarding if user hasn't completed it
  if (!isOnboarded) {
    return <Onboarding />;
  }

  // Render active tab content
  const renderContent = () => {
    switch (activeTab) {
      case 'workout':
        return <TodayWorkout />;
      case 'progress':
        return <ProgressDashboard />;
      case 'nutrition':
        return <MacroTracker />;
      case 'settings':
        return <Settings />;
      default:
        return <TodayWorkout />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {renderContent()}
      <BottomNav />
    </div>
  );
}

export default App;
