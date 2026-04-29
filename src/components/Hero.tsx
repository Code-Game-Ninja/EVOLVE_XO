import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ArrowDown, ChevronDown } from 'lucide-react';
import { SplitText } from './ui/SplitText';
import { MagneticButton } from './ui/MagneticButton';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Badge float animation
    if (badgeRef.current) {
      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.2
      );
    }

    // Subtext reveal
    if (subtextRef.current) {
      tl.fromTo(
        subtextRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.7
      );
    }

    // Nav links reveal
    if (navLinksRef.current) {
      tl.fromTo(
        navLinksRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        1.0
      );
    }

    // CTA buttons
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current.children,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1 },
        1.1
      );
    }

    // Ambient blob breathing
    if (blob1Ref.current && blob2Ref.current) {
      gsap.to(blob1Ref.current, {
        scale: 1.05,
        x: 20,
        y: -10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(blob2Ref.current, {
        scale: 1.03,
        x: -15,
        y: 15,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background System - Layered */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        
        {/* Large mesh gradient blob - top-left */}
        <div
          ref={blob1Ref}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(217,230,255,0.02) 0%, transparent 70%)',
            filter: 'blur(200px)',
          }}
        />
        
        {/* Second blob - bottom-right */}
        <div
          ref={blob2Ref}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.01) 0%, transparent 70%)',
            filter: 'blur(160px)',
          }}
        />
        
        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, #0A0A0A 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 glass-badge rounded-full px-4 py-2 mb-8 animate-float"
        >
          <span className="status-dot animate-pulse-dot" />
          <span className="text-xs font-medium text-[#F5F5F2] tracking-wide">
            EVOLVEXO Technologies
          </span>
        </div>

        {/* Headline with SplitText */}
        <h1 className="text-display text-[#F5F5F2] mb-6 leading-tight">
          <SplitText text="Architecting the future of digital systems." delay={0.2} />
        </h1>

        {/* Subtext + Inline Nav Links */}
        <p
          ref={subtextRef}
          className="text-[#B7B7B2] text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed font-light"
        >
          We build AI SaaS products, custom software, and web platforms that evolve with your business.{' '}
          <span className="text-[#6B6B68]">Engineered for impact.</span>
        </p>

        {/* Quick Nav Links */}
        <div
          ref={navLinksRef}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm mb-10"
        >
          {['Services', 'Solutions', 'Work', 'About', 'Insights'].map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(`/${link.toLowerCase()}`)}
              className="text-[#6B6B68] hover:text-[#F5F5F2] transition-colors duration-300 hover-underline"
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton onClick={() => handleNavClick('/contact')}>
            <span className="btn-primary">
              Start a Project
              <ArrowRight size={16} />
            </span>
          </MagneticButton>
          
          <MagneticButton onClick={() => handleNavClick('/work')}>
            <span className="btn-secondary">
              View Our Work
              <ArrowDown size={16} />
            </span>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0A0A0A 0%, transparent 100%)',
        }}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-[#6B6B68] tracking-[0.3em] uppercase">
          Scroll to explore
        </span>
        <ChevronDown size={20} className="text-[#6B6B68] animate-bounce-slow" />
      </div>
    </section>
  );
};

export default Hero;
