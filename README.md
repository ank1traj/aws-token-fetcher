# AWS Token Automation Script

This repository contains a simple automation script designed to fetch AWS tokens and store them in the system without requiring any manual intervention, except for the approval of Gmail two-factor authentication (2FA).

## Overview

The automation script automates the process of fetching AWS tokens and securely storing them in the system by performing the following steps:

1. Requests AWS tokens from the AWS Identity and Access Management (IAM) service.
2. Retrieves the tokens and securely stores them in the system.
3. Requires manual approval of Gmail two-factor authentication for authentication purposes.

## Prerequisites

Before running the automation script, ensure the following prerequisites are met:

- Node.js and npm are installed on your system.
- You have appropriate permissions to request AWS tokens from IAM.
- You have a Gmail account with two-factor authentication enabled.

## Usage

To use the automation script:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the directory containing the script.
3. Install the required Node modules by running: `yarn install or npm install`

6. Run the script using the appropriate command. (e.g., `yarn test`)
7. Verify and approve the Gmail two-factor authentication request when prompted.

## Security Note

Ensure that the fetched AWS tokens are securely stored and not exposed to unauthorized users. Handle the tokens with care to prevent any security breaches or unauthorized access to AWS resources.

## Disclaimer

This automation script is provided as-is, without any warranties or guarantees. Use it at your own risk. The script author is not responsible for any unintended consequences or misuse.
