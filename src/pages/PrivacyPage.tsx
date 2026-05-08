import { SplitText } from '../components/ui/SplitText';
import { SEO } from '../components/SEO';

export const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy | Data Protection"
        description="Our commitment to your privacy and how we handle your personal data at EVOLVEXO Technologies."
      />
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block">
            Legal
          </span>
          <h1 className="text-display text-[#F5F5F2] mb-6">
            <SplitText text="Privacy Policy." scrollTrigger />
          </h1>
          <p className="text-lg text-[#B7B7B2]">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="glass-panel rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">1. Introduction</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                EVOLVEXO Technologies ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">2. Information We Collect</h2>
              <p className="text-[#B7B7B2] leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-[#B7B7B2] space-y-2">
                <li><strong className="text-[#F5F5F2]">Personal Information:</strong> Name, email address, phone number, company name when you contact us or request our services.</li>
                <li><strong className="text-[#F5F5F2]">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent.</li>
                <li><strong className="text-[#F5F5F2]">Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">3. How We Use Your Information</h2>
              <p className="text-[#B7B7B2] leading-relaxed mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-[#B7B7B2] space-y-2">
                <li>To provide and maintain our services</li>
                <li>To communicate with you about projects and inquiries</li>
                <li>To improve our website and services</li>
                <li>To send newsletters and marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">4. Data Security</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">5. Third-Party Services</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                We may use third-party services (such as analytics providers) that collect, monitor, and analyze data to help us improve our services. These third parties have their own privacy policies addressing how they use such information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">6. Your Rights</h2>
              <p className="text-[#B7B7B2] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-[#B7B7B2] space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">7. Contact Us</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br /><br />
                <strong className="text-[#F5F5F2]">Email:</strong> privacy@evolvexo.in<br />
                <strong className="text-[#F5F5F2]">Address:</strong> 117/K/76 Sarvodaya Nagar, Kanpur, 208025, India
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
