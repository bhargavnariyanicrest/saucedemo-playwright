import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { URLS } from '../utils/constants';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly appLogo: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.appLogo = page.getByText('Swag Labs');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.assertNavigatedTo(URLS.INVENTORY);
  }

  async assertLoaded(): Promise<void> {
    await expect(this.appLogo).toBeVisible();
  }
}
