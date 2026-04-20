import { expect, Page } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  protected async assertNavigatedTo(path: string): Promise<void> {
    await expect(this.page).toHaveURL(RegExp(path));
  }
}
