import fs from 'fs'
import clipboardy from 'clipboardy'

import dotenv from 'dotenv'

dotenv.config()

const BASE_URL = process.env.BASE_URL as string
const AWS_ACCOUNT_NAME = process.env.AWS_ACCOUNT_NAME as string
const FILE_PATH = process.env.FILE_PATH as string
import { test } from '@playwright/test'
import { GooglePage } from '../pages/googlePage'
import { AWSPage } from '../pages/awsPage'

test.describe('copy access keys', () => {
    test('copy access keys', async ({ page }) => {
        test.setTimeout(300000)
        await page.goto(BASE_URL)
        await page.waitForLoadState('networkidle')
        await GooglePage.googleLogin(page)
        await page.waitForLoadState('networkidle')
        await AWSPage.copyAccessKeys(page)
    })

    test.afterAll(async () => {
        if (fs.existsSync(FILE_PATH)) {
            fs.unlinkSync(FILE_PATH)
            console.log('File deleted')
        }
        // Read data from clipboard
        const copiedData = clipboardy.readSync()

        fs.writeFileSync(FILE_PATH, copiedData)

        // Add [default] section
        const modifiedData = copiedData.replace(AWS_ACCOUNT_NAME, '[default]')

        fs.appendFileSync(FILE_PATH, '\n')
        fs.appendFileSync(FILE_PATH, '\n')

        // Create new file and paste data
        fs.appendFileSync(FILE_PATH, modifiedData)

        // Read data from file
        const data = fs.readFileSync(FILE_PATH, 'utf8')

        // Log data
        console.log(data)
    })
})
