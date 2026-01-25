import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Camera, Trash2, X, Image as ImageIcon } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { v4 as uuid } from 'uuid';

interface ProgressPhoto {
  id: string;
  date: Date;
  type: 'front' | 'side' | 'back';
  imageData: string; // base64
}

interface PhotoGalleryProps {
  onBack: () => void;
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 100px)',
  } as React.CSSProperties,
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 20px',
    borderBottom: '1px solid #1a1a1a',
  } as React.CSSProperties,
  backButton: {
    background: 'none',
    border: 'none',
    color: '#d4af37',
    padding: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  headerTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#fff',
    margin: 0,
    flex: 1,
  } as React.CSSProperties,
  container: {
    padding: '20px',
  } as React.CSSProperties,
  addButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '16px',
    backgroundColor: '#d4af37',
    color: '#000',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '24px',
  } as React.CSSProperties,
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
  } as React.CSSProperties,
  photoCard: {
    position: 'relative',
    aspectRatio: '3/4',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  } as React.CSSProperties,
  photoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } as React.CSSProperties,
  photoDate: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '8px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    fontSize: '10px',
    color: '#fff',
    textAlign: 'center',
  } as React.CSSProperties,
  deleteButton: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: 'rgba(239, 68, 68, 0.9)',
    border: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  } as React.CSSProperties,
  emptyState: {
    textAlign: 'center',
    padding: '48px 24px',
  } as React.CSSProperties,
  emptyIcon: {
    color: '#444',
    marginBottom: '16px',
  } as React.CSSProperties,
  emptyTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    margin: '0 0 8px 0',
  } as React.CSSProperties,
  emptySubtitle: {
    fontSize: '14px',
    color: '#888',
    margin: 0,
  } as React.CSSProperties,
  hiddenInput: {
    display: 'none',
  } as React.CSSProperties,
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.95)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  modalImage: {
    maxWidth: '90%',
    maxHeight: '80%',
    objectFit: 'contain',
    borderRadius: '8px',
  } as React.CSSProperties,
  modalClose: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1a1a1a',
    border: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#888',
    marginBottom: '12px',
    marginTop: '24px',
  } as React.CSSProperties,
};

export function PhotoGallery({ onBack }: PhotoGalleryProps) {
  const [photos, setPhotos] = useState<ProgressPhoto[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<ProgressPhoto | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const stored = localStorage.getItem('achilles-progress-photos');
      if (stored) {
        const parsed = JSON.parse(stored);
        setPhotos(parsed.map((p: ProgressPhoto) => ({
          ...p,
          date: new Date(p.date)
        })));
      }
    } catch (e) {
      console.error('Error loading photos:', e);
    }
  };

  const savePhotos = (newPhotos: ProgressPhoto[]) => {
    localStorage.setItem('achilles-progress-photos', JSON.stringify(newPhotos));
    setPhotos(newPhotos);
  };

  const handleAddPhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('La imagen es demasiado grande. Máximo 5MB.');
      return;
    }

    // Convert to base64
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = event.target?.result as string;

      const newPhoto: ProgressPhoto = {
        id: uuid(),
        date: new Date(),
        type: 'front',
        imageData,
      };

      const newPhotos = [newPhoto, ...photos];
      savePhotos(newPhotos);
    };
    reader.readAsDataURL(file);

    // Reset input
    e.target.value = '';
  };

  const handleDeletePhoto = (photoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('¿Eliminar esta foto?')) {
      const newPhotos = photos.filter(p => p.id !== photoId);
      savePhotos(newPhotos);
    }
  };

  // Group photos by month
  const groupedPhotos = photos.reduce((acc, photo) => {
    const monthKey = format(new Date(photo.date), 'MMMM yyyy', { locale: es });
    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(photo);
    return acc;
  }, {} as Record<string, ProgressPhoto[]>);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={styles.headerTitle}>Fotos de Progreso</h1>
      </header>

      <div style={styles.container}>
        <button style={styles.addButton} onClick={handleAddPhoto}>
          <Camera size={20} />
          Añadir Foto
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileSelect}
          style={styles.hiddenInput}
        />

        {photos.length === 0 ? (
          <div style={styles.emptyState as React.CSSProperties}>
            <ImageIcon size={64} style={styles.emptyIcon} />
            <p style={styles.emptyTitle}>Sin fotos de progreso</p>
            <p style={styles.emptySubtitle}>
              Toma fotos regularmente para ver tu transformación
            </p>
          </div>
        ) : (
          Object.entries(groupedPhotos).map(([month, monthPhotos]) => (
            <div key={month}>
              <p style={styles.sectionTitle}>{month}</p>
              <div style={styles.grid}>
                {monthPhotos.map(photo => (
                  <div
                    key={photo.id}
                    style={styles.photoCard as React.CSSProperties}
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <img
                      src={photo.imageData}
                      alt={`Progreso ${format(new Date(photo.date), 'dd/MM')}`}
                      style={styles.photoImage as React.CSSProperties}
                    />
                    <div style={styles.photoDate as React.CSSProperties}>
                      {format(new Date(photo.date), 'd MMM', { locale: es })}
                    </div>
                    <button
                      style={styles.deleteButton as React.CSSProperties}
                      onClick={(e) => handleDeletePhoto(photo.id, e)}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Full screen modal */}
      {selectedPhoto && (
        <div style={styles.modal as React.CSSProperties} onClick={() => setSelectedPhoto(null)}>
          <button style={styles.modalClose as React.CSSProperties}>
            <X size={24} />
          </button>
          <img
            src={selectedPhoto.imageData}
            alt="Foto de progreso"
            style={styles.modalImage as React.CSSProperties}
          />
        </div>
      )}
    </div>
  );
}
