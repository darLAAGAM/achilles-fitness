import { useState } from 'react';
import { User, Target, Dumbbell, Download, Trash2, Info } from 'lucide-react';
import { Header, PageContainer } from '../../../components/layout';
import { Card, Button, Input, Modal } from '../../../components/ui';
import { useUserStore } from '../../../stores/userStore';
import { exportData, clearDatabase } from '../../../services/db/database';

export function Settings() {
  const { user, updateUser, setOnboarded } = useUserStore();
  const [showProfile, setShowProfile] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Profile form state
  const [name, setName] = useState(user?.name || '');
  const [age, setAge] = useState(user?.age?.toString() || '34');
  const [height, setHeight] = useState(user?.height?.toString() || '180');
  const [bodyweight, setBodyweight] = useState(user?.bodyweight?.toString() || '80');

  // Goals form state
  const [phase, setPhase] = useState<'bulk' | 'cut' | 'maintain'>(user?.currentPhase || 'bulk');
  const [protein, setProtein] = useState(user?.proteinTarget?.toString() || '160');
  const [calories, setCalories] = useState(user?.dailyCalories?.toString() || '2600');

  const handleSaveProfile = async () => {
    await updateUser({
      name,
      age: Number(age),
      height: Number(height),
      bodyweight: Number(bodyweight)
    });
    setShowProfile(false);
  };

  const handleSaveGoals = async () => {
    await updateUser({
      currentPhase: phase,
      proteinTarget: Number(protein),
      dailyCalories: Number(calories)
    });
    setShowGoals(false);
  };

  const handleExport = async () => {
    const data = await exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `achilles-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = async () => {
    if (confirm('¿Estás seguro? Se eliminarán TODOS tus datos.')) {
      await clearDatabase();
      setOnboarded(false);
      window.location.reload();
    }
  };

  const settingsItems = [
    {
      icon: User,
      label: 'Perfil',
      description: 'Nombre, edad, altura y peso',
      onClick: () => setShowProfile(true)
    },
    {
      icon: Target,
      label: 'Objetivos',
      description: 'Fase, calorías y macros',
      onClick: () => setShowGoals(true)
    },
    {
      icon: Download,
      label: 'Exportar datos',
      description: 'Descarga una copia de seguridad',
      onClick: handleExport
    },
    {
      icon: Info,
      label: 'Acerca de',
      description: 'Versión e información',
      onClick: () => setShowAbout(true)
    }
  ];

  return (
    <>
      <Header title="Ajustes" subtitle="Configura tu experiencia Achilles" />
      <PageContainer>
        {/* User summary */}
        <Card className="mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
              <Dumbbell size={28} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--color-text)]">
                {user?.name || 'Guerrero'}
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {user?.bodyweight || '--'}kg • {user?.experienceYears || '--'}+ años
              </p>
              <p className="text-xs text-[var(--color-primary)] font-medium mt-0.5">
                Programa Achilles 3-Day
              </p>
            </div>
          </div>
        </Card>

        {/* Settings list */}
        <div className="space-y-2">
          {settingsItems.map(({ icon: Icon, label, description, onClick }) => (
            <Card key={label} onClick={onClick} padding="sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-elevated)] flex items-center justify-center">
                  <Icon size={20} className="text-[var(--color-text-secondary)]" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[var(--color-text)]">{label}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Danger zone */}
        <div className="mt-8">
          <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
            Zona peligrosa
          </p>
          <Card onClick={handleReset} className="border-[var(--color-error)]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-error)]/20 flex items-center justify-center">
                <Trash2 size={20} className="text-[var(--color-error)]" />
              </div>
              <div>
                <p className="font-medium text-[var(--color-error)]">Eliminar todos los datos</p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Esta acción no se puede deshacer
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Profile Modal */}
        <Modal isOpen={showProfile} onClose={() => setShowProfile(false)} title="Perfil">
          <div className="space-y-4">
            <Input
              label="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
            />
            <Input
              label="Edad"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              suffix="años"
            />
            <Input
              label="Altura"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              suffix="cm"
            />
            <Input
              label="Peso actual"
              type="number"
              value={bodyweight}
              onChange={(e) => setBodyweight(e.target.value)}
              suffix="kg"
            />
            <Button fullWidth onClick={handleSaveProfile}>
              Guardar cambios
            </Button>
          </div>
        </Modal>

        {/* Goals Modal */}
        <Modal isOpen={showGoals} onClose={() => setShowGoals(false)} title="Objetivos">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[var(--color-text-secondary)] mb-2 block">
                Fase actual
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['bulk', 'maintain', 'cut'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPhase(p)}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      phase === p
                        ? 'bg-[var(--color-primary)] text-black'
                        : 'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {p === 'bulk' ? 'Volumen' : p === 'cut' ? 'Definición' : 'Mantener'}
                  </button>
                ))}
              </div>
            </div>
            <Input
              label="Calorías diarias"
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              suffix="kcal"
            />
            <Input
              label="Proteína diaria"
              type="number"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              suffix="g"
            />
            <Button fullWidth onClick={handleSaveGoals}>
              Guardar objetivos
            </Button>
          </div>
        </Modal>

        {/* About Modal */}
        <Modal isOpen={showAbout} onClose={() => setShowAbout(false)} title="Acerca de">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center">
              <Dumbbell size={40} className="text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)]">Achilles Fitness</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">Versión 1.0.0</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-4">
              Basado en el Programa Achilles de Alexander Cortes.
              Diseñado para alcanzar el físico de Brad Pitt en Troya.
            </p>
            <p className="text-xs text-[var(--color-primary)] mt-4 font-medium">
              Índice de Adonis: 1.618
            </p>
          </div>
        </Modal>
      </PageContainer>
    </>
  );
}
