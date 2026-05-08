import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Check, Sparkles, Send, Clock, Globe, Zap } from 'lucide-react';
import { SplitText } from '../components/ui/SplitText';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Spotlight } from '../components/ui/Spotlight';
import { SEO } from '../components/SEO';

const services = [
  'AI SaaS Development',
  'Custom Software',
  'Web Platform',
  'Digital Marketing',
  'Tech Advisory',
  'Other'
];

export const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', company: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO 
        title="Contact Us | Start Your Next Project"
        description="Get in touch with EVOLVEXO Technologies. We're ready to discuss your next AI SaaS, custom software, or digital marketing project."
      />
      {/* Spotlight Background Effects */}
      <Spotlight className="top-20 left-1/4 w-[500px] h-[500px]" fill="#D9E6FF" />
      <Spotlight className="bottom-20 right-1/4 w-[400px] h-[400px]" fill="#FFC81E" />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block"
          >
            Get in Touch
          </motion.span>
          <h1 className="text-display text-[#F5F5F2] mb-6">
            <SplitText text="Let's build something exceptional." scrollTrigger />
          </h1>
          
          {/* Quick Info Pills */}
          <motion.div 
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { icon: Clock, text: '24h Response Time' },
              { icon: Globe, text: 'Global Reach' },
              { icon: Zap, text: 'Free Consultation' }
            ].map((item, i) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 glass-badge px-4 py-2 rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(217, 230, 255, 0.1)" }}
              >
                <item.icon size={16} className="text-[#D9E6FF]" />
                <span className="text-sm text-[#B7B7B2]">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Info */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-heading-2 text-[#F5F5F2] mb-6">
                  Start a conversation
                </h2>
                <p className="text-lg text-[#B7B7B2] mb-12 max-w-md">
                  Tell us about your project, your challenges, or your vision. We'll get back to you within 24 hours.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-12">
                  <motion.a
                    href="mailto:contact@evolvexo.in"
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full glass-badge flex items-center justify-center group-hover:bg-[#D9E6FF]/10 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Mail size={20} className="text-[#F5F5F2] group-hover:text-[#D9E6FF] transition-colors" />
                    </motion.div>
                    <div>
                      <span className="text-xs text-[#6B6B68] uppercase tracking-wider block">Email</span>
                      <span className="text-[#F5F5F2] group-hover:text-[#D9E6FF] transition-colors">contact@evolvexo.in</span>
                    </div>
                  </motion.a>

                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full glass-badge flex items-center justify-center group-hover:bg-[#D9E6FF]/10 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin size={20} className="text-[#F5F5F2] group-hover:text-[#D9E6FF] transition-colors" />
                    </motion.div>
                    <div>
                      <span className="text-xs text-[#6B6B68] uppercase tracking-wider block">Address</span>
                      <span className="text-[#F5F5F2] group-hover:text-[#D9E6FF] transition-colors">117/K/76 Sarvodaya Nagar, Kanpur, 208025</span>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div>
                  <span className="text-xs text-[#6B6B68] uppercase tracking-wider block mb-4">Follow Us</span>
                  <div className="flex gap-4">
                    {['Twitter', 'LinkedIn', 'GitHub'].map((social, i) => (
                      <motion.a
                        key={social}
                        href={`https://${social.toLowerCase()}.com/evolvexo`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#B7B7B2] hover:text-[#F5F5F2] transition-colors text-sm glass-badge px-4 py-2 rounded-full hover:bg-[#D9E6FF]/10"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {social}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Form */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute -inset-8 rounded-3xl pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: 'radial-gradient(circle at center, rgba(217,230,255,0.05) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                  }}
                />

                <form onSubmit={handleSubmit} className="relative glass-panel rounded-2xl p-8 hover:border-[#D9E6FF]/10 transition-all duration-300">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div 
                        className="text-center py-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <motion.div 
                          className="w-16 h-16 rounded-full bg-[#22c55e]/20 flex items-center justify-center mx-auto mb-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        >
                          <Check size={32} className="text-[#22c55e]" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-[#F5F5F2] mb-2">Message Sent!</h3>
                        <p className="text-[#B7B7B2]">We'll get back to you within 24 hours.</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                    {/* Name */}
                    <motion.div 
                      className="mb-6 relative"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'name' || formState.name
                            ? 'text-xs text-[#D9E6FF] -top-2 bg-[#1B1B1B] px-2 rounded'
                            : 'text-[#6B6B68] top-4'
                        }`}
                        animate={{
                          color: focusedField === 'name' ? '#D9E6FF' : '#6B6B68'
                        }}
                      >
                        Your Name
                      </motion.label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="input-glass w-full focus:ring-2 focus:ring-[#D9E6FF]/20 transition-all"
                        required
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div 
                      className="mb-6 relative"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                    >
                      <motion.label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' || formState.email
                            ? 'text-xs text-[#D9E6FF] -top-2 bg-[#1B1B1B] px-2 rounded'
                            : 'text-[#6B6B68] top-4'
                        }`}
                        animate={{
                          color: focusedField === 'email' ? '#D9E6FF' : '#6B6B68'
                        }}
                      >
                        Email Address
                      </motion.label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="input-glass w-full focus:ring-2 focus:ring-[#D9E6FF]/20 transition-all"
                        required
                      />
                    </motion.div>

                    {/* Company */}
                    <motion.div 
                      className="mb-6 relative"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'company' || formState.company
                            ? 'text-xs text-[#D9E6FF] -top-2 bg-[#1B1B1B] px-2 rounded'
                            : 'text-[#6B6B68] top-4'
                        }`}
                        animate={{
                          color: focusedField === 'company' ? '#D9E6FF' : '#6B6B68'
                        }}
                      >
                        Company
                      </motion.label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="input-glass w-full focus:ring-2 focus:ring-[#D9E6FF]/20 transition-all"
                      />
                    </motion.div>

                    {/* Service */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="text-xs text-[#6B6B68] uppercase tracking-wider block mb-3 flex items-center gap-2">
                        <Sparkles size={14} className="text-[#D9E6FF]" />
                        Service Interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((service, i) => (
                          <motion.button
                            key={service}
                            type="button"
                            onClick={() => setFormState({ ...formState, service })}
                            className={`px-4 py-2 rounded-full text-sm transition-all ${
                              formState.service === service
                                ? 'bg-[#F5F5F2] text-[#0A0A0A]'
                                : 'glass-badge text-[#B7B7B2] hover:text-[#F5F5F2]'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            {service}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div 
                      className="mb-8 relative"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'message' || formState.message
                            ? 'text-xs text-[#D9E6FF] -top-2 bg-[#1B1B1B] px-2 rounded'
                            : 'text-[#6B6B68] top-4'
                        }`}
                        animate={{
                          color: focusedField === 'message' ? '#D9E6FF' : '#6B6B68'
                        }}
                      >
                        Tell us about your project
                      </motion.label>
                      <textarea
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="input-glass w-full min-h-[120px] resize-none focus:ring-2 focus:ring-[#D9E6FF]/20 transition-all"
                        rows={4}
                        required
                      />
                    </motion.div>

                    {/* Submit */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 }}
                    >
                      <MagneticButton>
                        <button type="submit" className="btn-primary w-full justify-center text-base py-4 group">
                          <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </button>
                      </MagneticButton>
                    </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
