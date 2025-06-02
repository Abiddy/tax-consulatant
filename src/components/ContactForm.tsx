// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { HiOutlineMail } from 'react-icons/hi';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzrnkkj");
  
  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thank you for reaching out!</h3>
        <p className="text-gray-600">We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <div className="text-center mb-10">
        {/* Glowing icon */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-lg opacity-20"></div>
          <div className="relative bg-white rounded-2xl p-4 shadow-md">
            <HiOutlineMail className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <h2 className="text-3xl font-normal text-gray-900 mb-2">Get in touch</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="block text-lg text-gray-900 mb-2">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="Your name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-lg text-gray-900 mb-2">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="your.email@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div className="relative">
            <label htmlFor="phone" className="block text-lg text-gray-900 mb-2">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              pattern="[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}"
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="(123) 456-7890"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div className="relative">
            <label htmlFor="service" className="block text-lg text-gray-900 mb-2">Service you need</label>
            <select
              id="service"
              name="service"
              required
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 appearance-none"
            >
              <option value="">Select</option>
              <option value="tax-resolution">Tax Resolution Services</option>
              <option value="tax-audit">Tax Audit Support</option>
              <option value="payment-solutions">Payment Solutions</option>
              <option value="real-estate">Real Estate Tax Planning</option>
            </select>
            <div className="absolute right-4 top-[46px] pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-lg text-gray-900 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
              placeholder="Please tell us about your project and what you need."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            SEND
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;