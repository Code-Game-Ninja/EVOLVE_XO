import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedCounter } from './ui/AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: 30, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '', label: 'Service Verticals' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 4, suffix: '+', label: 'Years Building' },
];

export const Intro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const ruleRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const headline = "We are EVOLVEXO. An engineering-led agency building systems that evolve.";
  const words = headline.split(' ');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Word-by-word reveal
    if (wordsRef.current.length > 0) {
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.15 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );
    }

    // Rule draw-in
    if (ruleRef.current) {
      gsap.fromTo(
        ruleRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ruleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Metrics stagger
    if (metricsRef.current) {
      gsap.fromTo(
        metricsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-5xl mx-auto">
        {/* Divider line */}
        <div
          ref={ruleRef}
          className="h-px bg-[#FFFFFF]/10 mb-16 origin-left"
        />

        {/* Headline with word reveal */}
        <h2
          ref={headlineRef}
          className="text-heading-1 text-[#F5F5F2] mb-16 leading-tight"
        >
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) wordsRef.current[i] = el;
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Metrics Bar */}
        <div
          ref={metricsRef}
          className="flex flex-wrap items-center justify-between gap-8"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#F5F5F2] tracking-tight">
                  <AnimatedCounter to={metric.value} suffix={metric.suffix} delay={0.2} />
                </div>
                <div className="text-xs text-[#6B6B68] uppercase tracking-[0.2em] mt-2">
                  {metric.label}
                </div>
              </div>
              {index < metrics.length - 1 && (
                <div className="hidden md:block h-12 w-px bg-[#FFFFFF]/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
