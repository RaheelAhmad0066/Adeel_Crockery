import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://yxrmvkwokstrnncknlnq.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_hgLrbBuFM5W6EEIvmAHn5A_tkCe8yUT';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

