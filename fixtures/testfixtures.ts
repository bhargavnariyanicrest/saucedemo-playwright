import { test as base, expect } from '@playwright/test';

import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

type TestFixtures = {
  inventoryPage: InventoryPage;
  cartPage: CartPage;
};

export const test = base.extend<TestFixtures>({
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect };
