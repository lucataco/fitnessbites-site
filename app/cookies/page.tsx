export default function CookiePolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website or use an application. They help us provide you with a better experience by remembering your preferences and how you use our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our app</li>
              <li>Improve our service based on usage data</li>
              <li>Keep you signed in to your account</li>
              <li>Ensure the security of our service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                <p>Required for the app to function properly. These cannot be disabled.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Preference Cookies</h3>
                <p>Remember your settings and preferences for a better experience.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                <p>Help us understand how you use our app so we can improve it.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p>
              You can control cookies through your device settings. However, please note that disabling certain cookies may affect the functionality of our app.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:{" "}
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