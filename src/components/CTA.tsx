import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SplitText } from './ui/SplitText';
import { MagneticButton } from './ui/MagneticButton';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(217,230,255,0.03) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Animated Border */}
      <div className="absolute inset-8 lg:inset-16 rounded-3xl border border-[#FFFFFF]/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={contentRef}>
          {/* Overline */}
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block">
            Start Your Project
          </span>

          {/* Headline */}
          <h2 className="text-heading-1 text-[#F5F5F2] mb-6">
            <SplitText text="Ready to build something exceptional?" scrollTrigger />
          </h2>

          {/* Subtext */}
          <p className="text-lg text-[#B7B7B2] mb-10 max-w-xl mx-auto">
            Tell us your challenge. We'll architect the solution.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton onClick={() => navigate('/contact')}>
              <span className="btn-primary text-base py-4 px-8">
                Start a Project
                <ArrowRight size={18} />
              </span>
            </MagneticButton>

            <MagneticButton onClick={() => navigate('/work')}>
              <span className="btn-secondary text-base py-4 px-8">
                View Our Work
                <ArrowUpRight size={18} />
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
