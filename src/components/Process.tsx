import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: '01',
    title: 'Discovery',
    subtitle: 'Understanding Your Vision',
    description: 'We dive deep into your business goals, user needs, and market landscape to uncover opportunities and define success metrics.',
    icon: Search,
    color: '#D9E6FF',
    details: ['Stakeholder interviews', 'User research', 'Market analysis', 'Technical audit']
  },
  {
    id: '02',
    title: 'Strategy',
    subtitle: 'Crafting the Roadmap',
    description: 'We architect a comprehensive plan that aligns technology choices with business objectives and user expectations.',
    icon: Lightbulb,
    color: '#FFC81E',
    details: ['Solution architecture', 'Tech stack selection', 'Project timeline', 'Risk assessment']
  },
  {
    id: '03',
    title: 'Build',
    subtitle: 'Engineering Excellence',
    description: 'Our engineering team brings the strategy to life with clean code, iterative development, and continuous testing.',
    icon: Code2,
    color: '#FF6B35',
    details: ['Agile sprints', 'Code reviews', 'Quality assurance', 'Weekly showcases']
  },
  {
    id: '04',
    title: 'Launch',
    subtitle: 'Go Live & Scale',
    description: 'We deploy your solution with monitoring, optimization, and ongoing support to ensure long-term success.',
    icon: Rocket,
    color: '#4ADE80',
    details: ['Production deployment', 'Performance monitoring', 'Analytics setup', 'Growth support']
  }
];

export const Process = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Progress line animation
    if (progressLineRef.current) {
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        }
      );
    }

    // Individual step animations
    stepsRef.current.forEach((step, index) => {
      if (!step) return;

      const icon = step.querySelector('.step-icon');
      const content = step.querySelector('.step-content');
      const details = step.querySelectorAll('.detail-item');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(icon,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' }
      );

      tl.fromTo(content,
        { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

      tl.fromTo(details,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4 },
        '-=0.2'
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-[#D9E6FF]/5 to-transparent rounded-r-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-[#FFC81E]/5 to-transparent rounded-l-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-heading-1 text-[#F5F5F2] mb-4 sm:mb-6"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-[#B7B7B2] max-w-2xl mx-auto px-4"
          >
            A battle-tested methodology that delivers results
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FFFFFF]/10 hidden lg:block">
            <div
              ref={progressLineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#D9E6FF] via-[#FFC81E] to-[#4ADE80] origin-top"
              style={{ height: '100%' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 sm:space-y-24">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <article
                  key={step.id}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Icon Side */}
                  <div className={`flex justify-center ${isEven ? 'lg:justify-end' : 'lg:order-2 lg:justify-start'}`}>
                    <div className="relative">
                      {/* Connection dot */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 hidden lg:block"
                        style={{ borderColor: step.color }}
                      />

                      <motion.div
                        className="step-icon w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl sm:rounded-3xl flex items-center justify-center relative z-10"
                        style={{ background: `${step.color}15` }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                      >
                        <div
                          className="absolute inset-0 rounded-3xl opacity-30"
                          style={{ background: `linear-gradient(135deg, ${step.color}30 0%, transparent 50%)` }}
                        />
                        <IconComponent size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12" style={{ color: step.color }} strokeWidth={1.5} />

                        {/* Step number badge */}
                        <div
                          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold"
                          style={{ background: step.color, color: '#0A0A0A' }}
                        >
                          {step.id}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`step-content ${isEven ? 'lg:order-2' : ''} text-center lg:text-left px-4 sm:px-0`}>
                    <span
                      className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-2 block"
                      style={{ color: step.color }}
                    >
                      Step {step.id}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F5F2] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[#B7B7B2] mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-[#6B6B68] mb-4 sm:mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {step.details.map((detail, i) => (
                        <div
                          key={i}
                          className="detail-item flex items-center gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/5"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: step.color }}
                          />
                          <span className="text-xs sm:text-sm text-[#B7B7B2]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16 sm:mt-24 px-4"
        >
          <p className="text-[#B7B7B2] mb-4 sm:mb-6">Ready to start your project?</p>
          <MagneticButton onClick={() => navigate('/contact')}>
            <span className="btn-primary group text-sm sm:text-base">
              Start Your Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
