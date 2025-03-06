export default function TermsOfService() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-8">
            Effective Date: March 5, 2025
          </p>

          <section className="mb-12">
            <p className="mb-6">
              Welcome to Fitness Bites! These Terms and Conditions ("Terms") govern your use of our mobile application (the "App"). 
              By downloading, accessing, or using the App, you agree to comply with these Terms. If you do not agree, please refrain from using the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By creating an account, accessing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p>
              The App is intended for users aged 18 and older. By using the App, you represent that you meet this age requirement. 
              If you are under 18, parental consent is required.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Health Disclaimer</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                The App provides general fitness information and bodyweight exercise routines for informational purposes only. 
                It is not a substitute for professional medical advice, diagnosis, or treatment.
              </li>
              <li>
                Consult with your doctor before starting any exercise program, especially if you have any pre-existing medical conditions, 
                are pregnant, or are undergoing any treatments.
              </li>
              <li>
                You use the App at your own risk. Fitness Bites is not responsible for any injuries, health issues, or other damages 
                resulting from your use of the App.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Ensure that you use the App in a safe and suitable environment.</li>
              <li>Follow instructions provided in the exercises and avoid pushing beyond your physical limits.</li>
              <li>Do not use the App while under the influence of drugs or alcohol.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Account and Security</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>Notify us immediately if you suspect unauthorized use of your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>All content, including text, graphics, logos, and software, is owned by Cataco Labs and protected by copyright laws.</li>
              <li>You may not copy, modify, distribute, or use the content for commercial purposes without explicit permission.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Use the App for unlawful purposes.</li>
              <li>Attempt to interfere with the App's security features or functionality.</li>
              <li>Reverse engineer, decompile, or disassemble any part of the App.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Subscription and Payments</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Some features of the App may require a subscription or in-app purchase.</li>
              <li>Payments are non-refundable, except as required by applicable law.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Privacy Policy</h2>
            <p>
              Your use of the App is also governed by our{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              , which explains how we collect, use, and protect your information. Please review it carefully.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. Modifications to the App and Terms</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>We may update the App or these Terms at any time. Changes will be effective upon posting.</li>
              <li>Continued use of the App after updates constitutes your acceptance of the revised Terms.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To the fullest extent permitted by law, Cataco Labs and its affiliates are not liable for any damages arising from your use of the App.</li>
              <li>This includes, but is not limited to, direct, indirect, incidental, or consequential damages.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Virginia, USA, without regard to its conflict of laws principles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:{" "}
              <a href="mailto:help@catacolabs.com" className="text-primary hover:underline">
                help@catacolabs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 