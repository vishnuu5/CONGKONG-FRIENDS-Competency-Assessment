import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yqmmnvuyedlbgzfaakjh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxbW1udnV5ZWRsYmd6ZmFha2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NDYyNDMsImV4cCI6MjA2NzEyMjI0M30.wxxF-JxRiBTSn73DCsMlOE2Loxy8lMnniq3UuUgD5oE'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 