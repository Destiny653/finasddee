import PageHeader from '@/app/_components/layout/header/PageHeader'
import LandingPageFooter from '@/app/_components/layout/landingPage/footer'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'User Agreement | Finasddee',
  description: 'Terms and Conditions governing the use of the Finasddee website and associated services.',
}

export default function UserAgreementPage() {
  return (
    <>
      {/* <Preloader /> */}

      <div className="min-h-screen bg-gray-100">
        <PageHeader/>
        {/* Page Header / Breadcrumb */}
        <section className="py-12 pt-0 bg-gold-dark text-white">
          <div className="bg-gray-700 py-12 mx-auto px-4">
            <div className="text-center ">
              <nav className="mb-2  text-white/80">
                <ol className="inline-flex items-center space-x-2">
                  <li>
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="opacity-70">/</span>
                  </li>
                  <li className="opacity-100">User Agreement</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold">User Agreement</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <main>
          <section className="py-10">
            <div className="container mx-auto px-4 text-black">
              <div className="max-w-4xl mx-auto">
                {/* 1. CONTRACT FORMATION AND OVERVIEW */}
                <h4>1. CONTRACT FORMATION AND OVERVIEW</h4>
                <p>
                  1.1 These Terms and Conditions govern the terms under which you may access and use this website and the services associated with it (together, the "Service"). By accessing, registering with and using the Service, you agree to be bound by the terms of the Terms and Conditions. If you do not wish to be bound by the Terms and Conditions do not access, register with or use the Service. The language of these Terms and Conditions is English and all Services, instructions and transactions carried out in connection with it shall be in English.
                </p>
                <p>
                  1.2 In these Terms and Conditions, the terms "SiaRemit", "we", "us", and "our" refer to AGPAYTECH Limited trading as SiaRemit, together with its employees, directors, affiliates, successors, and assigns. AGPAYTECH Limited is a company registered number 7952651 in England and Wales, with its registered office at 3rd Floor, 86-90 Paul Street, London EC2A 4NE, United Kingdom. It is Authorised and Regulated by the Financial Conduct Authority (FCA) under the Payment Service Regulations 2009 for the provision of payment services. Registration number: 585091.
                </p>
                <p>
                  1.3 The terms "you" and "your" refer to users of the Service, whether in their capacity as Senders, Recipients, or visitors to this website.
                </p>
                <p>
                  1.4 These Terms and Conditions are effective from 7th of December 2015. The Terms and Conditions may change from time to time, but changes will only be effective from the date they are made and will not change the terms on which you previously used the Service.
                </p>
                <p>
                  1.5 The Service was created to assist customers to send money to their family and friends, and to receive money from family and friends, around the world. For security reasons, we recommend that you only send money through the Service to people you know personally. You must not use the Service to send money to strangers for example sellers of goods and/or services, private or retail.
                </p>

                {/* 2. DEFINITIONS */}
                <h4>2. DEFINITIONS</h4>
                <p>In this Terms and Conditions:</p>
                <p><strong>"Destination Country"</strong> means the country in which the Recipient receives money through the Service.</p>
                <p><strong>"Local Taxes"</strong> means any taxes or charges payable in the Destination Country.</p>
                <p><strong>"Payment Instrument"</strong> means a valid instrument of payment such as a bank account, debit card or credit card.</p>
                <p><strong>"Payout Amount"</strong> means the amount paid out to the Recipient, after any foreign exchange conversion and excluding Local Taxes.</p>
                <p><strong>"Recipient"</strong> means someone who receives money through the Service.</p>
                <p><strong>"Sender"</strong> means someone who uses the Service to send money.</p>
                <p><strong>"Service Fee"</strong> means the fee plus any additional charges applicable to each Transaction.</p>
                <p><strong>"Service Provider"</strong> means a local bank, money exchange house, or other third party service providers in the Destination Country with whom SiaRemit works in providing the Service.</p>
                <p><strong>"Transaction"</strong> means a specific instruction to send money through the Service.</p>
                <p><strong>"Transaction Amount"</strong> means the amount of money that the Sender wishes to send to the Recipient, excluding any applicable fees and prior to any foreign exchange conversion.</p>

                {/* 3. OUR OBLIGATIONS */}
                <h4>3. OUR OBLIGATIONS</h4>
                <p>
                  3.1 Subject to these Terms and Conditions, we agree to provide the Service to you using reasonable care. The Service may not be available in whole or in part in certain regions, countries, or jurisdictions.
                </p>
                <p>
                  3.2 We are not obliged to process any particular Transaction. When you submit a Transaction, you are requesting that we process the Transaction on your behalf. We may, in our sole discretion, choose whether or not to accept the offer to process that Transaction. However, if we decide not to process the Transaction, we will notify you promptly of that decision and repay the money paid to us.
                </p>
                <p>
                  3.3 SiaRemit reserves the right to modify or discontinue the service or any part of the Service without notice, at any time and from time to time. We may, in our absolute discretion, refuse any Transaction or limit the amount to be transferred, either on a per transaction basis or on an aggregate basis, and either on individual accounts or on related accounts.
                </p>
                <p>
                  3.4 We may, in our sole discretion, refuse Transactions from certain Senders or to certain Recipients, including but not limited to entities and individuals on restricted or prohibited lists issued from time to time by the UK Government and the European Union. In addition, not all Payment Instruments are available to all customers at all times and we may, in our sole discretion, refuse Transactions funded from certain Payment Instruments.
                </p>
                <p>
                  3.5 We will attempt to process Transactions promptly, but any Transaction may be delayed or cancelled for a number of reasons including but not limited to: our efforts to verify your identity; to validate your Transaction instructions; to contact you; or otherwise to comply with applicable law; or due to variations in business hours and currency availability.
                </p>
                <p>
                  3.6 We will attempt to provide Senders and Recipients with up to date information regarding the location and opening hours of our Service Providers by means of information on our website. However, you agree that SiaRemit shall not be held responsible for any inaccuracies that may appear in that information or any consequential loss which may result from incorrect or incomplete information.
                </p>

                {/* 4. YOUR OBLIGATIONS */}
                <h4>4. YOUR OBLIGATIONS</h4>
                <p>You agree that:</p>
                <p>
                  4.1 you will not access, use or attempt to use the Service as a Sender unless you are at least 18 years old, and that you have the legal capacity to form a binding legal contract in the relevant jurisdiction;
                </p>
                <p>
                  4.2 for each Transaction that you submit, you will pay us the Service Fee in addition to the Transaction Amount. Payment becomes due at the time that you submit your Transaction. If you submit a Transaction that results in SiaRemit becoming liable for charges including but not limited to chargeback or other fees, you agree to reimburse us for all such fees;
                </p>
                <p>
                  4.3 in connection with your registration and use of the Service, you will:
                </p>
                <p>4.3.1 provide us with true, accurate, current and complete evidence of your identity, and promptly update your personal information if and when it changes;</p>
                <p>4.3.2 provide our merchant with details of one or more Payment Instruments; and</p>
                <p>4.3.3 provide us with true, accurate, current and complete information for all Transactions.</p>
                <p>
                  We do not accept any liability for damages resulting from non­payment or delay in payment of a money transfer to a Recipient or failure to perform a transaction under the Service by reason of any of these matters.
                </p>
                <p>
                  4.4 when you pay for a Transaction in one currency and the Recipient is paid in another currency, there will be a difference between the exchange rate at which we buy foreign currency and the exchange rate provided to you. SiaRemit and its Service Providers usually make a small profit in these circumstances. If such account is denominated in another currency the amount to be received by the Recipient will be reduced by the amount of extra charges incurred by reason of the incorrect information given by you and we will have no obligation to make good such reduction;
                </p>
                <p>
                  4.5 when you are sending money under these Terms and Conditions, it is your responsibility to make sure all the Transaction details are accurate before submission. Once a Transaction has been submitted for processing it is not normally possible to change any of its details. You will be given the opportunity to confirm Transactions before submission and you must check the details carefully.
                </p>
                <p>
                  4.6 SiaRemit will have no responsibility for any fees or charges you may incur by the use of a particular Payment Instrument to fund a Transaction. These may include but are not limited to unauthorised overdraft fees imposed by banks if there are insufficient funds in your bank account or "cash advance" fees and additional interest which may be imposed by credit card providers if they treat use of the Service as a cash transaction rather than a purchase transaction;
                </p>
                <p>
                  4.7 you will only use the Service to send money to people that you know personally and not to pay for goods or services. If, in breach of this clause, you choose to pay third parties for goods and services using the Service, you acknowledge that SiaRemit has no control over, and is not responsible for, the quality, safety, legality, or delivery of such goods or services and that any such use of the Service is entirely at your own risk. If SiaRemit reasonably believes you are using the Service to purchase goods or services, we reserve the right to cancel your Transaction(s);
                </p>
                <p>
                  4.8 both you and the Recipients will only act on your own behalf. You may not submit or receive a Transaction on behalf of a third person. If you intend to submit or receive a Transaction on behalf of a company, business or any entity other than a human individual, you must first inform SiaRemit of your desire to do so and provide us with any additional information about the entity we may request in order that we may decide whether to permit the Transaction;
                </p>
                <p>
                  4.9 in using the Service you will comply with these Terms and Conditions as well as any applicable laws, rules or regulations. It is a breach of these Terms and Conditions to use the Service to send money (a) to a Recipient who has violated the Terms and Conditions, or (b) in connection with illegal activity including without limitation money­laundering, fraud and the funding of terrorist organisations. If you use the Service in connection with illegal activity, SiaRemit may report you to the appropriate legal authorities;
                </p>
                <p>
                  4.10 when using our website or the Service or when interacting with SiaRemit, with another user or with a third party, you will not:
                </p>
                <p>• breach this Terms and Conditions, or any other agreement between you and SiaRemit;</p>
                <p>• open more than one account, without our prior written permission;</p>
                <p>• provide false, inaccurate, or misleading information;</p>
                <p>• allow anyone else access to your registration details, and will keep those details secure;</p>
                <p>• refuse to provide confirmation of any information you provide to us, including proof of identity, or refuse to co­operate in any investigation;</p>
                <p>• use an anonymising proxy (a tool that attempts to make activity untraceable); or</p>
                <p>• copy or monitor our website using any robot, spider, or other automatic device or manual process, without our prior written permission.</p>
                <p>
                  4.11 SiaRemit may, as necessary in providing the Service, store all information required of a Recipient to prove his or her identity or associated with their specific Transaction. Such proofs may include a suitable form of valid, unexpired identification from a list of acceptable papers provided by the Service Provider, and/or a Transaction tracking number, a personal identification number (PIN), a "password", a "secret word", or other similar identifiers.
                </p>

                {/* 5. CANCELLATION AND REFUNDS */}
                <h4>5. CANCELLATION AND REFUNDS</h4>
                <p>
                  5.1 If you have any problems using the Service you should contact us through the channels listed at the end of this Terms and Conditions.
                </p>
                <p>
                  5.2 You have the statutory right to cancel your agreement with us after you have submitted a Transaction. This right of cancellation continues until fourteen days after you have submitted the transaction, or until we have completed the contract by paying the Payout Amount to the Recipient, whichever is the earlier. If you exercise your right to cancel under this clause, we may make a cancellation charge.
                </p>
                <p>
                  5.3 If you wish to exercise your right to cancel under this clause, you must submit a written request to one of the contact points listed at the bottom of this Terms and Conditions, giving the Sender's full name, address, and phone number, together with the Transaction tracking number, Transaction Amount, and the reason for your refund request.
                </p>
                <p>
                  5.4 Any refunds will be credited back to the same Payment Instrument used to fund the Transaction and in the same currency. No adjustment will be made for any currency fluctuations which may have occurred in the meanwhile.
                </p>
                <p>
                  5.5 Refund claims due to refusal or inability to provide additional information, requiring you to take steps to confirm ownership of your Payment Instruments or email address; or by verifying your information against third party databases; or through other sources will be subject to a cancellation charge as may be determined by the Company.
                </p>

                {/* 6. COLLECTION OF INFORMATION */}
                <h4>6. COLLECTION OF INFORMATION</h4>
                <p>
                  6.1 Customer Identification Program. UK law and all European countries requires all financial institutions to assist in the fight against money laundering activities and the funding of terrorism by obtaining, verifying, and recording identifying information about all customers. We may therefore require you to supply us with personal identifying information and we may also legally consult other sources to obtain information about you.
                </p>
                <p>
                  6.2 Verification and Checks. We will verify your residential address and personal details in order to confirm your identity. We may also pass your personal information to a credit reference agency, which may keep a record of that information. You can be rest assured that this is done only to confirm your identity, that a credit check is not performed and that your credit rating will be unaffected. All information provided by you will be treated securely and strictly in accordance with the Data Protection Act 1998.
                </p>
                <p>
                  6.3 By accepting these Terms and Conditions you authorise us to make any inquiries we consider necessary to validate the information that you provide to us. We may do this directly, for example by asking you for additional information, requiring you to take steps to confirm ownership of your Payment Instruments or email address; or by verifying your information against third party databases; or through other sources.
                </p>
                <p>
                  6.4 Data Privacy Policy. You consent to our processing your personal information for the purposes of providing the Service, including for verification purposes as set out in this clause. You also consent to the use of such data for communicating with you, and for statutory, accounting and archival purposes. You acknowledge that you have read and consented to SiaRemit's Data Privacy Policy. The Data Privacy Policy can be found by clicking here: <Link href="/privacy-policy" className="text-gold-dark hover:underline">Data Privacy Policy</Link>
                </p>
                <p>
                  6.5 <strong>Government Disclosures.</strong> We may be required by law to provide information about you and your Transactions to government or other competent authorities as described in our Data Privacy Policy. You acknowledge and consent to our doing this.
                </p>

                {/* 7. INTELLECTUAL PROPERTY */}
                <h4>7. INTELLECTUAL PROPERTY</h4>
                <p>
                  7.1 The SiaRemit website and the SiaRemit Service, the content, and all intellectual property relating to them and contained in them (including but not limited to copyrights, patents, database rights, trademarks and service marks) are owned by us, our affiliates, or third parties. All right, title and interest in and to the SiaRemit Online Site and the SiaRemit Online Service shall remain our property and/or the property of such other third parties.
                </p>
                <p>
                  7.2 The SiaRemit website and the SiaRemit Service may be used only for the purposes permitted by these Terms and Conditions or described on this website. You are authorised solely to view and to retain a copy of the pages of the SiaRemit website for your own personal use. You may not duplicate, publish, modify, create derivative works from, participate in the transfer or sale of, post on the internet, or in any way distribute or exploit the SiaRemit website, the SiaRemit Service or any portion thereof for any public or commercial use without our express written permission. You may not: (a) use any robot, spider, scraper or other automated device to access the SiaRemit website or the SiaRemit Service; and/or (b) remove or alter any copyright, trademark or other proprietary notice or legend displayed on the SiaRemit website (or printed pages of the website). The name SiaRemit and other names and indicia of ownership of SiaRemit's products and/or services referred to on the SiaRemit website are our exclusive marks or the exclusive marks of other third parties. Other product, service and company names appearing on the website may be trademarks of their respective owners.
                </p>

                {/* 8. WARRANTIES AND LIABILITY */}
                <h4>8. WARRANTIES AND LIABILITY</h4>
                <p>
                  8.1 We will refund to you any benefit which we receive as a result of any breach of our agreement with you (this means that, for example, where a money transfer has failed in such circumstances we will refund to you the Transaction Amount and the Service Fee).
                </p>
                <p>
                  8.2 If a money transfer is delayed or fails, you may have a right to receive a refund or compensation under laws relating to the provision of international money transfer services. We will provide you with the details of your rights to a refund or compensation if you contact us using the contact details at the end of this agreement.
                </p>
                <p>
                  8.3 Any claim for compensation made by you and/or a Recipient (who is not registered with us) must be supported by any available relevant documentation.
                </p>
                <p>
                  8.4 If any loss which you or a Recipient (who is not registered with us) suffers is not covered by a right to payment under the laws referred to in clause 8.2, we will only accept liability for that loss up to a limit which is the greater of: (a) the amount of any service charge; and (b) 200, unless otherwise agreed by us in writing. Our cap on our liability only limits a claim for loss arising out of any single transaction or related transactions, or (if a loss does not arise out of a transaction or transactions) any single act, omission or event or related acts, omissions or events. This means that if, for example, you suffer loss by reason of our failure to perform our agreement with you under two unrelated transactions, you might be able to claim up to 500.
                </p>
                <p>
                  8.5 We do not, in any event, accept responsibility for:
                </p>
                <p>• any failure to perform your instructions as a result of circumstances which could reasonably be considered to be outside our control;</p>
                <p>• malfunctions in communications facilities which cannot reasonably be considered to be under our control and that may affect the accuracy or timeliness of messages you send to us;</p>
                <p>• any losses or delays in transmission of messages arising out of the use of any internet service provider or caused by any browser or other software which is not under our control;</p>
                <p>• errors on the website or with the Service caused by incomplete or incorrect information provided to us by you or a third party.</p>
                <p>
                  8.6 Nothing in this clause 8 shall (a) exclude or limit liability on our part for death or personal injury resulting from our negligence; or (b) exclude liability for our fraud.
                </p>
                <p>
                  8.7 Where you are sending a money transfer to a Recipient who is not registered with us, you agree to accept the provisions of this clause 11 not only for yourself, but also on behalf of the Recipient.
                </p>
                <p>
                  8.8 Your relationship is with SiaRemit only. You agree that no affiliate or agent of SiaRemit owes you any duty of care when performing a task which would otherwise have to be performed by SiaRemit under its agreement with you.
                </p>
                <p>
                  8.9 You agree to indemnify and hold harmless SiaRemit, our subsidiaries, affiliates, officers, directors, employees, agents, independent contractors, advertisers, partners, and co­branders from all loss, damage, claims, actions or demands, including reasonable legal fees, arising out of your use or misuse of this website or Service, all activities that occur under your password or account e­ mail login, your violation of this Terms and Conditions or any other violation of the rights of another person or party.
                </p>

                {/* 9. ELECTRONIC COMMUNICATIONS */}
                <h4>9. ELECTRONIC COMMUNICATIONS</h4>
                <p>
                  9.1 You acknowledge that this Terms and Conditions shall be entered into electronically, and that the following categories of information ("Communications") may be provided by electronic means:
                </p>
                <p>• This Terms and Conditions and any amendments, modifications or supplements to it.</p>
                <p>• Your records of transactions through the Service.</p>
                <p>• Any initial, periodic or other disclosures or notices provided in connection with the Service, including without limitation those required by law.</p>
                <p>• Any customer service communications, including without limitation communications with respect to claims of error or unauthorised use of the Service.</p>
                <p>• Any other communication related to the Service or SiaRemit.</p>
                <p>
                  9.2 The Service does not allow for Communications to be provided in paper format or through other non- electronic means. You may withdraw your consent to receive Communications electronically, but if you do, your use of the Service shall be terminated. In order to withdraw your consent, you must contact us using our contact information at the end of this Terms and Conditions.
                </p>
                <p>
                  9.3 In order to access and retain Communications, you must have or have access to the following:
                </p>
                <p>• An Internet browser that supports 128­bit encryption, such as Internet Explorer version 4.0 or above;</p>
                <p>• An e­mail account and e­mail software capable of interfacing with SiaRemit's e­mail servers;</p>
                <p>• A personal computer, operating system and telecommunications connections to the Internet capable of supporting the foregoing;</p>
                <p>• Sufficient electronic storage capacity on your computer's hard drive or other data storage unit; and</p>
                <p>
                  • A printer that is capable of printing from your browser and e­mail software. In addition, you must promptly update us with any change in your email address by updating your profile at{' '}
                  <Link href="/" className="text-gold-dark hover:underline">www.siaremit.com</Link>
                </p>

                {/* 10. TERMINATION */}
                <h4>10. TERMINATION</h4>
                <p>
                  10.1 Either party may terminate this Terms and Conditions on one day's written notice.
                </p>
                <p>
                  10.2 We may terminate this Terms and Conditions with immediate effect if you:
                </p>
                <p>• become, or are likely to become, insolvent or are declared bankrupt;</p>
                <p>• are in breach of any provision of this Terms and Conditions;</p>
                <p>• your use of the Service or the website is disruptive to our other customers, or you do anything which in our opinion is likely to bring us into disrepute;</p>
                <p>
                  • breaches or attempts to breach the security of the website (including but not limited to: modifying or attempting to modify any information; unauthorised log­ins, unauthorised data access or deletion; interfering with the service, system, host or network; reverse engineering of any kind; spamming; hacking; falsifying data; introducing viruses, Trojan horses, worms or other destructive or damaging programs or engines; or testing security in any way);
                </p>

                {/* 11. COMPLAINTS */}
                <h4>11. COMPLAINTS</h4>
                <p>
                  11.1 If you wish to make a complaint about any aspect of the SiaRemit service, please send your complaint in writing to the address shown on the Contact Us page or by email to{' '}
                  <a href="mailto:support@siaremit.com" className="text-gold-dark hover:underline">support@siaremit.com</a>.
                </p>
                <p>
                  11.2 We will acknowledge receipt of your complaint within 2 business days. We will investigate your complaint and come back to you with the results of our investigation no later than 7 business days of receipt of your complaint. If you are not satisfied with the manner in which we have dealt with your complaint, or the outcome, then you may refer the matter to the Financial Ombudsman Service, South Quay Plaza, 183 Marsh Wall, London E14 9SR, Tel No 0800 0234 567, Email: complaint.info@financial-ombudsman.org.uk
                </p>

                {/* 12. GENERAL */}
                <h4>12. GENERAL</h4>
                <p>
                  12.1 Governing law: this Agreement will be governed by English law and the parties submit to the exclusive jurisdiction of the English Courts.
                </p>
                <p>
                  12.2 No Waiver: The failure of SiaRemit to exercise or enforce any right or provision of the Terms and Conditions shall not constitute a waiver of such right or provision.
                </p>
                <p>
                  12.3 Modification: We may modify this Terms and Conditions from time to time without notice to you, except as may be required by law. You can review the most current version of the Terms and Conditions at any time by reviewing this website. You may terminate your use of the Service if you do not agree with any modification or amendment. If you use the Service after the effective date of an amendment or modification, you shall be deemed to have accepted that amendment or modification. You agree that you shall not modify this Terms and Conditions and acknowledge that any attempts by you to modify this Terms and Conditions shall be void.
                </p>
                <p>
                  12.4 Entire Agreement: This agreement constitutes the entire agreement between the parties and supersedes all prior understandings or agreements relating to the subject matter of this agreement.
                </p>
                <p>
                  12.5 Severability: If any provision of the Terms and Conditions is found by an arbitrator or court of competent jurisdiction to be invalid, the parties nevertheless agree that the arbitrator or court should endeavour to give appropriately valid effect to the intention of the Terms and Conditions as reflected in the provision, and the other provisions of the Terms and Conditions shall remain in full force and effect.
                </p>
                <p>
                  12.6 Any external links to third­party websites on the website are provided as a convenience to you. These sites are not controlled by us in any way and we are not responsible for the accuracy, completeness, legality or any other aspect of these other sites including any content provided on them. You access such websites at your own risk.
                </p>

                {/* Security */}
                <h4>Security</h4>
                <p>
                  We take security very seriously at SiaRemit, and we work hard, using state­of­the­art security measures, to make sure that your information remains secure. The SiaRemit Service is a safe and convenient way to send money to friends and family and to other people that you trust. However, we do advise you to consider very carefully before sending money to anyone that you do not know well. In particular, you should be very cautious of deals or offers that seem too good to be true ­ they may be scams. If you are aware of anyone or any entity that is using the Service inappropriately, please email us using our contact form. Similarly, if you receive any emails, purporting to be from SiaRemit, which you suspect may be "phishing" (fake) emails, please forward them to us using our{' '}
                  <Link href="/contact" className="text-gold-dark hover:underline">contact form</Link>.
                </p>

                {/* Contact Information */}
                <h4>Contact Information</h4>
                <p>
                  Questions, notices, and requests for refunds or further information should be sent to SiaRemit, as follows: <Link href="/contact" className="text-gold-dark hover:underline">online</Link>
                </p>
                <p>
                  by telephone at +447441426016; <br />
                  by fax at +447441426016; <br />
                  by email at{' '}
                  <a href="mailto:support@siaremit.com" className="text-gold-dark hover:underline">support@siaremit.com</a> <br />
                  or by mail at: SiaRemit, attn: Customer Service, 3rd Floor, 86-90 Paul Street, London EC2A 4NE, United Kingdom.
                </p>
              </div>
            </div>
          </section>
        </main>
        <LandingPageFooter/>
        {/* Back to Top */}
        {/* <BackToTop /> */}
      </div>
    </>
  )
}
