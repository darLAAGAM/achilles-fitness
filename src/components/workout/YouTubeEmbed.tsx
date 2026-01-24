import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  url: string;
  title?: string;
}

function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

export function YouTubeEmbed({ url, title = 'Video tutorial' }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoId = extractVideoId(url);

  if (!videoId) {
    return (
      <div className="aspect-video bg-[var(--color-surface-elevated)] rounded-xl flex items-center justify-center">
        <p className="text-sm text-[var(--color-text-secondary)]">Video no disponible</p>
      </div>
    );
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!isLoaded) {
    return (
      <button
        onClick={() => setIsLoaded(true)}
        className="relative aspect-video w-full bg-[var(--color-surface-elevated)] rounded-xl overflow-hidden group"
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback to hqdefault if maxresdefault doesn't exist
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-active:bg-black/60 transition-colors">
          <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
            <Play size={32} className="text-black ml-1" />
          </div>
        </div>
        <p className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-lg">
          Ver tutorial
        </p>
      </button>
    );
  }

  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
