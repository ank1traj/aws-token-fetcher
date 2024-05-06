import { Page } from 'playwright-core'

// locators
const filterAccounts = 'Filter accounts by name, ID,'
const accountListCell = 'account-list-cell'
const roleCreationActionButton = 'role-creation-action-button'
const copyButton = 'Copy'
const addProfile = 'Option 2: Add a profile to'

export class AWSPage {
    static async copyAccessKeys(page: Page) {
        await page.getByPlaceholder(filterAccounts).click()
        await page.getByPlaceholder(filterAccounts).fill('staging')
        await page.getByTestId(accountListCell).click()
        await page.getByTestId(roleCreationActionButton).click()
        await page
            .getByLabel(addProfile)
            .getByRole('button', { name: copyButton })
            .click()
    }
}
