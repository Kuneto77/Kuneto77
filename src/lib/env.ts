function requireEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const env = {
  supabaseUrl: requireEnv('VITE_SUPABASE_URL'),
  supabasePublishableKey: requireEnv('VITE_SUPABASE_PUBLISHABLE_KEY'),
  supabaseProjectId: requireEnv('VITE_SUPABASE_PROJECT_ID'),
} as const;
