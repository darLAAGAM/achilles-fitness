import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a no-op client when Supabase is not configured (local-only mode)
function createSupabaseClient(): SupabaseClient {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('[Achilles] No Supabase credentials — running in local-only mode');
    // Return a dummy client that won't throw but won't sync
    return new Proxy({} as SupabaseClient, {
      get: (_target, prop) => {
        if (prop === 'from') return () => new Proxy({} as any, {
          get: () => () => Promise.resolve({ data: null, error: null }),
        });
        if (prop === 'auth') return new Proxy({} as any, {
          get: () => () => Promise.resolve({ data: null, error: null }),
        });
        return () => Promise.resolve({ data: null, error: null });
      },
    });
  }
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

export const supabase = createSupabaseClient();
