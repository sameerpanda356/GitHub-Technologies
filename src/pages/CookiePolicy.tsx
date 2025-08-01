// CookiePolicy.tsx
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">Last Updated: January 1, 2023</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
        <p className="mb-4">
          Cookies are small text files stored on your device when you visit websites. They help the website remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
        <p className="mb-4">We use cookies for several purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
          <li><strong>Targeting Cookies:</strong> Used to deliver relevant ads to you</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Your Choices Regarding Cookies</h2>
        <p className="mb-4">
          You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality may be restricted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
        <p className="mb-4">
          We may also use various third-party cookies for analytics and advertising purposes. These cookies are governed by the respective third parties' privacy policies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;