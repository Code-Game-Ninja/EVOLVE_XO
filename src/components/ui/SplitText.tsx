import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
  rotateX?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  scrollTrigger?: boolean;
  once?: boolean;
}

export const SplitText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.025,
  y = 80,
  rotateX = 45,
  as: Component = 'div',
  scrollTrigger = false,
  once = true,
}: SplitTextProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const chars = charsRef.current;
    if (chars.length === 0) return;

    const animation = {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration,
      stagger,
      delay,
      ease: 'power4.out',
    };

    gsap.set(chars, { y, opacity: 0, rotateX });

    if (scrollTrigger && containerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        },
      });
      tl.to(chars, animation);
    } else {
      gsap.to(chars, animation);
    }

    return () => {
      if (scrollTrigger) {
        ScrollTrigger.getAll().forEach(st => {
          if (st.vars.trigger === containerRef.current) {
            st.kill();
          }
        });
      }
    };
  }, [text, delay, duration, stagger, y, rotateX, scrollTrigger, once]);

  const words = text.split(' ');

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={`${className}`}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => {
            const globalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex;
            return (
              <span
                key={globalIndex}
                ref={(el) => {
                  if (el) charsRef.current[globalIndex] = el;
                }}
                className="inline-block will-change-transform"
                style={{ 
                  transformStyle: 'preserve-3d',
                  display: 'inline-block',
                }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
};

export default SplitText;
