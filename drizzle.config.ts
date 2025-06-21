import { env } from '@/data/env/server';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './src/drizzle/migration',
    schema: './src/drizzle/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: env.DATABASE_URL,
    },
});
