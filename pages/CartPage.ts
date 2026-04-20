import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { URLS } from '../utils/constants';

export class CartPage extends BasePage {
  private readonly checkoutButton: Locator;
  private readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.pageTitle = page.getByTestId('title');
  }

  getCartItem(itemName: string): Locator {
    return this.page.getByTestId('inventory-item').filter({
      has: this.page.getByTestId('inventory-item-name').filter({ hasText: itemName }),
    });
  }

  getCheckoutButton(): Locator {
    return this.checkoutButton;
  }

  async assertLoaded(): Promise<void> {
    await this.assertNavigatedTo(URLS.CART);
    await expect(this.pageTitle).toHaveText('Your Cart');
  }
}
