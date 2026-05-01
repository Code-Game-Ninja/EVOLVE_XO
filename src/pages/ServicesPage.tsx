import { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Code2, 
  Globe, 
  Megaphone, 
  Lightbulb,
  ArrowRight,
  ArrowDown,
  Check,
  X,
  ChevronRight,
  Sparkles,
  Clock,
  Zap
} from 'lucide-react';
import { SplitText } from '../components/ui/SplitText';
import { MagneticButton } from '../components/ui/MagneticButton';
import { useNavigate } from 'react-router-dom';
import { RadialScrollGallery } from '../components/satisui/radial-scroll-gallery';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'AI SaaS',
    description: 'Intelligent software solutions that leverage machine learning and automation to transform business operations and decision-making. We build AI-powered platforms that learn, adapt, and deliver measurable ROI.',
    icon: Brain,
    color: '#4200FF',
    deliverables: [
      'AI Strategy Consulting',
      'ML Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'SaaS Platform Architecture'
    ],
    process: [
      { step: 1, title: 'Discovery', desc: 'Understand business goals and AI opportunities' },
      { step: 2, title: 'Data Audit', desc: 'Assess data quality and infrastructure' },
      { step: 3, title: 'Model Development', desc: 'Build and train custom ML models' },
      { step: 4, title: 'Integration', desc: 'Deploy into production systems' }
    ]
  },
  {
    id: '02',
    title: 'Custom Software',
    description: 'Bespoke software applications engineered to solve complex business challenges. From enterprise systems to process automation, we build software that becomes your competitive advantage.',
    icon: Code2,
    color: '#F9AC7C',
    deliverables: [
      'Enterprise Applications',
      'Process Automation',
      'Legacy Modernization',
      'System Integration',
      'API Development',
      'Cloud Migration'
    ],
    process: [
      { step: 1, title: 'Analysis', desc: 'Deep dive into current systems and pain points' },
      { step: 2, title: 'Architecture', desc: 'Design scalable technical solution' },
      { step: 3, title: 'Development', desc: 'Agile build with continuous delivery' },
      { step: 4, title: 'Deployment', desc: 'Production release with monitoring' }
    ]
  },
  {
    id: '03',
    title: 'Web Platforms',
    description: 'High-performance web experiences that captivate users and drive business outcomes. We combine stunning design with rock-solid engineering for web solutions that stand out.',
    icon: Globe,
    color: '#3500D8',
    deliverables: [
      'Brand Websites',
      'E-commerce Platforms',
      'Web Applications',
      'CMS Solutions',
      'Progressive Web Apps',
      'Performance Optimization'
    ],
    process: [
      { step: 1, title: 'Strategy', desc: 'Define goals, audience, and success metrics' },
      { step: 2, title: 'Design', desc: 'Create user-centered visual design' },
      { step: 3, title: 'Build', desc: 'Engineer with performance as priority' },
      { step: 4, title: 'Launch', desc: 'Deploy with analytics and optimization' }
    ]
  },
  {
    id: '04',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that amplify your brand presence and accelerate growth. We combine creativity with analytics to deliver campaigns that convert.',
    icon: Megaphone,
    color: '#2C01A5',
    deliverables: [
      'Growth Strategy',
      'Content Marketing',
      'SEO & SEM',
      'Social Media',
      'Analytics & Attribution',
      'Conversion Optimization'
    ],
    process: [
      { step: 1, title: 'Audit', desc: 'Analyze current performance and gaps' },
      { step: 2, title: 'Strategy', desc: 'Develop channel-specific playbooks' },
      { step: 3, title: 'Execute', desc: 'Launch campaigns with A/B testing' },
      { step: 4, title: 'Optimize', desc: 'Iterate based on performance data' }
    ]
  },
  {
    id: '05',
    title: 'Tech Advisory',
    description: 'Strategic technology consulting to navigate digital transformation. We help you make informed decisions about your technology stack, architecture, and digital roadmap.',
    icon: Lightbulb,
    color: '#4200FF',
    deliverables: [
      'Digital Strategy',
      'Tech Stack Assessment',
      'Architecture Review',
      'Team Augmentation',
      'DevOps Consulting',
      'Security Audits'
    ],
    process: [
      { step: 1, title: 'Assessment', desc: 'Evaluate current state and objectives' },
      { step: 2, title: 'Roadmap', desc: 'Create prioritized action plan' },
      { step: 3, title: 'Implementation', desc: 'Execute with hands-on guidance' },
      { step: 4, title: 'Knowledge Transfer', desc: 'Enable internal capabilities' }
    ]
  }
];

export const ServicesPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleCardClick = (service: typeof services[0]) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="relative bg-[#101010]">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 relative overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0f0f0f] to-[#0A0A0A]" />
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(66,0,255,0.08) 0%, transparent 70%)' }}
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,200,30,0.06) 0%, transparent 70%)' }}
            animate={{ 
              x: [0, -40, 0], 
              y: [0, -50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs text-[#8B7F75] uppercase tracking-[0.3em] mb-6 block"
          >
            Our Expertise
          </motion.span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display text-[#FBEAD7] mb-4 sm:mb-6 lg:mb-8">
            <SplitText text="Services" delay={0.2} />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-[#B8A99A] max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Scroll down to explore our comprehensive digital solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-[#8B7F75] uppercase tracking-wider">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={24} className="text-[#4200FF]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Radial Scroll Gallery Section */}
      <section className="relative">
        <RadialScrollGallery
          baseRadius={400}
          mobileRadius={220}
          scrollDuration={2000}
          visiblePercentage={45}
        >
          {(hoveredIndex) =>
            services.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = hoveredIndex === index;
                            return (
                <div
                  key={service.id}
                  onClick={() => handleCardClick(service)}
                  className="
                    w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] 
                    rounded-2xl border-2 p-4 sm:p-6 flex flex-col justify-between
                    transition-all duration-500 cursor-pointer
                    ${isActive 
                      ? 'bg-[#181818] border-[#4200FF] scale-100 shadow-2xl shadow-[#4200FF]/20' 
                      : 'bg-[#1E1E1E] border-[#FBEAD7]/10 scale-95 opacity-70'
                    }
                  "
                >
                  {/* Top Section */}
                  <div className="w-full flex justify-between items-start">
                    <span className={`font-mono text-lg sm:text-xl font-bold ${isActive ? 'text-[#4200FF]' : 'text-[#8B7F75]'}`}>
                      {service.id}
                    </span>
                    {isActive && <Check className="w-6 h-6 text-[#4200FF]" />}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center my-4">
                    <div 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-500"
                      style={{ background: isActive ? `${service.color}30` : `${service.color}10` }}
                    >
                      <IconComponent 
                        size={32} 
                        style={{ color: service.color }}
                        className="sm:w-10 sm:h-10 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#FBEAD7]">{service.title}</h3>
                    <p className={`text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 ${isActive ? 'text-[#B8A99A]' : 'text-[#8B7F75]'}`}>
                      {service.description}
                    </p>
                    
                    {/* Deliverables Preview */}
                    <div className="space-y-1">
                      {service.deliverables.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: service.color }}
                          />
                          <span className={isActive ? 'text-[#B8A99A]' : 'text-[#8B7F75]'}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <button 
                    onClick={() => navigate('/contact')}
                    className={`
                      mt-4 w-full py-3 rounded-xl font-medium text-sm
                      transition-all duration-300 flex items-center justify-center gap-2
                      ${isActive 
                        ? 'bg-[#F5F5F2] text-[#0A0A0A] hover:bg-[#4200FF]' 
                        : 'bg-[#FFFFFF]/5 text-[#8B7F75]'
                      }
                    `}
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })
          }
        </RadialScrollGallery>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto overscroll-contain"
            onClick={handleCloseModal}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Container - Centers the content */}
            <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-12">
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.3, opacity: 0, y: 100 }}
                transition={{ 
                  type: 'spring',
                  damping: 25,
                  stiffness: 300,
                  duration: 0.5
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#1E1E1E] border border-[#FBEAD7]/10 rounded-3xl shadow-2xl my-8"
              >
                {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#181818] border border-[#FBEAD7]/10 flex items-center justify-center text-[#8B7F75] hover:text-[#FBEAD7] hover:border-[#4200FF] transition-all duration-300"
              >
                <X size={20} />
              </button>

                {/* Modal Header */}
                <div className="p-6 sm:p-8 lg:p-12 border-b border-[#FBEAD7]/10 sticky top-0 bg-[#1E1E1E] z-10">
                  <div className="flex items-start gap-4 sm:gap-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', damping: 20 }}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${selectedService.color}20` }}
                  >
                    <selectedService.icon size={32} className="sm:w-10 sm:h-10" style={{ color: selectedService.color }} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-sm font-mono text-[#8B7F75] mb-2 block"
                    >
                      Service {selectedService.id} / 05
                    </motion.span>
                    
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FBEAD7] mb-3 sm:mb-4"
                    >
                      {selectedService.title}
                    </motion.h2>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-[#B8A99A] text-sm sm:text-base lg:text-lg"
                    >
                      {selectedService.description}
                    </motion.p>
                  </div>
                </div>
              </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 lg:p-12 space-y-8 sm:space-y-12">
                {/* Deliverables Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-sm font-medium text-[#FBEAD7] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <Sparkles size={18} style={{ color: selectedService.color }} />
                    What We Deliver
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedService.deliverables.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-[#181818] border border-[#FBEAD7]/5 hover:border-[#FBEAD7]/10 transition-colors"
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: selectedService.color }}
                        />
                        <span className="text-[#B8A99A]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Process Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-sm font-medium text-[#FBEAD7] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <Clock size={18} style={{ color: selectedService.color }} />
                    Our Process
                  </h3>
                  
                  <div className="space-y-4">
                    {selectedService.process.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        className="flex gap-4 items-start"
                      >
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-base sm:text-lg font-bold"
                          style={{ background: `${selectedService.color}20`, color: selectedService.color }}
                        >
                          {step.step}
                        </div>
                        <div className="flex-1 pt-1 sm:pt-2">
                          <h4 className="text-[#FBEAD7] font-medium text-base sm:text-lg mb-1">{step.title}</h4>
                          <p className="text-[#8B7F75] text-xs sm:text-sm">{step.desc}</p>
                        </div>
                        {i < selectedService.process.length - 1 && (
                          <div className="hidden sm:flex items-center pt-4">
                            <ChevronRight size={20} className="text-[#8B7F75]" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-[#FBEAD7]/10"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <Zap size={20} style={{ color: selectedService.color }} />
                      <span className="text-[#B8A99A]">Ready to start your project?</span>
                    </div>
                    
                    <MagneticButton onClick={() => { handleCloseModal(); navigate('/contact'); }}>
                      <span className="btn-primary group">
                        Get Started
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </MagneticButton>
                  </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA Section */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 relative py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-heading-1 text-[#FBEAD7] mb-3 sm:mb-4 lg:mb-6"
          >
            Ready to get started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#B8A99A] mb-6 sm:mb-8"
          >
            Let's discuss how we can help transform your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton onClick={() => navigate('/contact')}>
              <span className="btn-primary text-base py-4 px-8">
                Start a Conversation
                <ArrowRight size={18} />
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
