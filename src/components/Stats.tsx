import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedCounter } from './ui/AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 30, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '', label: 'Service Verticals' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 4, suffix: '+', label: 'Years Building' },
];

export const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const dividersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Dividers draw-in animation
    dividersRef.current.forEach((divider, index) => {
      if (divider) {
        gsap.fromTo(
          divider,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
        >
          {stats.map((stat, index) => (
            <div key={index} className="relative flex items-center justify-center">
              {/* Divider Line */}
              {index > 0 && (
                <div
                  ref={(el) => {
                    dividersRef.current[index] = el;
                  }}
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-[#FFFFFF]/10 origin-center"
                />
              )}
              
              {/* Stat Content */}
              <div className="text-center">
                <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F5F2] tracking-tight mb-4">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                    delay={0.3}
                  />
                </div>
                <div className="text-xs md:text-sm text-[#6B6B68] uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
