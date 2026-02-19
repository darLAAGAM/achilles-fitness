import { supabase } from './client';
import { db, exportData } from '../db/database';

const SYNC_KEY = 'default'; // single-user app
const SYNC_DEBOUNCE_MS = 5000;

let syncTimer: ReturnType<typeof setTimeout> | null = null;
let isSyncing = false;

/**
 * Upload local DB to Supabase
 */
export async function pushToCloud(): Promise<{ success: boolean; error?: string }> {
  if (isSyncing) return { success: false, error: 'Sync already in progress' };
  isSyncing = true;

  try {
    const jsonStr = await exportData();
    const data = JSON.parse(jsonStr);

    const { error } = await supabase
      .from('user_data')
      .upsert({
        id: SYNC_KEY,
        data,
        updated_at: new Date().toISOString(),
      });

    if (error) throw error;

    localStorage.setItem('lastSyncAt', new Date().toISOString());
    return { success: true };
  } catch (e: any) {
    console.error('[Sync] Push failed:', e);
    return { success: false, error: e.message };
  } finally {
    isSyncing = false;
  }
}

/**
 * Download cloud data and replace local DB
 */
export async function pullFromCloud(): Promise<{ success: boolean; hasData: boolean; error?: string }> {
  if (isSyncing) return { success: false, hasData: false, error: 'Sync already in progress' };
  isSyncing = true;

  try {
    const { data: row, error } = await supabase
      .from('user_data')
      .select('data, updated_at')
      .eq('id', SYNC_KEY)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No data in cloud yet
        return { success: true, hasData: false };
      }
      throw error;
    }

    if (!row?.data) return { success: true, hasData: false };

    const cloudData = row.data as any;

    // Import into local DB
    await db.transaction('rw',
      [db.users, db.exercises, db.workoutPrograms, db.workoutTemplates,
       db.workoutSessions, db.workoutSets, db.progressEntries,
       db.meals, db.foodItems, db.dailyNutritionLogs],
      async () => {
        // Clear existing
        await Promise.all([
          db.users.clear(),
          db.exercises.clear(),
          db.workoutPrograms.clear(),
          db.workoutTemplates.clear(),
          db.workoutSessions.clear(),
          db.workoutSets.clear(),
          db.progressEntries.clear(),
          db.meals.clear(),
          db.foodItems.clear(),
          db.dailyNutritionLogs.clear(),
        ]);

        // Bulk insert
        if (cloudData.users?.length) await db.users.bulkAdd(cloudData.users);
        if (cloudData.exercises?.length) await db.exercises.bulkAdd(cloudData.exercises);
        if (cloudData.workoutPrograms?.length) await db.workoutPrograms.bulkAdd(cloudData.workoutPrograms);
        if (cloudData.workoutTemplates?.length) await db.workoutTemplates.bulkAdd(cloudData.workoutTemplates);
        if (cloudData.workoutSessions?.length) await db.workoutSessions.bulkAdd(cloudData.workoutSessions);
        if (cloudData.workoutSets?.length) await db.workoutSets.bulkAdd(cloudData.workoutSets);
        if (cloudData.progressEntries?.length) await db.progressEntries.bulkAdd(cloudData.progressEntries);
        if (cloudData.meals?.length) await db.meals.bulkAdd(cloudData.meals);
        if (cloudData.foodItems?.length) await db.foodItems.bulkAdd(cloudData.foodItems);
        if (cloudData.dailyNutritionLogs?.length) await db.dailyNutritionLogs.bulkAdd(cloudData.dailyNutritionLogs);
      }
    );

    localStorage.setItem('lastSyncAt', new Date().toISOString());
    return { success: true, hasData: true };
  } catch (e: any) {
    console.error('[Sync] Pull failed:', e);
    return { success: false, hasData: false, error: e.message };
  } finally {
    isSyncing = false;
  }
}

/**
 * Debounced auto-push after local changes
 */
export function schedulePush() {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    pushToCloud();
  }, SYNC_DEBOUNCE_MS);
}

/**
 * Get last sync time
 */
export function getLastSyncTime(): string | null {
  return localStorage.getItem('lastSyncAt');
}

/**
 * Check cloud timestamp without pulling data
 */
export async function getCloudTimestamp(): Promise<string | null> {
  const { data, error } = await supabase
    .from('user_data')
    .select('updated_at')
    .eq('id', SYNC_KEY)
    .single();

  if (error || !data) return null;
  return data.updated_at;
}
