import { env } from './env';

export const URLS = {
  BASE: env('BASE_URL', 'https://www.saucedemo.com'),
  INVENTORY: '/inventory.html',
  CART: '/cart.html',
} as const;

export const UserCredentials = {
  USERNAME: env('SAUCE_USERNAME', 'standard_user'),
  PASSWORD: env('SAUCE_PASSWORD', 'secret_sauce'),
} as const;

export const Products = {
  BACKPACK: 'Sauce Labs Backpack',
} as const;

export const AUTH_FILE = 'playwright/.auth/standard-user.json';
