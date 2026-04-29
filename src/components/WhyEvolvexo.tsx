import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Shield, Layers, TrendingUp } from 'lucide-react';
import { GlowCard } from './ui/GlowCard';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Zap,
    title: 'Engineering Excellence',
    description: 'Every line of code is crafted with precision. We build systems that scale, perform, and stand the test of time.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security woven into every solution. Your data and your users are protected from day one.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Capabilities',
    description: 'From AI models to user interfaces. We own the entire stack, ensuring seamless integration at every layer.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Partnership',
    description: 'We dont just deliver projects; we become your technology partner. Invested in your success, aligned with your goals.',
  },
];

export const WhyEvolvexo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Cards stagger animation
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Watermark slow rotation
    if (watermarkRef.current) {
      gsap.to(watermarkRef.current, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        ref={watermarkRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] pointer-events-none select-none whitespace-nowrap"
      >
        EVOLVE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-heading-1 text-[#F5F5F2]">Why EVOLVEXO.</h2>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <GlowCard
                key={index}
                className="group p-8 md:p-10 hover:border-white/15 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full glass-badge flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(217,230,255,0.1)] transition-shadow duration-300">
                  <IconComponent size={28} className="text-[#F5F5F2]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#F5F5F2] mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-[#B7B7B2] leading-relaxed">
                  {reason.description}
                </p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyEvolvexo;
