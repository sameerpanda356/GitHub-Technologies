// TermsOfService.tsx
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last Updated: January 1, 2023</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>In any way that violates any applicable law or regulation</li>
          <li>To transmit any advertising or promotional material without our consent</li>
          <li>To impersonate or attempt to impersonate GitHub Technologies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
        <p className="mb-4">
          The website and its entire contents, features, and functionality are owned by GitHub Technologies and are protected by international copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">
          In no event will GitHub Technologies be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law provisions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
        <p>
          For any questions about these Terms, please contact us at contact@githubtechnologies.com
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;