import { Page } from 'playwright-core'
import dotenv from 'dotenv'

dotenv.config()

const EMAIL: string = process.env.EMAIL as string
const PASSWORD = process.env.PASSWORD as string

// selectors
const email = 'Email or phone'
const password = 'Enter your password'
const next = 'Next'
const notAskAgain = 'Don’t ask again on this device'

export class GooglePage {
    static async googleLogin(page: Page) {
        await page.waitForLoadState('networkidle')
        await page.getByLabel(email).click()
        await page.getByLabel(email).fill(EMAIL)
        await page.getByLabel(email).press('Enter')
        await page.getByLabel(password).click()
        await page.getByLabel(password).fill(PASSWORD)
        await page.getByRole('button', { name: next }).click()
        await page.getByLabel(notAskAgain).uncheck()
    }
}
