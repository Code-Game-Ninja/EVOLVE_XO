import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Rocket, RefreshCw, Bot, TrendingUp, ArrowRight, Check, Sparkles, Zap } from 'lucide-react';
import { SplitText } from '../components/ui/SplitText';
import { GlowCard } from '../components/ui/GlowCard';
import { MagneticButton } from '../components/ui/MagneticButton';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: '01',
    title: 'Launch a Product',
    description: 'Transform your idea into a market-ready product. Our end-to-end product development approach ensures you launch fast without compromising quality.',
    icon: Rocket,
    benefits: [
      'Rapid MVP development',
      'Market validation strategies',
      'Scalable architecture from day one',
      'Post-launch optimization'
    ],
    tags: ['Product Strategy', 'MVP Development', 'Go-to-Market']
  },
  {
    id: '02',
    title: 'Modernize Operations',
    description: 'Upgrade legacy systems and streamline operations with modern technology. We help you eliminate technical debt and future-proof your infrastructure.',
    icon: RefreshCw,
    benefits: [
      'Legacy system migration',
      'Cloud-native transformation',
      'Process automation',
      'Reduced maintenance costs'
    ],
    tags: ['Modernization', 'Cloud Migration', 'DevOps']
  },
  {
    id: '03',
    title: 'Automate Work',
    description: 'Deploy AI-powered automation that eliminates repetitive tasks and amplifies your team productivity. From intelligent workflows to predictive systems.',
    icon: Bot,
    benefits: [
      'Intelligent workflow automation',
      'AI-powered decision support',
      'Document processing automation',
      'Integration with existing tools'
    ],
    tags: ['AI/ML', 'RPA', 'Intelligent Automation']
  },
  {
    id: '04',
    title: 'Digital Growth',
    description: 'Accelerate your business with data-driven digital strategies. We combine marketing expertise with technical implementation for measurable outcomes.',
    icon: TrendingUp,
    benefits: [
      'Performance marketing',
      'Conversion optimization',
      'Customer analytics',
      'Growth experimentation'
    ],
    tags: ['Growth Marketing', 'Analytics', 'CRO']
  }
];

export const SolutionsPage = () => {
  const navigate = useNavigate();
  const chaptersRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    chaptersRef.current.forEach((chapter) => {
      if (!chapter) return;

      const ghostNumber = chapter.querySelector('.ghost-number');
      const content = chapter.querySelector('.chapter-content');

      gsap.fromTo(
        ghostNumber,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: chapter,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        content,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: chapter,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Elements */}
      <section className="pt-32 pb-16 px-6 lg:px-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 right-20 w-96 h-96 bg-[#D9E6FF]/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-72 h-72 bg-[#FFC81E]/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -10, 0],
              y: [0, 10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#D9E6FF]/3 to-transparent rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block"
          >
            Solutions
          </motion.span>
          <h1 className="text-display text-[#F5F5F2] mb-6">
            <SplitText text="Solutions for every challenge." scrollTrigger />
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#B7B7B2] max-w-2xl"
          >
            From launching products to scaling operations, we architect solutions that drive real business outcomes.
          </motion.p>
          
          {/* Floating Solution Pills */}
          <motion.div 
            className="flex flex-wrap gap-3 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {['Launch', 'Modernize', 'Automate', 'Scale'].map((tag, i) => (
              <motion.span
                key={tag}
                className="px-4 py-2 glass-badge rounded-full text-sm text-[#B7B7B2] flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(217, 230, 255, 0.1)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Zap size={14} className="text-[#FFC81E]" />
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Chapters */}
      <div className="pb-24">
        {solutions.map((solution, index) => {
          const IconComponent = solution.icon;
          const isReversed = index % 2 === 1;

          return (
            <section
              key={solution.id}
              ref={(el) => { chaptersRef.current[index] = el; }}
              className={`py-24 px-6 lg:px-12 relative overflow-hidden ${index % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#121212]'}`}
            >
              {/* Ghost Number Background */}
              <motion.div 
                className="ghost-number absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] pointer-events-none select-none"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {solution.id}
              </motion.div>

              <div className="max-w-7xl mx-auto relative z-10">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual/Icon Side */}
                  <div className={`chapter-content ${isReversed ? 'lg:order-2' : ''}`}>
                    <motion.div 
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Abstract Shape with 3D Effect */}
                      <div className="w-full aspect-square max-w-md mx-auto relative">
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D9E6FF]/10 to-transparent blur-3xl"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                          className="relative w-full h-full glass-panel rounded-3xl flex items-center justify-center overflow-hidden"
                          whileHover={{ 
                            boxShadow: "0 0 60px rgba(217, 230, 255, 0.1)",
                          }}
                        >
                          {/* Animated Gradient Border */}
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D9E6FF]/20 via-transparent to-[#FFC81E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <IconComponent size={80} className="text-[#F5F5F2] relative z-10" strokeWidth={1} />
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className={`chapter-content ${isReversed ? 'lg:order-1' : ''}`}>
                    <motion.div 
                      className="flex items-center gap-4 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="text-sm font-mono text-[#6B6B68]"
                        whileHover={{ color: "#D9E6FF" }}
                      >
                        {solution.id}
                      </motion.span>
                      <div className="flex gap-2 flex-wrap">
                        {solution.tags.map((tag, i) => (
                          <motion.span 
                            key={tag} 
                            className="text-xs px-3 py-1 glass-badge rounded-full text-[#B7B7B2] hover:text-[#F5F5F2] hover:bg-[#D9E6FF]/10 transition-all cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            viewport={{ once: true }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.h2 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5F2] mb-6 hover:text-[#D9E6FF] transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {solution.title}
                    </motion.h2>

                    <motion.p 
                      className="text-lg text-[#B7B7B2] leading-relaxed mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {solution.description}
                    </motion.p>

                    <GlowCard className="p-6 mb-8 hover:border-[#D9E6FF]/20 transition-all duration-300 group">
                      <h3 className="text-sm font-medium text-[#F5F5F2] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <Sparkles size={16} className="text-[#D9E6FF]" />
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 group/item cursor-pointer"
                            whileHover={{ x: 8 }}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check size={18} className="text-[#D9E6FF] mt-0.5 flex-shrink-0 group-hover/item:text-[#FFC81E] transition-colors" />
                            </motion.div>
                            <span className="text-[#B7B7B2] group-hover/item:text-[#F5F5F2] transition-colors">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </GlowCard>

                    <MagneticButton onClick={() => navigate('/contact')}>
                      <span className="btn-primary group">
                        Explore This Solution
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </MagneticButton>
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
            Which solution fits your challenge?
          </h2>
          <p className="text-lg text-[#B7B7B2] mb-8">
            Let's discuss your specific needs and craft a tailored approach.
          </p>
          <MagneticButton onClick={() => navigate('/contact')}>
            <span className="btn-primary text-base py-4 px-8">
              Schedule a Consultation
              <ArrowRight size={18} />
            </span>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
