import { test, expect } from '../fixtures/testfixtures';
import { Products, URLS } from '../utils/constants';

test.describe('Shopping cart workflow', () => {
  test('standard user can add backpack to the cart and begin checkout', async ({
    inventoryPage,
    cartPage,
  }) => {
    await inventoryPage.navigate(URLS.INVENTORY);
    await inventoryPage.assertLoaded();
    await inventoryPage.addItemToCartByName(Products.BACKPACK);
    await inventoryPage.goToCart();
    await cartPage.assertLoaded();

    await expect(cartPage.getCartItem(Products.BACKPACK)).toBeVisible();
    await expect(cartPage.getCheckoutButton()).toBeEnabled();
  });
});
