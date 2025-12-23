import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - MO Permit Pro",
  description: "Privacy Policy for MO Permit Pro - Missouri Driver's Permit Practice Test App",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last Updated: December 23, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              MO Permit Pro (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information when you use
              our Missouri Driver&apos;s Permit Practice Test mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Information Stored Locally</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The following information is stored locally on your device and is not transmitted to our servers:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Your selected language preference</li>
              <li>Practice test results and progress</li>
              <li>App settings and preferences</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed">
              We may automatically collect certain information when you use the app, including device type,
              operating system version, and general usage statistics through third-party analytics services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our app uses the following third-party services that may collect information:
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Google AdMob</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Google AdMob to display advertisements in the free version of our app. AdMob may collect
              and use data about your device and ad interactions to serve personalized ads. You can learn more
              about Google&apos;s privacy practices at{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Google Privacy Policy
              </a>.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Firebase Analytics</h3>
            <p className="text-gray-700 leading-relaxed">
              We use Firebase Analytics to understand how users interact with our app. This helps us improve
              the app experience. Firebase may collect information such as app usage data, device information,
              and crash reports. You can learn more at{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Firebase Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
            <p className="text-gray-700 leading-relaxed">
              Your practice test data and preferences are stored locally on your device. We do not maintain
              user accounts or store personal information on external servers. The app is designed to work
              offline, and your progress data remains on your device unless you uninstall the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our app is intended for users who are preparing for their driver&apos;s permit test. We do not
              knowingly collect personal information from children under 13. If you are a parent or guardian
              and believe your child has provided us with personal information, please contact us so we can
              take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Choices</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Ad Personalization:</strong> You can opt out of personalized advertising through your
                device settings or by purchasing the ad-free version of the app.
              </li>
              <li>
                <strong>Analytics:</strong> You can limit analytics data collection through your device&apos;s
                privacy settings.
              </li>
              <li>
                <strong>Data Deletion:</strong> You can delete all locally stored data by uninstalling the app.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              updating the &quot;Last Updated&quot; date at the top of this page. We encourage you to review
              this Privacy Policy periodically for any changes.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
