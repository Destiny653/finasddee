'use client'

import Link from 'next/link'
import { Banknote, ChevronRight, CreditCard, Mail, MessageSquare, Search, Shield, UserCircle } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion'
import { Card } from '../ui/card'

export function HelpPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center  bg-gray-700" style={{ backgroundImage: 'url(/images/bg/image-2.jpg)' }}>
        {/* <div className="absolute inset-0 bg-gold-dark opacity-90"></div> */}
        <div className=" mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">How can we help you?</h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for answer..."
                className="w-full py-6 px-4 pr-12 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-light"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-none">
              <UserCircle size={48} className=" mx-auto mb-4 text-[#ffc504]" />
              <h3 className="text-xl font-bold mb-2">My Account</h3>
              <Link href="/settings-profile" className="text-gold-dark hover:underline flex items-center justify-center">
                See articles <ChevronRight size={12} className="ml-1" />
              </Link>
            </Card>
            <Card className="text-center p-6 border-0 shadow-none">
              <Banknote size={48} className="mx-auto mb-4 text-[#ffc504]" />
              <h3 className="text-xl font-bold mb-2">Payment</h3>
              <Link href="/send-money" className="text-gold-dark hover:underline flex items-center justify-center">
                See articles <ChevronRight size={12} className="ml-1" />
              </Link>
            </Card>
            <Card className="text-center p-6 border-0 shadow-none">
              <Shield size={48} className="mx-auto mb-4 text-[#ffc504]" />
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <Link href="/settings-security" className="text-gold-dark hover:underline flex items-center justify-center">
                See articles <ChevronRight size={12} className="ml-1" />
              </Link>
            </Card>
            <Card className="text-center p-6 border-0 shadow-none">
              <CreditCard size={48} className="mx-auto mb-4 text-[#ffc504]" />
              <h3 className="text-xl font-bold mb-2">Payment Methods</h3>
              <Link href="/settings-payment-methods" className="text-gold-dark hover:underline flex items-center justify-center">
                See articles <ChevronRight size={12} className="ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Popular Topics</h2>
          <p className="text-center text-gray-600 mb-12">Lisque persius interesset his et, in quot quidam persequeris.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <Accordion type="single" collapsible className="[&>div]:border-gray-200">
                <AccordionItem value="1">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">I forgot the password for my account.</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">How do I withdraw funds from my account?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">How do I link bank account to my account?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="4">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">How do I confirm the email address on my account?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="5">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">How do I receive payments?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible className="[&>div]:border-gray-200">
                <AccordionItem value="6">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">How Can I View My Payments History?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="7">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">Where is my refund?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="8">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">How do I request payments or send an invoice?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="9">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">Forgot my password! What next?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="10">
                  <AccordionTrigger className="text-black hover:text-gold-dark [&>svg]:text-black">Closing Your Account</AccordionTrigger>
                  <AccordionContent className="text-gray-600">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Can't find */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 flex items-center border-0 shadow-none">
              <Mail size={48} className="text-gold-dark mr-4 flex-shrink-0 text-[#ffc504]" />
              <div>
                <h5 className="text-xl font-bold mb-2">Can't find what you're looking for?</h5>
                <p className="text-gray-600">We want to answer all of your queries. Get in touch and we'll get back to you as soon as we can. <Link href="/contact" className="text-gold-dark hover:underline">Contact us <ChevronRight size={12} className="inline" /></Link></p>
              </div>
            </Card>
            <Card className="p-6 flex items-center border-0 shadow-none">
              <MessageSquare size={48} className="text-gold-dark mr-4 flex-shrink-0 text-[#ffc504]" />
              <div>
                <h5 className="text-xl font-bold mb-2">Technical questions</h5>
                <p className="text-gray-600">Have some technical questions? Hit us up on live chat or whatever. <Link href="#" className="text-gold-dark hover:underline">Click here <ChevronRight size={12} className="inline" /></Link></p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
