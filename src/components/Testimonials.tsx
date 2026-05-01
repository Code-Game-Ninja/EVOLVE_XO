import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote: "EVOLVEXO transformed our vision into reality. Their engineering team delivered a platform that exceeded our expectations in every way—performance, design, and scalability.",
    author: 'Rahul Sharma',
    role: 'CEO, TechVentures',
    avatar: 'RS',
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with EVOLVEXO was a game-changer for our business. They didn't just build software; they became true partners in our digital transformation journey.",
    author: 'Priya Patel',
    role: 'CTO, InnovateCo',
    avatar: 'PP',
    rating: 5,
  },
  {
    id: 3,
    quote: "The AI solution EVOLVEXO built for us has automated 70% of our manual processes. The ROI has been incredible, and the team was exceptional to work with.",
    author: 'Amit Kumar',
    role: 'Director, DataFlow Inc',
    avatar: 'AK',
    rating: 5,
  },
  {
    id: 4,
    quote: "Their attention to detail and commitment to quality is unmatched. EVOLVEXO delivered our platform on time, on budget, and above our quality standards.",
    author: 'Sneha Gupta',
    role: 'Founder, GrowthLabs',
    avatar: 'SG',
    rating: 5,
  },
  {
    id: 5,
    quote: "From concept to launch, EVOLVEXO demonstrated exceptional technical expertise and creative problem-solving. Our new platform has increased conversions by 150%.",
    author: 'Vikram Mehta',
    role: 'CMO, RetailMax',
    avatar: 'VM',
    rating: 5,
  },
  {
    id: 6,
    quote: "The team's ability to understand complex requirements and translate them into elegant solutions is remarkable. Highly recommend for any digital project.",
    author: 'Ananya Reddy',
    role: 'Product Lead, HealthTrack',
    avatar: 'AR',
    rating: 5,
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const content = marquee.innerHTML;
      marquee.innerHTML = content + content + content; // Triple for seamless loop

      const animation = gsap.to(marquee, {
        x: '-33.333%',
        duration: 60,
        ease: 'none',
        repeat: -1
      });

      // Pause on hover
      const handleMouseEnter = () => animation.pause();
      const handleMouseLeave = () => animation.play();

      marquee.addEventListener('mouseenter', handleMouseEnter);
      marquee.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        marquee.removeEventListener('mouseenter', handleMouseEnter);
        marquee.removeEventListener('mouseleave', handleMouseLeave);
        animation.kill();
      };
    }
  }, []);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[320px] sm:w-[400px] lg:w-[450px] p-4 sm:p-6 mx-2 sm:mx-4">
      <div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full hover:border-[#D9E6FF]/20 transition-all duration-300 group">
        {/* Stars */}
        <div className="flex gap-1 mb-3 sm:mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} className="sm:w-4 sm:h-4 text-[#FFC81E] fill-[#FFC81E]" />
          ))}
        </div>

        {/* Quote Icon */}
        <Quote
          size={24}
          className="sm:w-8 sm:h-8 text-[#F5F5F2]/5 mb-3 sm:mb-4"
          strokeWidth={1}
        />

        {/* Quote Text */}
        <blockquote className="text-sm sm:text-lg text-[#F5F5F2] leading-relaxed mb-4 sm:mb-6 relative z-10">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#FFFFFF]/10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#D9E6FF]/20 to-[#1B1B1B] flex items-center justify-center text-xs sm:text-sm font-medium text-[#F5F5F2]">
            {testimonial.avatar}
          </div>
          <div>
            <div className="text-sm sm:text-base text-[#F5F5F2] font-medium">{testimonial.author}</div>
            <div className="text-xs sm:text-sm text-[#6B6B68]">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[#0A0A0A]">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block"
        >
          Client Stories
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-heading-1 text-[#F5F5F2] mb-3 sm:mb-4"
        >
          Loved by Teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-[#B7B7B2] max-w-2xl mx-auto px-4"
        >
          Don't just take our word for it — hear from the teams we've helped
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div
          ref={marqueeRef}
          className="flex"
          style={{ width: 'fit-content' }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-12 px-4 sm:px-6"
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {testimonials.slice(0, 4).map((t, i) => (
              <div
                key={i}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#D9E6FF]/30 to-[#1B1B1B] flex items-center justify-center text-xs font-medium text-[#F5F5F2] border-2 border-[#0A0A0A]"
              >
                {t.avatar}
              </div>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-[#6B6B68]">+50 more</span>
        </div>
        <div className="text-xs sm:text-sm text-[#B7B7B2]">
          <span className="text-[#FFC81E] font-bold">4.9/5</span> average rating
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
