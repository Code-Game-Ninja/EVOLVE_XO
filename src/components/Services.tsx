import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code2, 
  Globe, 
  Megaphone, 
  Lightbulb,
  ArrowDown,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MagneticButton } from './ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'AI SaaS',
    subtitle: 'Intelligent Systems',
    description: 'Intelligent software solutions that leverage machine learning and automation to transform business operations and decision-making.',
    icon: Brain,
    color: '#4200FF',
    deliverables: ['AI Strategy Consulting', 'ML Model Development', 'SaaS Platform Architecture', 'API Integration', 'Natural Language Processing'],
  },
  {
    id: '02',
    title: 'Custom Software',
    subtitle: 'Bespoke Engineering',
    description: 'Bespoke software applications engineered to solve complex business challenges and streamline operations at scale.',
    icon: Code2,
    color: '#3500D8',
    deliverables: ['Enterprise Applications', 'Process Automation', 'Legacy Modernization', 'System Integration', 'API Development'],
  },
  {
    id: '03',
    title: 'Web Platforms',
    subtitle: 'Digital Experiences',
    description: 'High-performance web experiences that captivate users and drive measurable business outcomes through superior design and engineering.',
    icon: Globe,
    color: '#F9AC7C',
    deliverables: ['Brand Websites', 'E-commerce Platforms', 'Web Applications', 'CMS Solutions', 'Progressive Web Apps'],
  },
  {
    id: '04',
    title: 'Digital Marketing',
    subtitle: 'Growth Acceleration',
    description: 'Data-driven marketing strategies that amplify your brand presence and accelerate growth across digital channels.',
    icon: Megaphone,
    color: '#2C01A5',
    deliverables: ['Growth Strategy', 'Content Marketing', 'SEO & SEM', 'Analytics & Attribution', 'Marketing Automation'],
  },
  {
    id: '05',
    title: 'Tech Advisory',
    subtitle: 'Strategic Guidance',
    description: 'Strategic technology consulting to navigate digital transformation and make informed decisions about your technology stack.',
    icon: Lightbulb,
    color: '#4200FF',
    deliverables: ['Digital Strategy', 'Tech Stack Assessment', 'Architecture Review', 'Team Augmentation', 'DevOps Consulting'],
  },
];

export const Services = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      const ghostNumber = section.querySelector('.ghost-number');
      const iconWrapper = section.querySelector('.icon-wrapper');
      const content = section.querySelector('.service-content');
      const deliverables = section.querySelectorAll('.deliverable-item');

      const isDesktop = window.innerWidth >= 1024;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: isDesktop ? '+=250%' : '+=100%',
          pin: isDesktop,
          scrub: 0.8,
          onEnter: () => setActiveService(index),
          onEnterBack: () => setActiveService(index),
        }
      });

      tl.fromTo(ghostNumber, 
        { opacity: 0, scale: 2, y: 100 },
        { opacity: 0.03, scale: 1, y: 0, duration: 0.3 }
      );

      tl.fromTo(iconWrapper,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.25, ease: 'back.out(1.7)' },
        0.1
      );

      tl.fromTo(content,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2 },
        0.2
      );

      tl.fromTo(deliverables,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.15 },
        0.4
      );

      tl.to({}, { duration: 0.3 });

      tl.to([iconWrapper, content, ghostNumber], {
        y: -100,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#101010]">
      {/* Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeService === index 
                ? 'bg-[#D9E6FF] scale-125' 
                : 'bg-[#FFFFFF]/20 hover:bg-[#FFFFFF]/40'
            }`}
          />
        ))}
      </div>

      {/* Section Header */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center px-6 lg:px-12 relative py-24">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs text-[#8B7F75] uppercase tracking-[0.3em] mb-6 block"
        >
          Our Expertise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-heading-1 text-[#F5F5F2] mb-4 sm:mb-6 lg:mb-8"
        >
          Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#B7B7B2] max-w-2xl text-center mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0"
        >
          Scroll to explore our comprehensive service offerings
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ArrowDown size={24} className="text-[#D9E6FF] animate-bounce" />
        </motion.div>
      </section>

      {/* Pinned Service Sections */}
      {services.map((service, index) => {
        const IconComponent = service.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            ref={(el: HTMLElement | null) => { sectionsRef.current[index] = el; }}
            className="min-h-screen lg:h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 lg:py-0 relative overflow-hidden"
          >
            <div className="ghost-number absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold pointer-events-none select-none text-[#FFFFFF]/[0.03]">
              {service.id}
            </div>

            <div 
              className="absolute inset-0 opacity-20"
              style={{ 
                background: `radial-gradient(circle at ${isEven ? '30%' : '70%'} center, ${service.color}15 0%, transparent 50%)` 
              }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`flex justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="icon-wrapper relative">
                    <div className="absolute inset-0 -m-4 sm:-m-8">
                      <motion.div
                        className="w-full h-full rounded-full border border-[#FBEAD7]/10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ borderStyle: 'dashed' }}
                      />
                    </div>
                    <div className="absolute inset-0 -m-8 sm:-m-16">
                      <motion.div
                        className="w-full h-full rounded-full border border-[#FBEAD7]/5"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    
                    <motion.div 
                      className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-2xl sm:rounded-3xl flex items-center justify-center cursor-pointer"
                      style={{ background: `${service.color}15` }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div 
                        className="absolute inset-0 rounded-3xl opacity-50"
                        style={{ background: `linear-gradient(135deg, ${service.color}20 0%, transparent 50%)` }}
                      />
                      <IconComponent size={48} className="sm:w-16 sm:h-16 lg:w-20 lg:h-20" style={{ color: service.color }} strokeWidth={1.5} />
                      
                      <div
                        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold"
                        style={{ background: service.color, color: '#0A0A0A' }}
                      >
                        {service.id}
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className={`service-content ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 
                    className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-2 block"
                    style={{ color: service.color }}
                  >
                    {service.subtitle}
                  </h3>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F5F5F2] mb-3 sm:mb-4 lg:mb-6">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg text-[#B7B7B2] leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-lg">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                    {service.deliverables.slice(0, 4).map((item, i) => (
                      <div 
                        key={i}
                        className="deliverable-item flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/5"
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: service.color }}
                        />
                        <span className="text-[10px] sm:text-xs lg:text-sm text-[#B7B7B2]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <MagneticButton onClick={() => navigate('/services')}>
                      <span 
                        className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-2 transition-all duration-300"
                        style={{ background: service.color, color: '#0A0A0A' }}
                      >
                        Explore Service
                        <ChevronRight size={16} />
                      </span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Services;
