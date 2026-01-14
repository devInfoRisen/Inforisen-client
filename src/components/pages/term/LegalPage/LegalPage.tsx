// components/LegalPage.tsx (or PrivacyPolicy.tsx / CookiesPolicy.tsx)
import React from 'react';

export default function LegalPage() {
  return (
    <section className="container mx-auto text-justify ">
      <div >

        {/* Cookies Section */}
        <div className="mb-12 sm:mb-16 ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Cookies
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-4 sm:mb-6">
            Our website uses cookies to enhance your browsing experience, personalize content, and improve functionality.
            By continuing to use our website, you consent to the use of cookies in accordance with our Privacy Policy.
            Cookies help us make navigation smoother and provide features tailored to your preferences.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-10 mb-2 sm:mb-4">
            Intellectual Property Rights
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-4 sm:mb-6">
            All content, designs, and materials on this website are protected by intellectual property laws. Unless
            explicitly stated, all rights are reserved.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-3 font-medium">
            You are allowed to access the website for personal use only. The following actions are strictly prohibited
            without prior written consent:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
            <li>Reselling, renting, or sublicensing any content or materials from the website.</li>
            <li>Reproducing or copying content without permission.</li>
            <li>Republishing content from the website.</li>
            <li>Redistributing any materials or content from our site.</li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mt-4 sm:mt-6">
            These terms apply as soon as you access or use our website.
          </p>
        </div>

        {/* Collecting and Using Personal Data */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Collecting and Using Your Personal Data
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-4 sm:mb-6">
            We collect personal information such as name, email, and browsing behavior to provide you with a better
            experience and improve our services. By using our website, you agree to the collection and usage of data
            as described in our Privacy Policy.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-10 mb-2 sm:mb-4">
            Intellectual Property Rights
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-4 sm:mb-6">
            Designs Monks retains all intellectual property rights for the content, designs, and materials displayed on
            the website unless explicitly stated otherwise. All rights are reserved.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-3 font-medium">
            Access to the website is granted for personal use only. The following actions are prohibited without
            prior consent:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
            <li>Reselling, renting, or sublicensing any material from our website.</li>
            <li>Reproducing or copying content without authorization.</li>
            <li>Republishing content from our website.</li>
            <li>Redistributing any content or materials from our site.</li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mt-4 sm:mt-6">
            These terms apply immediately upon accessing the site.
          </p>
        </div>

        {/* Interpretation / Purposes */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Purpose of Data Collection
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-6">
            We may use your personal data for the following purposes:
          </p>

          <ul className="space-y-3 sm:space-y-6 text-sm sm:text-base text-gray-700">
            <li>
              <strong className="text-gray-900">To Provide and Maintain Our Services:</strong> Ensuring the proper
              functioning and continuous improvement of our services.
            </li>
            <li>
              <strong className="text-gray-900">To Manage Your Account:</strong> Facilitating registration, login,
              and access to service features for registered users.
            </li>
            <li>
              <strong className="text-gray-900">To Fulfill Contracts:</strong> Processing orders, purchases, and
              related services you have requested or purchased.
            </li>
            <li>
              <strong className="text-gray-900">To Communicate With You:</strong> Sending updates, notifications, or
              important information regarding services, products, or transactions.
            </li>
            <li>
              <strong className="text-gray-900">To Share News and Offers:</strong> Informing you about products,
              services, or events (unless you have opted out).
            </li>
            <li>
              <strong className="text-gray-900">For Business Transfers:</strong> In the event of a merger, acquisition,
              or sale of company assets.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
