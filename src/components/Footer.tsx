import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const footerLinks = {
  services: [
    { name: 'AI SaaS', href: '/services' },
    { name: 'Custom Software', href: '/services' },
    { name: 'Web Platforms', href: '/services' },
    { name: 'Digital Marketing', href: '/services' },
  ],
  solutions: [
    { name: 'Launch a Product', href: '/solutions' },
    { name: 'Modernize Operations', href: '/solutions' },
    { name: 'Automate Work', href: '/solutions' },
    { name: 'Digital Growth', href: '/solutions' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Legal', href: '/legal' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/evolvexo' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/evolvexo' },
  { name: 'GitHub', href: 'https://github.com/evolvexo' },
];

export const Footer = () => {
  const navigate = useNavigate();
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Expose footer height to parent via CSS variable
  useEffect(() => {
    if (footerHeight > 0) {
      document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
    }
  }, [footerHeight]);

  const handleNavClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className="fixed bottom-0 left-0 right-0 z-[-1] pt-24 pb-12 px-6 lg:px-12 bg-[#1E1E1E]"
      style={{ 
        // Negative margin to account for any spacing issues
        marginTop: '-1px'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-0 font-bold text-xl tracking-tight mb-4">
              <span className="text-[#FBEAD7]">EVOLVE</span>
              <span className="text-[#FBEAD7]/40">XO</span>
            </div>
            <p className="text-sm text-[#8B7F75] leading-relaxed mb-6 max-w-xs">
              An engineering-led agency building systems that evolve. Based in Kanpur, serving globally.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contact@evolvexo.in"
                className="flex items-center gap-2 text-sm text-[#B8A99A] hover:text-[#FBEAD7] transition-colors"
              >
                <Mail size={14} />
                contact@evolvexo.in
              </a>
              <div className="flex items-start gap-2 text-sm text-[#B8A99A]">
                <MapPin size={14} className="mt-0.5" />
                <span>117/K/76 Sarvodaya Nagar<br />Kanpur, 208025</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium text-[#FBEAD7] uppercase tracking-[0.2em] mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-[#8B7F75] hover:text-[#FBEAD7] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-medium text-[#FBEAD7] uppercase tracking-[0.2em] mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-[#8B7F75] hover:text-[#FBEAD7] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium text-[#FBEAD7] uppercase tracking-[0.2em] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-[#8B7F75] hover:text-[#FBEAD7] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-xs font-medium text-[#FBEAD7] uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="text-sm text-[#8B7F75] hover:text-[#FBEAD7] transition-colors flex items-center gap-1 group"
                >
                  Contact
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#8B7F75] hover:text-[#FBEAD7] transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-panel rounded-xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-[#FBEAD7] font-medium mb-1">Stay Updated</h4>
              <p className="text-sm text-[#8B7F75]">Get insights on technology, design, and digital transformation.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-glass flex-1 md:w-64"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Large Reveal Text */}
        <motion.div 
          className="mt-16 mb-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[8vw] sm:text-[10vw] lg:text-[8vw] font-bold text-[#FBEAD7]/5 leading-none tracking-tighter whitespace-nowrap overflow-hidden text-center">
            EVOLVEXO
          </h2>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#FBEAD7]/5">
          <p className="text-xs text-[#8B7F75]">
            © {new Date().getFullYear()} EVOLVEXO Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-xs text-[#8B7F75] hover:text-[#FBEAD7] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
