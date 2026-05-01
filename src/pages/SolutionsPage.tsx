import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  RefreshCw, 
  Bot, 
  TrendingUp, 
  ArrowRight, 
  ArrowDown,
  X,
  ChevronRight,
  Target,
  Clock,
  Users
} from 'lucide-react';
import { SplitText } from '../components/ui/SplitText';
import { MagneticButton } from '../components/ui/MagneticButton';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: '01',
    title: 'Launch a Product',
    subtitle: 'From Idea to Market',
    description: 'Transform your idea into a market-ready product. Our end-to-end product development approach ensures you launch fast without compromising quality.',
    icon: Rocket,
    color: '#4200FF',
    benefits: [
      'Rapid MVP development',
      'Market validation strategies',
      'Scalable architecture from day one',
      'Post-launch optimization',
      'User acquisition planning',
      'Investor-ready documentation'
    ],
    tags: ['Product Strategy', 'MVP Development', 'Go-to-Market'],
    timeline: [
      { phase: 'Discovery', duration: '1-2 weeks', desc: 'Deep dive into your vision, market, and users' },
      { phase: 'Strategy', duration: '1 week', desc: 'Define roadmap, features, and success metrics' },
      { phase: 'Design Sprint', duration: '2 weeks', desc: 'Rapid prototyping and user testing' },
      { phase: 'Development', duration: '4-8 weeks', desc: 'Agile build with weekly showcases' },
      { phase: 'Launch', duration: '1 week', desc: 'Go-live with monitoring and support' }
    ]
  },
  {
    id: '02',
    title: 'Modernize Operations',
    subtitle: 'Future-Ready Infrastructure',
    description: 'Upgrade legacy systems and streamline operations with modern technology. We help you eliminate technical debt and future-proof your infrastructure.',
    icon: RefreshCw,
    color: '#3500D8',
    benefits: [
      'Legacy system migration',
      'Cloud-native transformation',
      'Process automation',
      'Reduced maintenance costs',
      'Improved security posture',
      'Enhanced scalability'
    ],
    tags: ['Modernization', 'Cloud Migration', 'DevOps'],
    timeline: [
      { phase: 'Assessment', duration: '2 weeks', desc: 'Audit current systems and identify blockers' },
      { phase: 'Planning', duration: '1 week', desc: 'Design target architecture and migration path' },
      { phase: 'Pilot', duration: '2 weeks', desc: 'Migrate non-critical systems first' },
      { phase: 'Migration', duration: '4-6 weeks', desc: 'Phased rollout with zero downtime' },
      { phase: 'Optimization', duration: 'Ongoing', desc: 'Performance tuning and monitoring' }
    ]
  },
  {
    id: '03',
    title: 'Automate Work',
    subtitle: 'AI-Powered Efficiency',
    description: 'Deploy AI-powered automation that eliminates repetitive tasks and amplifies your team productivity. From intelligent workflows to predictive systems.',
    icon: Bot,
    color: '#F9AC7C',
    benefits: [
      'Intelligent workflow automation',
      'AI-powered decision support',
      'Document processing automation',
      'Integration with existing tools',
      'Predictive analytics',
      '24/7 automated operations'
    ],
    tags: ['AI/ML', 'RPA', 'Intelligent Automation'],
    timeline: [
      { phase: 'Analysis', duration: '1 week', desc: 'Map workflows and identify automation candidates' },
      { phase: 'Design', duration: '1 week', desc: 'Create automation architecture and select tools' },
      { phase: 'Build', duration: '3-4 weeks', desc: 'Develop bots, workflows, and integrations' },
      { phase: 'Test', duration: '1 week', desc: 'Validate accuracy and edge cases' },
      { phase: 'Deploy', duration: '1 week', desc: 'Go live with monitoring and handover' }
    ]
  },
  {
    id: '04',
    title: 'Digital Growth',
    subtitle: 'Scale Your Business',
    description: 'Accelerate your business with data-driven digital strategies. We combine marketing expertise with technical implementation for measurable outcomes.',
    icon: TrendingUp,
    color: '#2C01A5',
    benefits: [
      'Performance marketing',
      'Conversion optimization',
      'Customer analytics',
      'Growth experimentation',
      'SEO & content strategy',
      'Marketing automation'
    ],
    tags: ['Growth Marketing', 'Analytics', 'CRO'],
    timeline: [
      { phase: 'Audit', duration: '1 week', desc: 'Analyze current funnel and identify leaks' },
      { phase: 'Strategy', duration: '1 week', desc: 'Define growth channels and experiments' },
      { phase: 'Setup', duration: '1 week', desc: 'Implement tracking, tools, and dashboards' },
      { phase: 'Execute', duration: 'Ongoing', desc: 'Run experiments and optimize continuously' },
      { phase: 'Scale', duration: 'Ongoing', desc: 'Double down on winning strategies' }
    ]
  }
];

export const SolutionsPage = () => {
  const navigate = useNavigate();
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);
  const [activeSolution, setActiveSolution] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pinned storytelling sections
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      const ghostNumber = section.querySelector('.ghost-number');
      const iconWrapper = section.querySelector('.icon-wrapper');
      const content = section.querySelector('.story-content');
      const tags = section.querySelectorAll('.tag-pill');
      const benefits = section.querySelectorAll('.benefit-item');

      const isDesktop = window.innerWidth >= 1024;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isDesktop ? 'top top' : 'top 80%',
          end: isDesktop ? '+=250%' : '+=100%',
          pin: isDesktop,
          scrub: 0.8,
          onEnter: () => setActiveSolution(index),
          onEnterBack: () => setActiveSolution(index),
        }
      });

      // Phase 1: Ghost number reveals dramatically
      tl.fromTo(ghostNumber, 
        { opacity: 0, scale: 2, y: 100 },
        { opacity: 0.03, scale: 1, y: 0, duration: 0.3 }
      );

      // Phase 2: Icon pops in with bounce
      tl.fromTo(iconWrapper,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.25, ease: 'back.out(1.7)' },
        0.1
      );

      // Phase 3: Content slides in
      tl.fromTo(content,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2 },
        0.2
      );

      // Phase 4: Tags stagger in
      tl.fromTo(tags,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.15 },
        0.3
      );

      // Phase 5: Benefits reveal
      tl.fromTo(benefits,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.15 },
        0.4
      );

      // Hold for reading
      tl.to({}, { duration: 0.3 });

      // Phase 6: Exit animation
      tl.to([iconWrapper, content, ghostNumber], {
        y: -100,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05
      });
    });

    // Progress bar animation
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleOpenSolution = (solution: typeof solutions[0]) => {
    setSelectedSolution(solution);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseSolution = () => {
    setSelectedSolution(null);
    document.body.style.overflow = '';
  };

  return (
    <div ref={containerRef} className="relative bg-[#101010]">
      {/* Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSolution === index 
                ? 'bg-[#4200FF] scale-125' 
                : 'bg-[#FFFFFF]/20 hover:bg-[#FFFFFF]/40'
            }`}
          />
        ))}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#FFFFFF]/10 -z-10">
          <div 
            ref={progressRef}
            className="w-full bg-[#4200FF] origin-top"
            style={{ transform: 'scaleY(0)', height: '100%' }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(217,230,255,0.06) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,200,30,0.04) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -50, 0] }}
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
            Solutions
          </motion.span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display text-[#F5F5F2] mb-6 sm:mb-8">
            <SplitText text="Solutions that drive growth" delay={0.2} />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#B7B7B2] max-w-2xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0"
          >
            Scroll to explore our battle-tested approaches to launching, modernizing, and scaling your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-[#8B7F75] uppercase tracking-wider">Scroll to begin the journey</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={24} className="text-[#4200FF]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pinned Solution Story Sections */}
      {solutions.map((solution, index) => {
        const IconComponent = solution.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={solution.id}
            ref={(el: HTMLElement | null) => { sectionsRef.current[index] = el; }}
            className="min-h-screen lg:h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 lg:py-0 relative overflow-hidden"
          >
            {/* Ghost Number Background */}
            <div className="ghost-number absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold pointer-events-none select-none">
              {solution.id}
            </div>

            {/* Background Glow */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{ 
                background: `radial-gradient(circle at ${isEven ? '30%' : '70%'} center, ${solution.color}15 0%, transparent 50%)` 
              }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Icon Side */}
                <div className={`flex justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="icon-wrapper relative">
                    {/* Orbiting rings */}
                    <div className="absolute inset-0 -m-8">
                      <motion.div
                        className="w-full h-full rounded-full border border-[#FBEAD7]/10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ borderStyle: 'dashed' }}
                      />
                    </div>
                    <div className="absolute inset-0 -m-16">
                      <motion.div
                        className="w-full h-full rounded-full border border-[#FBEAD7]/5"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    
                    {/* Main Icon Container */}
                    <motion.div 
                      className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-2xl sm:rounded-3xl flex items-center justify-center cursor-pointer"
                      style={{ background: `${solution.color}15` }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleOpenSolution(solution)}
                    >
                      <div 
                        className="absolute inset-0 rounded-3xl opacity-50"
                        style={{ 
                          background: `linear-gradient(135deg, ${solution.color}20 0%, transparent 50%)` 
                        }}
                      />
                      <IconComponent 
                        size={48} 
                        className="sm:w-16 sm:h-16 lg:w-20 lg:h-20 relative z-10"
                        style={{ color: solution.color }}
                        strokeWidth={1.5}
                      />
                      
                      {/* Click hint */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#8B7F75] whitespace-nowrap hidden sm:block">
                        Click for details
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`story-content ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono text-[#8B7F75]">
                      {solution.id} / 04
                    </span>
                    <div className="flex gap-2 flex-wrap">
                      {solution.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="tag-pill text-xs px-3 py-1 rounded-full border border-[#FBEAD7]/10 text-[#B8A99A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-2" style={{ color: solution.color }}>
                    {solution.subtitle}
                  </h3>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F5F5F2] mb-3 sm:mb-4 lg:mb-6">
                    {solution.title}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg text-[#B7B7B2] leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-lg">
                    {solution.description}
                  </p>

                  {/* Benefits Preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                    {solution.benefits.slice(0, 4).map((benefit, i) => (
                      <div 
                        key={i}
                        className="benefit-item flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#FFFFFF]/5 border border-[#FBEAD7]/5"
                      >
                        <div 
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: solution.color }}
                        />
                        <span className="text-[10px] sm:text-xs lg:text-sm text-[#B7B7B2]">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <MagneticButton onClick={() => handleOpenSolution(solution)}>
                      <span 
                        className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-2 transition-all duration-300"
                        style={{ 
                          background: solution.color,
                          color: '#0A0A0A'
                        }}
                      >
                        View Full Details
                        <ArrowRight size={16} />
                      </span>
                    </MagneticButton>
                    
                    <MagneticButton onClick={() => navigate('/contact')}>
                      <span className="text-[#6B6B68] hover:text-[#F5F5F2] transition-colors text-xs sm:text-sm">
                        Get Started →
                      </span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto overscroll-contain"
            onClick={handleCloseSolution}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Container */}
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
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#1E1E1E] border border-[#FBEAD7]/10 rounded-3xl shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseSolution}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#1B1B1B] border border-[#FBEAD7]/10 flex items-center justify-center text-[#8B7F75] hover:text-[#FBEAD7] hover:border-[#D9E6FF] transition-all duration-300"
                >
                  <X size={20} />
                </button>

                {/* Modal Header */}
                <div className="p-6 sm:p-8 lg:p-12 border-b border-[#FFFFFF]/10 sticky top-0 bg-[#121212] z-10">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', damping: 20 }}
                      className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${selectedSolution.color}20` }}
                    >
                      <selectedSolution.icon size={32} className="sm:w-10 sm:h-10" style={{ color: selectedSolution.color }} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm font-mono text-[#8B7F75] mb-2 block"
                      >
                        Solution {selectedSolution.id} / 04
                      </motion.span>
                      
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="text-sm font-medium uppercase tracking-[0.2em] mb-2 block"
                        style={{ color: selectedSolution.color }}
                      >
                        {selectedSolution.subtitle}
                      </motion.span>
                      
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F5F2] mb-3 sm:mb-4"
                      >
                        {selectedSolution.title}
                      </motion.h2>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#B7B7B2] text-sm sm:text-base lg:text-lg"
                      >
                        {selectedSolution.description}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 lg:p-12 space-y-8 sm:space-y-12">
                  {/* Benefits Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-xs sm:text-sm font-medium text-[#FBEAD7] uppercase tracking-[0.2em] mb-4 sm:mb-6 flex items-center gap-3">
                      <Target size={16} className="sm:w-[18px] sm:h-[18px]" style={{ color: selectedSolution.color }} />
                      Key Benefits
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {selectedSolution.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-[#1B1B1B] border border-[#FBEAD7]/5 hover:border-[#FBEAD7]/10 transition-colors"
                        >
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: selectedSolution.color }}
                          />
                          <span className="text-[#B8A99A] text-xs sm:text-sm">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Timeline Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-xs sm:text-sm font-medium text-[#FBEAD7] uppercase tracking-[0.2em] mb-4 sm:mb-6 flex items-center gap-3">
                      <Clock size={16} className="sm:w-[18px] sm:h-[18px]" style={{ color: selectedSolution.color }} />
                      Implementation Timeline
                    </h3>
                    
                    <div className="relative">
                      {/* Timeline Line */}
                      <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-[#FFFFFF]/10 hidden sm:block" />
                      
                      <div className="space-y-4 sm:space-y-6">
                        {selectedSolution.timeline.map((step, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                            className="flex gap-3 sm:gap-4 items-start relative"
                          >
                            {/* Timeline Dot */}
                            <div className="hidden sm:flex flex-col items-center">
                              <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
                                style={{ background: `${selectedSolution.color}20` }}
                              >
                                <span className="text-base sm:text-lg font-bold" style={{ color: selectedSolution.color }}>
                                  {i + 1}
                                </span>
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 pt-0 sm:pt-2">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
                                <h4 className="text-[#FBEAD7] font-medium text-base sm:text-lg">{step.phase}</h4>
                                <span 
                                  className="text-[10px] sm:text-xs px-2 py-1 rounded-full border"
                                  style={{ borderColor: `${selectedSolution.color}40`, color: selectedSolution.color }}
                                >
                                  {step.duration}
                                </span>
                              </div>
                              <p className="text-[#8B7F75] text-xs sm:text-sm">{step.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4 sm:pt-6 border-t border-[#FBEAD7]/10"
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Users size={18} className="sm:w-5 sm:h-5" style={{ color: selectedSolution.color }} />
                        <span className="text-[#B8A99A] text-xs sm:text-sm">Join 50+ companies who chose this solution</span>
                      </div>
                      
                      <MagneticButton onClick={() => { handleCloseSolution(); navigate('/contact'); }}>
                        <span 
                          className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-2 transition-all duration-300"
                          style={{ background: selectedSolution.color, color: '#0A0A0A' }}
                        >
                          Start Your Project
                          <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
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
      <section className="min-h-[50vh] sm:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 relative py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-heading-1 text-[#FBEAD7] mb-3 sm:mb-4 lg:mb-6"
          >
            Which solution fits your challenge?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#B8A99A] mb-6 sm:mb-8"
          >
            Let's discuss your specific needs and craft a tailored approach.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton onClick={() => navigate('/contact')}>
              <span className="btn-primary text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8">
                Schedule a Consultation
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

