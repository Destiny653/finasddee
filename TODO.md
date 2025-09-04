# Send Money Step Progression Fix

## Completed Tasks
- [x] Add "Continue" button to PaymentCardLayout component
- [x] Modify DetailsStep to pass onNext to SendMoneyDetailsForm
- [x] Update SendMoneyDetailsForm to accept onNext and call it on button click
- [x] Remove Link wrapper from button in SendMoneyDetailsForm
- [x] Make buttonLabel optional in PaymentCardLayout
- [x] Conditionally render button in PaymentCardLayout only if buttonLabel and onNext provided
- [x] Remove buttonLabel and onNext from DetailsStep PaymentCardLayout to avoid duplicate buttons

## Summary
The changes ensure that when users fill in the details step and click "Continue", the step changes to the recipient step. The form includes validation for the amount, and upon successful validation, it calls the onNext function to proceed to the next step. Other steps (recipient and payment) use the button from PaymentCardLayout for consistency.

## Add Search to Send Money Form Dropdowns

## Pending Tasks
- [x] Import CustomCombobox in SendMoneyDetailsForm.tsx
- [x] Define options arrays for sender countries, receiver countries, delivery methods, and sending currencies
- [x] Replace sender country select with CustomCombobox
- [x] Replace receiver country select with CustomCombobox
- [x] Replace delivery methods select with CustomCombobox
- [x] Replace sending currency select with CustomCombobox, adjusting styling for input group
- [x] Test search functionality in all dropdowns
- [x] Verify styling consistency
- [x] Fix dropdown width to match select field width and make responsive

## Add Review Step and Refresh Alert

## Completed Tasks
- [x] Add state for detailsData and receiverData in MainSendMoney.tsx
- [x] Modify SendMoneyDetailsForm to accept onDataChange callback
- [x] Modify ReceiverStep to manage receiver data and call onDataChange
- [x] Create ReviewStep component to display details and receiver info
- [x] Update switch in MainSendMoney to use ReviewStep for case 2
- [x] Add refresh alert in MainSendMoney using beforeunload if data exists
- [x] Test the review step display and refresh alert

## Replace Browser Alerts with Sonner Notifications

## Completed Tasks
- [x] Add Toaster component to app/layout.tsx for global sonner notifications
- [x] Replace native alert in SendMoneyDetailsForm with sonner toast for invalid amount
- [x] Replace native alert in MainSendMoney beforeunload with sonner toast (removed blocking dialog)
- [x] Test the changes to ensure sonner notifications appear instead of browser alerts
