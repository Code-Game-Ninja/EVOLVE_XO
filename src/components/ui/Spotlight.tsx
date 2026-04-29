import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight = ({ className = '', fill = '#D9E6FF' }: SpotlightProps) => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    gsap.fromTo(
      spotlight,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 0.15, duration: 1.5, ease: 'power2.out' }
    );

    gsap.to(spotlight, {
      x: 'random(-50, 50)',
      y: 'random(-50, 50)',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={`absolute pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle at center, ${fill} 0%, transparent 70%)`,
        filter: 'blur(80px)',
      }}
    />
  );
};

export default Spotlight;
