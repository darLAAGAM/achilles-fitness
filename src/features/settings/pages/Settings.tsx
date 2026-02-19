import { useState } from 'react';
import { User, Target, Dumbbell, Download, Trash2, Info, ChevronRight, X, Repeat, Cloud, RefreshCw } from 'lucide-react';
import { useUserStore } from '../../../stores/userStore';
import { exportData, clearDatabase } from '../../../services/db/database';
import { allPrograms, getProgramById } from '../../../data/programs';
import { pushToCloud, pullFromCloud, getLastSyncTime } from '../../../services/supabase/sync';

export function Settings() {
  const { user, updateUser, setOnboarded, changeProgram } = useUserStore();
  const [showProfile, setShowProfile] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [showProgram, setShowProgram] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'pushing' | 'pulling' | 'success' | 'error'>('idle');
  const [lastSync, setLastSync] = useState<string | null>(getLastSyncTime());
  const [_syncError, setSyncError] = useState<string | null>(null);

  // Profile form state
  const [name, setName] = useState(user?.name || '');
  const [age, setAge] = useState(user?.age?.toString() || '34');
  const [height, setHeight] = useState(user?.height?.toString() || '180');
  const [bodyweight, setBodyweight] = useState(user?.bodyweight?.toString() || '80');

  // Goals form state
  const [phase, setPhase] = useState<'bulk' | 'cut' | 'maintain' | 'weight_loss'>(user?.currentPhase || 'bulk');
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

  const handlePush = async () => {
    setSyncStatus('pushing');
    setSyncError(null);
    const result = await pushToCloud();
    if (result.success) {
      setSyncStatus('success');
      setLastSync(getLastSyncTime());
      setTimeout(() => setSyncStatus('idle'), 2000);
    } else {
      setSyncStatus('error');
      setSyncError(result.error || 'Error desconocido');
    }
  };

  const handlePull = async () => {
    if (!confirm('Esto reemplazará tus datos locales con los de la nube. ¿Continuar?')) return;
    setSyncStatus('pulling');
    setSyncError(null);
    const result = await pullFromCloud();
    if (result.success) {
      if (result.hasData) {
        setSyncStatus('success');
        setLastSync(getLastSyncTime());
        setTimeout(() => window.location.reload(), 1000);
      } else {
        setSyncStatus('error');
        setSyncError('No hay datos en la nube todavía');
      }
    } else {
      setSyncStatus('error');
      setSyncError(result.error || 'Error desconocido');
    }
  };

  const handleReset = async () => {
    await clearDatabase();
    setOnboarded(false);
    window.location.reload();
  };

  // Estilos inline
  const styles = {
    container: {
      minHeight: '100dvh',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column' as const,
      paddingTop: 'env(safe-area-inset-top)',
    },
    header: {
      flexShrink: 0,
      padding: '16px 24px 8px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1.2,
      marginBottom: '4px',
    },
    subtitle: {
      color: '#888',
      fontSize: '16px',
    },
    main: {
      flex: 1,
      padding: '24px',
      paddingBottom: 'calc(env(safe-area-inset-bottom) + 100px)',
      overflowY: 'auto' as const,
    },
    profileCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    avatar: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      backgroundColor: 'rgba(212, 175, 55, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    profileInfo: {
      flex: 1,
    },
    profileName: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '4px',
    },
    profileStats: {
      fontSize: '14px',
      color: '#888',
      marginBottom: '4px',
    },
    profileProgram: {
      fontSize: '13px',
      color: '#d4af37',
      fontWeight: 600,
    },
    sectionTitle: {
      fontSize: '12px',
      color: '#888',
      textTransform: 'uppercase' as const,
      letterSpacing: '1px',
      marginBottom: '12px',
      fontWeight: 600,
    },
    settingsCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      overflow: 'hidden',
      marginBottom: '16px',
    },
    settingsItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 20px',
      background: 'none',
      border: 'none',
      width: '100%',
      textAlign: 'left' as const,
      cursor: 'pointer',
      borderBottom: '1px solid #333',
    },
    settingsItemLast: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 20px',
      background: 'none',
      border: 'none',
      width: '100%',
      textAlign: 'left' as const,
      cursor: 'pointer',
    },
    settingsIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '12px',
      backgroundColor: '#2a2a2a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    settingsIconDanger: {
      width: '40px',
      height: '40px',
      borderRadius: '12px',
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    settingsContent: {
      flex: 1,
    },
    settingsLabel: {
      fontSize: '16px',
      fontWeight: 600,
      color: '#fff',
      marginBottom: '2px',
    },
    settingsLabelDanger: {
      fontSize: '16px',
      fontWeight: 600,
      color: '#ef4444',
      marginBottom: '2px',
    },
    settingsDesc: {
      fontSize: '13px',
      color: '#888',
    },
    chevron: {
      color: '#666',
    },
    dangerSection: {
      marginTop: '24px',
    },
    dangerCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      border: '1px solid rgba(239, 68, 68, 0.3)',
      overflow: 'hidden',
    },
    // Modal styles
    modalOverlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: '#1a1a1a',
      borderRadius: '24px 24px 0 0',
      width: '100%',
      maxHeight: '90vh',
      padding: '24px',
      paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)',
      overflowY: 'auto' as const,
    },
    modalHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px',
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 700,
      color: '#fff',
    },
    modalClose: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#333',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
    },
    label: {
      display: 'block',
      color: '#888',
      fontSize: '14px',
      fontWeight: 500,
      marginBottom: '8px',
    },
    inputContainer: {
      position: 'relative' as const,
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      backgroundColor: '#0a0a0a',
      border: '2px solid #333',
      borderRadius: '12px',
      padding: '14px 16px',
      paddingRight: '60px',
      color: '#fff',
      fontSize: '16px',
      outline: 'none',
      boxSizing: 'border-box' as const,
    },
    inputSuffix: {
      position: 'absolute' as const,
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#666',
      fontSize: '14px',
    },
    saveButton: {
      width: '100%',
      height: '52px',
      backgroundColor: '#d4af37',
      color: '#000',
      fontSize: '16px',
      fontWeight: 700,
      border: 'none',
      borderRadius: '14px',
      cursor: 'pointer',
      marginTop: '8px',
    },
    phaseGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '8px',
      marginBottom: '20px',
    },
    phaseButton: (selected: boolean) => ({
      padding: '14px 8px',
      borderRadius: '12px',
      border: selected ? 'none' : '2px solid #333',
      backgroundColor: selected ? '#d4af37' : '#0a0a0a',
      color: selected ? '#000' : '#888',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      textAlign: 'center' as const,
    }),
    aboutContent: {
      textAlign: 'center' as const,
    },
    aboutLogo: {
      width: '80px',
      height: '80px',
      borderRadius: '20px',
      backgroundColor: 'rgba(212, 175, 55, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
    },
    aboutTitle: {
      fontSize: '22px',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '4px',
    },
    aboutVersion: {
      fontSize: '14px',
      color: '#888',
      marginBottom: '16px',
    },
    aboutDesc: {
      fontSize: '14px',
      color: '#888',
      lineHeight: 1.6,
      marginBottom: '16px',
    },
    aboutHighlight: {
      fontSize: '14px',
      color: '#d4af37',
      fontWeight: 600,
    },
    confirmModal: {
      backgroundColor: '#1a1a1a',
      borderRadius: '20px',
      width: 'calc(100% - 48px)',
      maxWidth: '320px',
      padding: '24px',
      textAlign: 'center' as const,
    },
    confirmTitle: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '8px',
    },
    confirmDesc: {
      fontSize: '14px',
      color: '#888',
      marginBottom: '24px',
      lineHeight: 1.5,
    },
    confirmButtons: {
      display: 'flex',
      gap: '12px',
    },
    cancelButton: {
      flex: 1,
      padding: '14px',
      borderRadius: '12px',
      backgroundColor: '#333',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
    },
    deleteButton: {
      flex: 1,
      padding: '14px',
      borderRadius: '12px',
      backgroundColor: '#ef4444',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
    },
  };

  const currentProgram = getProgramById(user?.currentProgramId || 'achilles-3day');

  const handleChangeProgram = async (programId: string) => {
    await changeProgram(programId);
    setShowProgram(false);
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
      description: 'Fase, calorias y macros',
      onClick: () => setShowGoals(true)
    },
    {
      icon: Repeat,
      label: 'Cambiar programa',
      description: currentProgram?.name || 'Selecciona un programa',
      onClick: () => setShowProgram(true)
    },
    {
      icon: Download,
      label: 'Exportar datos',
      description: 'Descarga una copia de seguridad',
      onClick: handleExport
    },
    {
      icon: Cloud,
      label: 'Subir a la nube',
      description: syncStatus === 'pushing' ? 'Subiendo...' : lastSync ? `Último sync: ${new Date(lastSync).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}` : 'Guarda tus datos en Supabase',
      onClick: handlePush
    },
    {
      icon: RefreshCw,
      label: 'Restaurar de la nube',
      description: syncStatus === 'pulling' ? 'Descargando...' : 'Recupera tus datos desde Supabase',
      onClick: handlePull
    },
    {
      icon: Info,
      label: 'Acerca de',
      description: 'Version e informacion',
      onClick: () => setShowAbout(true)
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Ajustes</h1>
        <p style={styles.subtitle}>Configura tu experiencia Achilles</p>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Profile Card */}
        <div style={styles.profileCard}>
          <div style={styles.avatar}>
            <Dumbbell size={28} color="#d4af37" />
          </div>
          <div style={styles.profileInfo}>
            <p style={styles.profileName}>{user?.name || 'Guerrero'}</p>
            <p style={styles.profileStats}>
              {user?.bodyweight || '--'}kg • {user?.experienceYears || '--'}+ anos
            </p>
            <p style={styles.profileProgram}>{currentProgram?.name || 'Sin programa'}</p>
          </div>
        </div>

        {/* Settings List */}
        <p style={styles.sectionTitle}>Configuracion</p>
        <div style={styles.settingsCard}>
          {settingsItems.map(({ icon: Icon, label, description, onClick }, index) => (
            <button
              key={label}
              onClick={onClick}
              style={index === settingsItems.length - 1 ? styles.settingsItemLast : styles.settingsItem}
            >
              <div style={styles.settingsIcon}>
                <Icon size={20} color="#888" />
              </div>
              <div style={styles.settingsContent}>
                <p style={styles.settingsLabel}>{label}</p>
                <p style={styles.settingsDesc}>{description}</p>
              </div>
              <ChevronRight size={20} style={styles.chevron} />
            </button>
          ))}
        </div>

        {/* Danger Zone */}
        <div style={styles.dangerSection}>
          <p style={styles.sectionTitle}>Zona peligrosa</p>
          <div style={styles.dangerCard}>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              style={styles.settingsItemLast}
            >
              <div style={styles.settingsIconDanger}>
                <Trash2 size={20} color="#ef4444" />
              </div>
              <div style={styles.settingsContent}>
                <p style={styles.settingsLabelDanger}>Eliminar todos los datos</p>
                <p style={styles.settingsDesc}>Esta accion no se puede deshacer</p>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* Profile Modal */}
      {showProfile && (
        <div style={styles.modalOverlay} onClick={() => setShowProfile(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Perfil</h2>
              <button style={styles.modalClose} onClick={() => setShowProfile(false)}>
                <X size={18} color="#fff" />
              </button>
            </div>

            <label style={styles.label}>Nombre</label>
            <div style={styles.inputContainer}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                style={{ ...styles.input, paddingRight: '16px' }}
              />
            </div>

            <label style={styles.label}>Edad</label>
            <div style={styles.inputContainer}>
              <input
                type="number"
                inputMode="numeric"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={styles.input}
              />
              <span style={styles.inputSuffix}>anos</span>
            </div>

            <label style={styles.label}>Altura</label>
            <div style={styles.inputContainer}>
              <input
                type="number"
                inputMode="numeric"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                style={styles.input}
              />
              <span style={styles.inputSuffix}>cm</span>
            </div>

            <label style={styles.label}>Peso actual</label>
            <div style={styles.inputContainer}>
              <input
                type="number"
                inputMode="decimal"
                value={bodyweight}
                onChange={(e) => setBodyweight(e.target.value)}
                style={styles.input}
              />
              <span style={styles.inputSuffix}>kg</span>
            </div>

            <button style={styles.saveButton} onClick={handleSaveProfile}>
              Guardar cambios
            </button>
          </div>
        </div>
      )}

      {/* Goals Modal */}
      {showGoals && (
        <div style={styles.modalOverlay} onClick={() => setShowGoals(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Objetivos</h2>
              <button style={styles.modalClose} onClick={() => setShowGoals(false)}>
                <X size={18} color="#fff" />
              </button>
            </div>

            <label style={styles.label}>Fase actual</label>
            <div style={styles.phaseGrid}>
              {(['bulk', 'maintain', 'cut'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPhase(p)}
                  style={styles.phaseButton(phase === p)}
                >
                  {p === 'bulk' ? 'Volumen' : p === 'cut' ? 'Definicion' : 'Mantener'}
                </button>
              ))}
            </div>

            <label style={styles.label}>Calorias diarias</label>
            <div style={styles.inputContainer}>
              <input
                type="number"
                inputMode="numeric"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                style={styles.input}
              />
              <span style={styles.inputSuffix}>kcal</span>
            </div>

            <label style={styles.label}>Proteina diaria</label>
            <div style={styles.inputContainer}>
              <input
                type="number"
                inputMode="numeric"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                style={styles.input}
              />
              <span style={styles.inputSuffix}>g</span>
            </div>

            <button style={styles.saveButton} onClick={handleSaveGoals}>
              Guardar objetivos
            </button>
          </div>
        </div>
      )}

      {/* About Modal */}
      {showAbout && (
        <div style={styles.modalOverlay} onClick={() => setShowAbout(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Acerca de</h2>
              <button style={styles.modalClose} onClick={() => setShowAbout(false)}>
                <X size={18} color="#fff" />
              </button>
            </div>

            <div style={styles.aboutContent}>
              <div style={styles.aboutLogo}>
                <Dumbbell size={40} color="#d4af37" />
              </div>
              <h3 style={styles.aboutTitle}>Achilles Fitness</h3>
              <p style={styles.aboutVersion}>Version 1.0.0</p>
              <p style={styles.aboutDesc}>
                Basado en el Programa Achilles de Alexander Cortes.
                Disenado para alcanzar el fisico de Brad Pitt en Troya.
              </p>
              <p style={styles.aboutHighlight}>Indice de Adonis: 1.618</p>
            </div>
          </div>
        </div>
      )}

      {/* Program Selection Modal */}
      {showProgram && (
        <div style={styles.modalOverlay} onClick={() => setShowProgram(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Cambiar programa</h2>
              <button style={styles.modalClose} onClick={() => setShowProgram(false)}>
                <X size={18} color="#fff" />
              </button>
            </div>

            <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px', lineHeight: 1.5 }}>
              Tu historial de entrenamientos y PRs se mantienen al cambiar de programa.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {allPrograms.map((program) => {
                const isSelected = user?.currentProgramId === program.id;
                return (
                  <button
                    key={program.id}
                    onClick={() => handleChangeProgram(program.id)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '4px',
                      padding: '16px',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid #d4af37' : '2px solid #333',
                      backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.1)' : '#0a0a0a',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                      <span style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: isSelected ? '#d4af37' : '#fff',
                        flex: 1,
                      }}>
                        {program.name}
                      </span>
                      {isSelected && (
                        <span style={{
                          fontSize: '12px',
                          color: '#d4af37',
                          fontWeight: 600,
                          backgroundColor: 'rgba(212, 175, 55, 0.2)',
                          padding: '4px 8px',
                          borderRadius: '6px',
                        }}>
                          Actual
                        </span>
                      )}
                    </div>
                    <span style={{
                      fontSize: '13px',
                      color: '#888',
                    }}>
                      {program.daysPerWeek} días/semana • {program.weeks} semanas • {
                        program.difficulty === 'beginner' ? 'Principiante' :
                        program.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'
                      }
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div
          style={{
            ...styles.modalOverlay,
            alignItems: 'center',
          }}
          onClick={() => setShowDeleteConfirm(false)}
        >
          <div style={styles.confirmModal} onClick={(e) => e.stopPropagation()}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <Trash2 size={28} color="#ef4444" />
            </div>
            <h3 style={styles.confirmTitle}>Eliminar todos los datos</h3>
            <p style={styles.confirmDesc}>
              Esta accion eliminara permanentemente todos tus entrenamientos,
              medidas y configuracion. No se puede deshacer.
            </p>
            <div style={styles.confirmButtons}>
              <button
                style={styles.cancelButton}
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancelar
              </button>
              <button
                style={styles.deleteButton}
                onClick={handleReset}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
