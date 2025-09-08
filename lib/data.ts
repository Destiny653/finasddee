import { Country, Testimonial, FAQ } from './schemas'

export const senderCountries: Country[] = [
  { code: 'AU', name: 'Australia', currency: 'AUD', flag: '🇦🇺' },
  { code: 'BH', name: 'Bahrain', currency: 'BHD', flag: '🇧🇭' },
  { code: 'BR', name: 'Brazil', currency: 'BRL', flag: '🇧🇷' },
  { code: 'CA', name: 'Canada', currency: 'CAD', flag: '🇨🇦' },
  { code: 'CN', name: 'China', currency: 'CNY', flag: '🇨🇳' },
  { code: 'DK', name: 'Denmark', currency: 'DKK', flag: '🇩🇰' },
  { code: 'FR', name: 'France', currency: 'EUR', flag: '🇫🇷' },
  { code: 'DE', name: 'Germany', currency: 'EUR', flag: '🇩🇪' },
  { code: 'IS', name: 'Iceland', currency: 'ISK', flag: '🇮🇸' },
  { code: 'IT', name: 'Italy', currency: 'EUR', flag: '🇮🇹' },
  { code: 'NZ', name: 'New Zealand', currency: 'NZD', flag: '🇳🇿' },
  { code: 'NO', name: 'Norway', currency: 'NOK', flag: '🇳🇴' },
  { code: 'RU', name: 'Russia', currency: 'RUB', flag: '🇷🇺' },
  { code: 'ES', name: 'Spain', currency: 'EUR', flag: '🇪🇸' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', flag: '🇬🇧' },
  { code: 'US', name: 'United States', currency: 'USD', flag: '🇺🇸' },
  { code: 'VN', name: 'Vietnam', currency: 'VND', flag: '🇻🇳' },
]

export const receiverCountries: Country[] = [
  { code: 'AL', name: 'Albania', currency: 'ALL', flag: '🇦🇱' },
  { code: 'DZ', name: 'Algeria', currency: 'DZD', flag: '🇩🇿' },
  { code: 'AU', name: 'Australia', currency: 'AUD', flag: '🇦🇺' },
  { code: 'BS', name: 'Bahamas', currency: 'BSD', flag: '🇧🇸' },
  { code: 'BY', name: 'Belarus', currency: 'BYN', flag: '🇧🇾' },
  { code: 'KH', name: 'Cambodia', currency: 'KHR', flag: '🇰🇭' },
  { code: 'CN', name: 'China', currency: 'CNY', flag: '🇨🇳' },
  { code: 'HR', name: 'Croatia', currency: 'HRK', flag: '🇭🇷' },
  { code: 'DE', name: 'Germany', currency: 'EUR', flag: '🇩🇪' },
  { code: 'IR', name: 'Iran', currency: 'IRR', flag: '🇮🇷' },
  { code: 'IT', name: 'Italy', currency: 'EUR', flag: '🇮🇹' },
  { code: 'LV', name: 'Latvia', currency: 'EUR', flag: '🇱🇻' },
  { code: 'MA', name: 'Morocco', currency: 'MAD', flag: '🇲🇦' },
  { code: 'NP', name: 'Nepal', currency: 'NPR', flag: '🇳🇵' },
  { code: 'RO', name: 'Romania', currency: 'RON', flag: '🇷🇴' },
  { code: 'RU', name: 'Russia', currency: 'RUB', flag: '🇷🇺' },
  { code: 'RS', name: 'Serbia', currency: 'RSD', flag: '🇷🇸' },
  { code: 'ES', name: 'Spain', currency: 'EUR', flag: '🇪🇸' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', flag: '🇬🇧' },
  { code: 'US', name: 'United States', currency: 'USD', flag: '🇺🇸' },
  { code: 'VN', name: 'Vietnam', currency: 'VND', flag: '🇻🇳' },
]

export const networkCountries: Country[] = [
  { code: 'AL', name: 'Albania', currency: 'ALL', flag: '🇦🇱' },
  { code: 'DZ', name: 'Algeria', currency: 'DZD', flag: '🇩🇿' },
  { code: 'AU', name: 'Australia', currency: 'AUD', flag: '🇦🇺' },
  { code: 'BS', name: 'Bahamas', currency: 'BSD', flag: '🇧🇸' },
  { code: 'BY', name: 'Belarus', currency: 'BYN', flag: '🇧🇾' },
  { code: 'KH', name: 'Cambodia', currency: 'KHR', flag: '🇰🇭' },
  { code: 'CN', name: 'China', currency: 'CNY', flag: '🇨🇳' },
  { code: 'HR', name: 'Croatia', currency: 'HRK', flag: '🇭🇷' },
  { code: 'DE', name: 'Germany', currency: 'EUR', flag: '🇩🇪' },
  { code: 'IR', name: 'Iran', currency: 'IRR', flag: '🇮🇷' },
  { code: 'IT', name: 'Italy', currency: 'EUR', flag: '🇮🇹' },
  { code: 'LV', name: 'Latvia', currency: 'EUR', flag: '🇱🇻' },
  { code: 'MA', name: 'Morocco', currency: 'MAD', flag: '🇲🇦' },
  { code: 'NP', name: 'Nepal', currency: 'NPR', flag: '🇳🇵' },
  { code: 'RO', name: 'Romania', currency: 'RON', flag: '🇷🇴' },
  { code: 'RU', name: 'Russia', currency: 'RUB', flag: '🇷🇺' },
  { code: 'RS', name: 'Serbia', currency: 'RSD', flag: '🇷🇸' },
  { code: 'ES', name: 'Spain', currency: 'EUR', flag: '🇪🇸' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', flag: '🇬🇧' },
  { code: 'US', name: 'United States', currency: 'USD', flag: '🇺🇸' },
  { code: 'VN', name: 'Vietnam', currency: 'VND', flag: '🇻🇳' },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Easy to use, reasonably priced simply dummy text of the printing and typesetting industry.',
    author: 'Jay Shah',
    position: 'Founder',
    company: 'Icomatic Pvt Ltd'
  },
  {
    id: '2',
    quote: 'I am happy Working with printing and typesetting industry.',
    author: 'Patrick Cary',
    position: 'Freelancer',
    company: 'USA'
  },
  {
    id: '3',
    quote: 'Fast easy to use transfers to a different currency. Much better value that the banks.',
    author: 'De Mortel',
    position: 'Online Retail',
  },
  {
    id: '4',
    quote: 'I have used them twice now. Good rates, very efficient service and it denies high street banks an undeserved windfall. Excellent.',
    author: 'Chris Tom',
    position: 'User',
    company: 'UK'
  },
  {
    id: '5',
    quote: "It's a real good idea to manage your money by Finasddee. The rates are fair and you can carry out the transactions without worrying!",
    author: 'Mauri Lindberg',
    position: 'Freelancer',
    company: 'Australia'
  },
  {
    id: '6',
    quote: "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment.",
    author: 'Dennis Jacques',
    position: 'User',
    company: 'USA'
  }
]

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I send money to an overseas Bank Account?',
    answer: 'You will first have to register with us! We will then send you an email to activate your online account. Upon activating your online account you can start sending money to almost any bank account in many country securely – although some restrictions do apply. You just need the bank account details (such as the SWIFT BIC number and/or IBAN number – depending on the country of the recipient.)'
  },
  {
    id: '2',
    question: 'Do I need to Register?',
    answer: 'Yes, you will need to register with us to use our service. This will only take a minute and it is FREE! There is no obligation to use our service. Once you have registered, you can send up to around $900 or EUR 1000 to most countries we serve. To send more, and to allow a wider list of countries and payment methods you will need to verify your account with Finasddee.'
  },
  {
    id: '3',
    question: 'What is the minimum or maximum amount I can transfer?',
    answer: 'You need to transfer a minimum amount of $10 or the equivalent in your currency. Once you have registered, you can send a maximum amount of $900 or EUR 1000 per year before account verification. Once you have verified your Finasddee account you will be able to send up to $10,000 per transaction online via Bank Transfer and a maximum amount of $5,000 via card. However, you can make more than one card payment a day. To verify your account we need (i) one proof of identity (i.e. Passport, National ID card, EU national resident permit, or EEA photo card driving license) and (ii) one proof of address (i.e. Utility bill, Local authority tax bill, or a recent bank statement).'
  },
  {
    id: '4',
    question: 'How long will my bank-to-bank transfer take?',
    answer: 'Depending how long your funds take to reach us (BACS/CHAPS/Debit or Credit card). Once your funds have been received and cleared, we will send out the required currency to the recipient\'s bank account within the day if it is before the cut off time. However, bear in mind different currencies and time zones vary the time for the funds to reach and be cleared by the designated bank. Most currency transfers can take up 2 to 3 days to be cleared and arrive in the designated bank account. You will receive a confirmation when we have sent out your funds.'
  },
  {
    id: '5',
    question: 'How does Finasddee money transfer save me money?',
    answer: 'Finasddee is an independent commercial foreign exchange provider. This means that we buy the currency in bulk from the market at "wholesale rates" and then pass on the price benefit to our clients. This could mean a saving from a hundred to several thousand pounds (depending on the amount you purchase). Finasddee provides foreign exchange at "commercial rates" as opposed to the "tourist rates" that you get from high street banks.'
  },
  {
    id: '6',
    question: 'Can I pay by Credit or Debit Card?',
    answer: 'Yes you can. There is a small charge of 0.50% for using a USD debit card, but with a credit card we charge 3% for processing.'
  },
  {
    id: '7',
    question: 'How do I send Cash for an overseas person to collect?',
    answer: 'We currently provide a cash pickup service at certain country destinations. Please check our pick-up locations per country for availability.'
  },
  {
    id: '8',
    question: 'What details do I need to send money to someone\'s bank account?',
    answer: 'These can vary depending on the designated country and due to compliance checks. For the majority of transfers, you\'ll need your recipient\'s bank account details and the bank SWIFT/IBAN code.'
  },
  {
    id: '9',
    question: 'Can I amend my beneficiary details once the transaction is confirmed?',
    answer: 'Once your transaction is confirmed, we cannot amend your beneficiary details for security reasons. We recommend that you cancel your transaction immediately and create a new one with the correct beneficiary details. You can also create a new recipient with new details and delete the wrong one from your dashboard under "Manage recipients".'
  },
  {
    id: '10',
    question: 'How do I send the money for my transaction?',
    answer: 'In order for us to process your transaction and send money to your beneficiary, we need to receive your payment first. You can pay via: (a) Bank transfer, (b) Debit or credit card, (c) SOFORT.'
  },
  {
    id: '11',
    question: 'How do I cancel a transaction?',
    answer: 'You can cancel your transaction if your deal status is 25%. If your deal status is 50%, it means that your deal is booked and we have already purchased the currency. If you still want to cancel your transaction, please contact our support team. Please note that a charge may be applied to cover the loss of this booking.'
  },
  {
    id: '12',
    question: 'I made my bank transfer but you haven\'t processed the transaction yet. What has happened?',
    answer: 'If you have sent us your money but your payment has not been processed yet, please check your emails (including junk/spam) before contacting us. We will try to contact you if we need further information to send your money to your beneficiary. Otherwise, please contact our support team.'
  },
  {
    id: '13',
    question: 'Do you take money from my bank account?',
    answer: 'No, we do not and cannot take funds from your bank account. You must instruct your bank to send funds to us. We simply facilitate the exchange and transfer of funds to your payee.'
  },
  {
    id: '14',
    question: 'Is my money safe?',
    answer: 'Your money is always safe. All funds are held in our UK client\'s bank accounts. These accounts are segregated in line with applicable regulations and have been developed to protect client funds in the unexpected event of fraud or bankruptcy. This means that your money is always secure.'
  },
  {
    id: '15',
    question: 'What is the system minimum requirement?',
    answer: 'The system works with most current browsers with no special requirements. In case you face any issues, please contact our support team.'
  },
  {
    id: '16',
    question: 'How secure is Finasddee\'s website?',
    answer: 'Finasddee\'s website is highly secure. We use industry-leading technology to keep your information safe. Finasddee automatically encrypts your confidential information in transit from your computer to ours using the Secure Sockets Layer protocol (SSL) with an encryption key length of 256 bits. Once your information reaches Finasddee, it resides on servers that are heavily guarded and secured. Our servers sit behind an electronic firewall and are not directly connected to the internet, so your private information is available only to authorized systems.'
  }
]
