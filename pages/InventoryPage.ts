import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { URLS } from '../utils/constants';

export class InventoryPage extends BasePage {
  private readonly cartLink: Locator;
  private readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.cartLink = page.getByTestId('shopping-cart-link');
    this.pageTitle = page.getByTestId('title');
  }

  async assertLoaded(): Promise<void> {
    await this.assertNavigatedTo(URLS.INVENTORY);
    await expect(this.pageTitle).toHaveText('Products');
  }

  private inventoryItem(itemName: string): Locator {
    return this.page.getByTestId('inventory-item').filter({
      has: this.page.getByTestId('inventory-item-name').filter({ hasText: itemName }),
    });
  }

  async addItemToCartByName(itemName: string): Promise<void> {
    const addToCartButton = this.inventoryItem(itemName).getByRole('button', {
      name: 'Add to cart',
    });

    await addToCartButton.click();
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
  }
}
