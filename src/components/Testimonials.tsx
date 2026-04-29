import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "EVOLVEXO transformed our vision into reality. Their engineering team delivered a platform that exceeded our expectations in every way—performance, design, and scalability.",
    author: 'Rahul Sharma',
    role: 'CEO, TechVentures',
    avatar: 'RS',
  },
  {
    id: 2,
    quote: "Working with EVOLVEXO was a game-changer for our business. They didn't just build software; they became true partners in our digital transformation journey.",
    author: 'Priya Patel',
    role: 'CTO, InnovateCo',
    avatar: 'PP',
  },
  {
    id: 3,
    quote: "The AI solution EVOLVEXO built for us has automated 70% of our manual processes. The ROI has been incredible, and the team was exceptional to work with.",
    author: 'Amit Kumar',
    role: 'Director, DataFlow Inc',
    avatar: 'AK',
  },
  {
    id: 4,
    quote: "Their attention to detail and commitment to quality is unmatched. EVOLVEXO delivered our platform on time, on budget, and above our quality standards.",
    author: 'Sneha Gupta',
    role: 'Founder, GrowthLabs',
    avatar: 'SG',
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = window.setInterval(nextSlide, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block">
            Client Stories
          </span>
          <h2 className="text-heading-1 text-[#F5F5F2]">Testimonials.</h2>
        </div>

        {/* Testimonial Card */}
        <div ref={cardRef} className="relative">
          <div className="glass-panel rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote
              size={48}
              className="absolute top-8 left-8 text-[#F5F5F2]/5"
              strokeWidth={1}
            />

            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl text-[#F5F5F2] leading-relaxed mb-8 relative z-10">
              "{activeTestimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D9E6FF]/20 to-[#1B1B1B] flex items-center justify-center text-sm font-medium text-[#F5F5F2]">
                {activeTestimonial.avatar}
              </div>
              <div>
                <div className="text-[#F5F5F2] font-medium">{activeTestimonial.author}</div>
                <div className="text-sm text-[#6B6B68]">{activeTestimonial.role}</div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative h-1 w-12 rounded-full bg-[#FFFFFF]/10 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-[#F5F5F2] rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                  }`}
                  style={{
                    animation: index === activeIndex && isAutoPlaying ? 'progress 5s linear' : 'none',
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
