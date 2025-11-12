// ================================================
// SUPABASE CONFIGURATION
// استبدل القيم بمعلوماتك من Supabase
// ================================================

const SUPABASE_CONFIG = {
  url: 'https://pbbgxpnkgkknjyuinsfc.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiYmd4cG5rZ2trbmp5dWluc2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0OTE5MjMsImV4cCI6MjA3NTA2NzkyM30.wLF7VNGabpzExKO43KzqEed5C7YJ0bBl8OZSDIhZ3x8'
};

// تهيئة Supabase Client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

console.log('✅ Supabase initialized successfully');
