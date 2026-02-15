import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="text-[#bdb7a7] hover:text-[#f6f0de] inline-flex items-center">
          ← Back to KFoundry
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">Last Updated: January 14, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          KFoundry ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered business solutions and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        
        <h3 className="text-xl font-semibold mb-3">Information You Provide to Us</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact information (name, email address, phone number, company name)</li>
          <li>Business information related to our services</li>
          <li>Account credentials</li>
          <li>Communication preferences</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Information Automatically Collected</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Log data (IP address, browser type, pages visited)</li>
          <li>Device information</li>
          <li>Cookies and similar tracking technologies</li>
          <li>Usage patterns and preferences</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6">
          <li>Provide and maintain our services</li>
          <li>Process and fulfill your requests</li>
          <li>Send you technical notices and support messages</li>
          <li>Communicate with you about our services</li>
          <li>Improve our website and services</li>
          <li>Protect against fraudulent or illegal activity</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
        <p className="mb-4">We may share your information with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Service providers who assist in our operations</li>
          <li>Professional advisors (lawyers, accountants, auditors)</li>
          <li>Government authorities when required by law</li>
          <li>Business partners with your consent</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
        <p className="mb-4">Under California law, you have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal information</li>
          <li>Delete your personal information</li>
          <li>Know what personal information is being collected</li>
          <li>Know whether your personal information is sold or disclosed</li>
          <li>Opt-out of the sale of your personal information</li>
          <li>Non-discrimination for exercising your privacy rights</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:privacy@kfoundry.ai" className="text-blue-600 hover:underline">
            privacy@kfoundry.ai
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:privacy@kfoundry.ai" className="text-blue-600 hover:underline">
            privacy@kfoundry.ai
          </a>
        </p>
      </section>
    </div>
  );
}
