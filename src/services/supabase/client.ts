import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://bboilfyfifztqztbfelp.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_d0zvSi4iFTGVdaAJ1mCQTw_drgV7tOL';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
