import dotenv from 'dotenv';

dotenv.config();

export function env(key: string, fallback: string): string {
  return process.env[key] ?? fallback;
}
