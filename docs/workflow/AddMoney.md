---
sidebar_position: 2
---

# Add Money


## Bank Account Linking and Wallet Top-up

Learn how to link your bank account and top up your wallet seamlessly.

### Step 1: Add Money to Your Wallet

- User interface (UI): Users can easily add desired amounts to their wallet by selecting the desired amount through the UI.

### Step 2: Sending Request to Formance

- The UI sends a request to Formance, utilizing the Formance workflow to create a transaction.

### Step 3: Transaction Creation

- Formance workflow creates the first transaction with the source as "World" and the designation as the user's account for incoming funds.

### Step 4: Webhook Notification

- Upon the creation of the transaction in Step 3, Formance sends a webhook notification.

### Step 5: Webhook Listener

- Our API acts as a webhook listener and checks the payment status.

### Step 6: Payment Status Check

- Our API checks the payment status every hour to determine if the payment has been received or not.

### Step 7: Payment Not Received

- If the payment has not been received, the process continues to wait at Step 6 for further updates.

### Step 8: Payment Received

- If the payment has been received, the process proceeds to Step 9.

### Step 9: Creating Another Transaction

- Our API sends a request to create another transaction with the following details:
  - Source: Account Holder Incoming (from Step 3 transaction destination)
  - Destination: Account Holder Main Account
  - Total Accounts:
    - World
    - Account Holder Incoming
    - Account Holder Main Account
  - Transactions:
    - World -> Account Holder Incoming
    - Account Holder Incoming -> Account Holder Main Account
  - External:
    - Common Bank Account

This workflow ensures a seamless process of linking bank accounts, adding funds to wallets, and managing transactions.

<!-- Feel free to add any additional information or details specific to your use case. -->

