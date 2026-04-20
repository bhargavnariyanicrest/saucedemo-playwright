import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AUTH_FILE, UserCredentials } from '../utils/constants';

setup('authenticate standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate('/');
  await loginPage.assertLoaded();
  await loginPage.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);

  await page.context().storageState({ path: AUTH_FILE });
});
