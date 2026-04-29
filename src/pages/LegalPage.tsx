import { SplitText } from '../components/ui/SplitText';

export const LegalPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block">
            Legal
          </span>
          <h1 className="text-display text-[#F5F5F2] mb-6">
            <SplitText text="Terms of Service." scrollTrigger />
          </h1>
          <p className="text-lg text-[#B7B7B2]">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">1. Agreement to Terms</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                By accessing or using the services provided by EVOLVEXO Technologies ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">2. Services</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                EVOLVEXO Technologies provides software development, AI/ML solutions, web development, digital marketing, and technology consulting services. All services are subject to separate agreements and statements of work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">3. Intellectual Property</h2>
              <p className="text-[#B7B7B2] leading-relaxed mb-4">
                <strong className="text-[#F5F5F2]">Our IP:</strong> All content, software, designs, and materials provided by EVOLVEXO remain our intellectual property unless explicitly transferred through a written agreement.
              </p>
              <p className="text-[#B7B7B2] leading-relaxed">
                <strong className="text-[#F5F5F2]">Client IP:</strong> Any proprietary information, data, or materials provided by clients remain their property. We maintain strict confidentiality of all client information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">4. Payment Terms</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                Payment terms are specified in individual project agreements. Unless otherwise stated, invoices are due within 15 days of issuance. Late payments may incur a service charge of 1.5% per month on outstanding balances.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">5. Confidentiality</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                We maintain strict confidentiality regarding all client projects, data, and proprietary information. Our team is bound by non-disclosure agreements, and we implement security measures to protect sensitive information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">6. Limitation of Liability</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                EVOLVEXO Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the liability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">7. Termination</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                Either party may terminate a project agreement with 30 days written notice. Upon termination, client shall pay for all work completed up to the termination date. Pro-rata refunds may be issued for pre-paid services not yet rendered.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">8. Governing Law</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kanpur, Uttar Pradesh.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">9. Changes to Terms</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5F2] mb-4">10. Contact Information</h2>
              <p className="text-[#B7B7B2] leading-relaxed">
                For questions about these Terms of Service, please contact us:
                <br /><br />
                <strong className="text-[#F5F5F2]">EVOLVEXO Technologies</strong><br />
                117/K/76 Sarvodaya Nagar<br />
                Kanpur, 208025<br />
                India<br /><br />
                <strong className="text-[#F5F5F2]">Email:</strong> legal@evolvexo.in
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
