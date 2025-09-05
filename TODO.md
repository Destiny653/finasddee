# Send Money Form UX Enhancements

## Overview
Enhance the send money form to:
- Persist form data if user is not authenticated on submit
- Trigger authentication modal automatically for unauthenticated users
- Add strict validation for necessary input fields

## Tasks

### 1. Authentication Integration in MainSendMoney
- [ ] Import useAuth hook and AuthModal component
- [ ] Add authentication state management
- [ ] Add AuthModal state (open/close, initial form)
- [ ] Implement data persistence in localStorage for unauthenticated users
- [ ] Modify onNextStep to check authentication before proceeding to payment
- [ ] Trigger AuthModal when unauthenticated user tries to submit
- [ ] Restore persisted data after successful authentication

### 2. Form Validation in DetailsStep
- [ ] Add validation for required fields (sender country, receiver country, amount, etc.)
- [ ] Implement validation feedback UI
- [ ] Prevent progression to next step if validation fails
- [ ] Use existing validation patterns from codebase

### 3. Form Validation in ReceiverStep
- [ ] Add validation for required fields (first name, last name, contact, country, etc.)
- [ ] Implement validation feedback UI
- [ ] Prevent progression to next step if validation fails
- [ ] Use existing validation patterns from codebase

### 4. Testing and UX Polish
- [ ] Test complete flow for authenticated users
- [ ] Test complete flow for unauthenticated users
- [ ] Verify data persistence and restoration
- [ ] Ensure smooth UX transitions
- [ ] Handle edge cases (form abandonment, browser refresh, etc.)
