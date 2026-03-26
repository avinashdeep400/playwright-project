import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ferguson-tst.mdm.stibosystems.com/#');
  await page.getByRole('textbox', { name: 'someone@example.com' }).click();
  await page.getByRole('textbox', { name: 'someone@example.com' }).fill('polavarapu.avinashdeep@ferguson.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('MDM');
  await page.getByRole('textbox', { name: 'Enter the password for' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('MDMcareer@12');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByRole('link', { name: 'webui_icon POB' }).click();
  await page.goto('https://ferguson-tst.mdm.stibosystems.com/webui/prod_onboarding#deepLink=1&contextID=Context1&workspaceID=Main&screen=homepage');
  await page.locator('#Mirakl_Inbound div').filter({ hasText: /^Select file$/ }).click();
});