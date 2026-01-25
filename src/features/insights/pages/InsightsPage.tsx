import { useState, useEffect, useMemo } from 'react';
import {
  Lightbulb, Search,
  Bookmark, BookmarkCheck, X, Shuffle
} from 'lucide-react';
import {
  insights,
  categoryInfo,
  sourceInfo,
  getDailyInsight,
  searchInsights,
  type Insight,
  type InsightCategory
} from '../../../data/insights';

const colors = {
  background: '#0a0a0a',
  card: '#1a1a1a',
  cardElevated: '#252525',
  text: '#ffffff',
  textSecondary: '#888888',
  accent: '#d4af37',
  success: '#22c55e',
};

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: colors.background,
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 100px)',
  } as React.CSSProperties,
  header: {
    padding: '24px',
    paddingTop: '16px',
  } as React.CSSProperties,
  headerTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
    marginBottom: '4px',
  } as React.CSSProperties,
  headerSubtitle: {
    fontSize: '14px',
    color: colors.textSecondary,
    margin: 0,
  } as React.CSSProperties,
  container: {
    padding: '0 24px 24px',
  } as React.CSSProperties,
  searchContainer: {
    position: 'relative',
    marginBottom: '16px',
  } as React.CSSProperties,
  searchIcon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.textSecondary,
  } as React.CSSProperties,
  searchInput: {
    width: '100%',
    backgroundColor: colors.card,
    border: 'none',
    borderRadius: '12px',
    padding: '14px 14px 14px 44px',
    fontSize: '15px',
    color: colors.text,
    outline: 'none',
  } as React.CSSProperties,
  dailyCard: {
    background: `linear-gradient(135deg, ${colors.accent}20, ${colors.card})`,
    borderRadius: '20px',
    padding: '20px',
    marginBottom: '24px',
    border: `1px solid ${colors.accent}30`,
  } as React.CSSProperties,
  dailyHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
  } as React.CSSProperties,
  dailyLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: colors.accent,
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
  } as React.CSSProperties,
  dailyTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
    marginBottom: '8px',
  } as React.CSSProperties,
  dailyContent: {
    fontSize: '14px',
    color: colors.textSecondary,
    lineHeight: 1.6,
    margin: 0,
  } as React.CSSProperties,
  dailyActionable: {
    marginTop: '12px',
    padding: '10px 12px',
    backgroundColor: `${colors.accent}15`,
    borderRadius: '8px',
    fontSize: '13px',
    color: colors.accent,
  } as React.CSSProperties,
  categoriesScroll: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
    paddingBottom: '8px',
    marginBottom: '20px',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  } as React.CSSProperties,
  categoryChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    borderRadius: '20px',
    border: 'none',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
    transition: 'all 0.2s',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: colors.textSecondary,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as React.CSSProperties,
  insightCard: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  } as React.CSSProperties,
  insightHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  } as React.CSSProperties,
  insightIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    flexShrink: 0,
  } as React.CSSProperties,
  insightContent: {
    flex: 1,
    minWidth: 0,
  } as React.CSSProperties,
  insightTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
    marginBottom: '4px',
  } as React.CSSProperties,
  insightPreview: {
    fontSize: '13px',
    color: colors.textSecondary,
    margin: 0,
    lineHeight: 1.5,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical' as const,
    overflow: 'hidden',
  } as React.CSSProperties,
  insightMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
  } as React.CSSProperties,
  insightSource: {
    fontSize: '11px',
    color: colors.textSecondary,
    backgroundColor: colors.cardElevated,
    padding: '3px 8px',
    borderRadius: '4px',
  } as React.CSSProperties,
  insightTags: {
    display: 'flex',
    gap: '4px',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  insightTag: {
    fontSize: '10px',
    color: colors.accent,
    backgroundColor: `${colors.accent}15`,
    padding: '2px 6px',
    borderRadius: '4px',
  } as React.CSSProperties,
  // Modal styles
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.95)',
    zIndex: 1000,
    overflowY: 'auto',
    padding: '20px',
    paddingTop: 'calc(env(safe-area-inset-top) + 20px)',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 20px)',
  } as React.CSSProperties,
  modalClose: {
    position: 'absolute',
    top: 'calc(env(safe-area-inset-top) + 16px)',
    right: '16px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: colors.card,
    border: 'none',
    color: colors.text,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
  } as React.CSSProperties,
  modalContent: {
    maxWidth: '600px',
    margin: '0 auto',
    paddingTop: '40px',
  } as React.CSSProperties,
  modalCategory: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '16px',
  } as React.CSSProperties,
  modalTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
    marginBottom: '16px',
    lineHeight: 1.3,
  } as React.CSSProperties,
  modalBody: {
    fontSize: '16px',
    color: colors.textSecondary,
    lineHeight: 1.7,
    marginBottom: '24px',
  } as React.CSSProperties,
  modalActionable: {
    backgroundColor: `${colors.accent}15`,
    borderLeft: `3px solid ${colors.accent}`,
    padding: '16px',
    borderRadius: '0 12px 12px 0',
    marginBottom: '24px',
  } as React.CSSProperties,
  modalActionableLabel: {
    fontSize: '11px',
    fontWeight: '600',
    color: colors.accent,
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    marginBottom: '8px',
  } as React.CSSProperties,
  modalActionableText: {
    fontSize: '15px',
    color: colors.text,
    margin: 0,
    lineHeight: 1.5,
  } as React.CSSProperties,
  modalDeepDive: {
    backgroundColor: colors.card,
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '24px',
  } as React.CSSProperties,
  modalDeepDiveLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: '8px',
  } as React.CSSProperties,
  modalDeepDiveText: {
    fontSize: '14px',
    color: colors.textSecondary,
    lineHeight: 1.6,
    margin: 0,
  } as React.CSSProperties,
  modalSource: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: colors.card,
    borderRadius: '12px',
    padding: '12px 16px',
    marginBottom: '24px',
  } as React.CSSProperties,
  modalSourceName: {
    fontSize: '14px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
  } as React.CSSProperties,
  modalSourceDesc: {
    fontSize: '12px',
    color: colors.textSecondary,
    margin: 0,
  } as React.CSSProperties,
  modalTags: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
  } as React.CSSProperties,
  modalTag: {
    fontSize: '12px',
    color: colors.accent,
    backgroundColor: `${colors.accent}15`,
    padding: '6px 12px',
    borderRadius: '6px',
  } as React.CSSProperties,
  emptyState: {
    textAlign: 'center',
    padding: '48px 24px',
  } as React.CSSProperties,
  emptyText: {
    color: colors.textSecondary,
    fontSize: '15px',
  } as React.CSSProperties,
  bookmarkButton: {
    background: 'none',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    color: colors.textSecondary,
  } as React.CSSProperties,
};

export function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<InsightCategory | 'all'>('all');
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [savedInsights, setSavedInsights] = useState<string[]>([]);
  const [showSaved, setShowSaved] = useState(false);

  const dailyInsight = useMemo(() => getDailyInsight(), []);

  useEffect(() => {
    // Load saved insights from localStorage
    const saved = localStorage.getItem('achilles-saved-insights');
    if (saved) {
      setSavedInsights(JSON.parse(saved));
    }
  }, []);

  const toggleSaveInsight = (insightId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newSaved = savedInsights.includes(insightId)
      ? savedInsights.filter(id => id !== insightId)
      : [...savedInsights, insightId];

    setSavedInsights(newSaved);
    localStorage.setItem('achilles-saved-insights', JSON.stringify(newSaved));
  };

  const filteredInsights = useMemo(() => {
    let result = insights;

    // Filter by search
    if (searchQuery) {
      result = searchInsights(searchQuery);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(i => i.category === selectedCategory);
    }

    // Filter by saved
    if (showSaved) {
      result = result.filter(i => savedInsights.includes(i.id));
    }

    return result;
  }, [searchQuery, selectedCategory, showSaved, savedInsights]);

  const categories = Object.entries(categoryInfo) as [InsightCategory, typeof categoryInfo[InsightCategory]][];

  const renderInsightCard = (insight: Insight) => {
    const catInfo = categoryInfo[insight.category];
    const isSaved = savedInsights.includes(insight.id);

    return (
      <div
        key={insight.id}
        style={styles.insightCard}
        onClick={() => setSelectedInsight(insight)}
      >
        <div style={styles.insightHeader}>
          <div style={{
            ...styles.insightIcon,
            backgroundColor: `${catInfo.color}20`,
          }}>
            {catInfo.icon}
          </div>
          <div style={styles.insightContent}>
            <h3 style={styles.insightTitle}>{insight.title}</h3>
            <p style={styles.insightPreview}>{insight.content}</p>
            <div style={styles.insightMeta}>
              <span style={styles.insightSource}>
                {sourceInfo[insight.source].name}
              </span>
              <div style={styles.insightTags}>
                {insight.tags.slice(0, 2).map(tag => (
                  <span key={tag} style={styles.insightTag}>#{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <button
            style={{
              ...styles.bookmarkButton,
              color: isSaved ? colors.accent : colors.textSecondary,
            }}
            onClick={(e) => toggleSaveInsight(insight.id, e)}
          >
            {isSaved ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Consejos</h1>
        <p style={styles.headerSubtitle}>Conocimiento experto para tu transformación</p>
      </header>

      <div style={styles.container}>
        {/* Search */}
        <div style={styles.searchContainer as React.CSSProperties}>
          <Search size={18} style={styles.searchIcon as React.CSSProperties} />
          <input
            type="text"
            placeholder="Buscar consejos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        {/* Daily Insight */}
        {!searchQuery && selectedCategory === 'all' && !showSaved && (
          <div style={styles.dailyCard} onClick={() => setSelectedInsight(dailyInsight)}>
            <div style={styles.dailyHeader}>
              <Lightbulb size={18} color={colors.accent} />
              <span style={styles.dailyLabel}>Consejo del día</span>
            </div>
            <h2 style={styles.dailyTitle}>{dailyInsight.title}</h2>
            <p style={styles.dailyContent}>{dailyInsight.content}</p>
            {dailyInsight.actionable && (
              <div style={styles.dailyActionable}>
                <strong>Acción:</strong> {dailyInsight.actionable}
              </div>
            )}
          </div>
        )}

        {/* Categories */}
        <div style={styles.categoriesScroll}>
          <button
            style={{
              ...styles.categoryChip,
              backgroundColor: selectedCategory === 'all' && !showSaved ? colors.accent : colors.card,
              color: selectedCategory === 'all' && !showSaved ? '#000' : colors.text,
            }}
            onClick={() => { setSelectedCategory('all'); setShowSaved(false); }}
          >
            Todos
          </button>
          <button
            style={{
              ...styles.categoryChip,
              backgroundColor: showSaved ? colors.accent : colors.card,
              color: showSaved ? '#000' : colors.text,
            }}
            onClick={() => setShowSaved(!showSaved)}
          >
            <Bookmark size={14} />
            Guardados
          </button>
          {categories.map(([key, info]) => (
            <button
              key={key}
              style={{
                ...styles.categoryChip,
                backgroundColor: selectedCategory === key && !showSaved ? info.color : colors.card,
                color: selectedCategory === key && !showSaved ? '#fff' : colors.text,
              }}
              onClick={() => { setSelectedCategory(key); setShowSaved(false); }}
            >
              {info.icon} {info.name}
            </button>
          ))}
        </div>

        {/* Insights List */}
        <div style={styles.sectionTitle}>
          <span>
            {showSaved
              ? `${filteredInsights.length} guardados`
              : searchQuery
                ? `${filteredInsights.length} resultados`
                : selectedCategory === 'all'
                  ? `${filteredInsights.length} consejos`
                  : categoryInfo[selectedCategory].name
            }
          </span>
          <button
            style={{ background: 'none', border: 'none', color: colors.accent, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}
            onClick={() => {
              const randomIndex = Math.floor(Math.random() * filteredInsights.length);
              if (filteredInsights[randomIndex]) {
                setSelectedInsight(filteredInsights[randomIndex]);
              }
            }}
          >
            <Shuffle size={14} /> Aleatorio
          </button>
        </div>

        {filteredInsights.length === 0 ? (
          <div style={styles.emptyState as React.CSSProperties}>
            <p style={styles.emptyText}>
              {showSaved
                ? 'No tienes consejos guardados aún'
                : 'No se encontraron consejos'}
            </p>
          </div>
        ) : (
          filteredInsights.map(renderInsightCard)
        )}
      </div>

      {/* Detail Modal */}
      {selectedInsight && (
        <div style={styles.modal as React.CSSProperties}>
          <button style={styles.modalClose as React.CSSProperties} onClick={() => setSelectedInsight(null)}>
            <X size={24} />
          </button>
          <div style={styles.modalContent}>
            {/* Category badge */}
            <div style={{
              ...styles.modalCategory,
              backgroundColor: `${categoryInfo[selectedInsight.category].color}20`,
              color: categoryInfo[selectedInsight.category].color,
            }}>
              {categoryInfo[selectedInsight.category].icon}
              {categoryInfo[selectedInsight.category].name}
            </div>

            {/* Title */}
            <h1 style={styles.modalTitle}>{selectedInsight.title}</h1>

            {/* Main content */}
            <p style={styles.modalBody}>{selectedInsight.content}</p>

            {/* Actionable tip */}
            {selectedInsight.actionable && (
              <div style={styles.modalActionable}>
                <p style={styles.modalActionableLabel}>Acción concreta</p>
                <p style={styles.modalActionableText}>{selectedInsight.actionable}</p>
              </div>
            )}

            {/* Deep dive */}
            {selectedInsight.deepDive && (
              <div style={styles.modalDeepDive}>
                <p style={styles.modalDeepDiveLabel}>Profundizando...</p>
                <p style={styles.modalDeepDiveText}>{selectedInsight.deepDive}</p>
              </div>
            )}

            {/* Source */}
            <div style={styles.modalSource}>
              <div>
                <p style={styles.modalSourceName}>{sourceInfo[selectedInsight.source].name}</p>
                <p style={styles.modalSourceDesc}>{sourceInfo[selectedInsight.source].description}</p>
              </div>
            </div>

            {/* Tags */}
            <div style={styles.modalTags}>
              {selectedInsight.tags.map(tag => (
                <span key={tag} style={styles.modalTag}>#{tag}</span>
              ))}
            </div>

            {/* Save button */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '14px',
                marginTop: '24px',
                border: 'none',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                backgroundColor: savedInsights.includes(selectedInsight.id) ? colors.card : colors.accent,
                color: savedInsights.includes(selectedInsight.id) ? colors.text : '#000',
              }}
              onClick={() => toggleSaveInsight(selectedInsight.id)}
            >
              {savedInsights.includes(selectedInsight.id) ? (
                <>
                  <BookmarkCheck size={18} /> Guardado
                </>
              ) : (
                <>
                  <Bookmark size={18} /> Guardar consejo
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
