import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code2, 
  Globe, 
  Megaphone, 
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SplitText } from '../components/ui/SplitText';
import { GlowCard } from '../components/ui/GlowCard';
import { MagneticButton } from '../components/ui/MagneticButton';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'AI SaaS',
    description: 'Intelligent software solutions that leverage machine learning and automation to transform business operations and decision-making. We build AI-powered platforms that learn, adapt, and deliver measurable ROI.',
    icon: Brain,
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
    title: 'Websites & Web Platforms',
    description: 'High-performance web experiences that captivate users and drive business outcomes. We combine stunning design with rock-solid engineering for web solutions that stand out.',
    icon: Globe,
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
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (!section) return;

      const leftContent = section.querySelector('.service-left');
      const rightContent = section.querySelector('.service-right');

      gsap.fromTo(
        leftContent,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        rightContent,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="pt-32 pb-16 px-6 lg:px-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D9E6FF]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFC81E]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block"
          >
            Our Expertise
          </motion.span>
          <h1 className="text-display text-[#F5F5F2] mb-6">
            <SplitText text="Services." scrollTrigger />
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#B7B7B2] max-w-2xl"
          >
            Comprehensive digital solutions engineered for impact. From AI to web platforms, we build what moves your business forward.
          </motion.p>
        </div>
      </section>

      {/* Service Sections */}
      <div className="pb-24">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              ref={(el) => { sectionsRef.current[index] = el; }}
              className={`py-20 px-6 lg:px-12 ${isEven ? 'bg-[#0A0A0A]' : 'bg-[#121212]'}`}
            >
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  {/* Left Content */}
                  <div className="service-left">
                    <motion.div 
                      className="flex items-center gap-4 mb-6"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-14 h-14 rounded-full glass-badge flex items-center justify-center cursor-pointer"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 360,
                          backgroundColor: "rgba(217, 230, 255, 0.1)"
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent size={28} className="text-[#F5F5F2]" />
                      </motion.div>
                      <span className="text-sm font-mono text-[#6B6B68]">{service.id}</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F2] mb-6 group-hover:text-[#D9E6FF] transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-lg text-[#B7B7B2] leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <MagneticButton onClick={() => navigate('/contact')}>
                      <span className="btn-primary group">
                        Discuss Your Project
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </MagneticButton>
                  </div>

                  {/* Right Content */}
                  <div className="service-right space-y-6">
                    {/* Deliverables Card */}
                    <GlowCard className="p-6 md:p-8 hover:border-[#D9E6FF]/20 transition-all duration-300">
                      <h3 className="text-sm font-medium text-[#F5F5F2] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <Sparkles size={16} className="text-[#D9E6FF]" />
                        Deliverables
                      </h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-center gap-3 group cursor-pointer"
                            whileHover={{ x: 8 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <motion.div
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle2 size={18} className="text-[#D9E6FF] flex-shrink-0 group-hover:text-[#FFC81E] transition-colors" />
                            </motion.div>
                            <span className="text-[#B7B7B2] group-hover:text-[#F5F5F2] transition-colors">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </GlowCard>

                    {/* Process Card with Connected Steps */}
                    <GlowCard className="p-6 md:p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D9E6FF]/10 to-transparent rounded-full blur-2xl" />
                      <h3 className="text-sm font-medium text-[#F5F5F2] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <ChevronRight size={16} className="text-[#D9E6FF]" />
                        Our Process
                      </h3>
                      <div className="space-y-0 relative">
                        {/* Vertical connecting line */}
                        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#D9E6FF]/50 via-[#FFC81E]/50 to-[#E87F24]/50" />
                        
                        {service.process.map((step, i) => (
                          <motion.div 
                            key={i} 
                            className="flex gap-4 group relative py-3"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <motion.div 
                              className="flex-shrink-0 w-8 h-8 rounded-full glass-badge flex items-center justify-center text-sm text-[#6B6B68] group-hover:text-[#F5F5F2] group-hover:bg-[#D9E6FF]/20 transition-all z-10"
                              whileHover={{ scale: 1.15 }}
                            >
                              {step.step}
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="text-[#F5F5F2] font-medium mb-1 flex items-center gap-2">
                                {step.title}
                                <motion.span
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 + 0.2 }}
                                >
                                  <ChevronRight size={14} className="text-[#6B6B68] group-hover:text-[#D9E6FF] group-hover:translate-x-1 transition-all" />
                                </motion.span>
                              </h4>
                              <p className="text-sm text-[#6B6B68] group-hover:text-[#B7B7B2] transition-colors">{step.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </GlowCard>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-heading-1 text-[#F5F5F2] mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-[#B7B7B2] mb-8">
            Let's discuss how we can help transform your business.
          </p>
          <MagneticButton onClick={() => navigate('/contact')}>
            <span className="btn-primary text-base py-4 px-8">
              Start a Conversation
              <ArrowRight size={18} />
            </span>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
