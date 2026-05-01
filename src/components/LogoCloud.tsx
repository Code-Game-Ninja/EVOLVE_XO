import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: 'TechVentures', initials: 'TV' },
  { name: 'InnovateCo', initials: 'IC' },
  { name: 'DataFlow Inc', initials: 'DF' },
  { name: 'GrowthLabs', initials: 'GL' },
  { name: 'CloudSync', initials: 'CS' },
  { name: 'RetailMax', initials: 'RM' },
  { name: 'HealthTrack', initials: 'HT' },
  { name: 'EduLearn', initials: 'EL' },
  { name: 'LogisticsPro', initials: 'LP' },
  { name: 'MediaHub', initials: 'MH' },
  { name: 'FinanceAI', initials: 'FA' },
  { name: 'SmartRetail', initials: 'SR' },
];

export const LogoCloud = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const content = marquee.innerHTML;
      marquee.innerHTML = content + content;

      gsap.to(marquee, {
        x: '-50%',
        duration: 30,
        ease: 'none',
        repeat: -1
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 overflow-hidden bg-[#0A0A0A]">
      <div className="text-center mb-8 sm:mb-12 px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs text-[#6B6B68] uppercase tracking-[0.3em]"
        >
          Trusted by Innovative Companies
        </motion.span>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div
          ref={marqueeRef}
          className="flex gap-4 sm:gap-8 items-center"
          style={{ width: 'fit-content' }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-32 sm:w-40 h-16 sm:h-20 rounded-lg sm:rounded-xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 cursor-pointer hover:border-[#D9E6FF]/30 hover:bg-[#FFFFFF]/10 transition-all duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-gradient-to-br from-[#D9E6FF]/20 to-[#FFC81E]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs sm:text-sm font-bold text-[#F5F5F2]">{client.initials}</span>
                </div>
                <span className="text-xs sm:text-sm text-[#B7B7B2] group-hover:text-[#F5F5F2] transition-colors whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10 sm:mt-16 px-4 sm:px-6"
      >
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#F5F5F2]">50+</div>
          <div className="text-xs text-[#6B6B68] uppercase tracking-wider mt-1">Clients</div>
        </div>
        <div className="w-px bg-[#FFFFFF]/10 hidden sm:block" />
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#F5F5F2]">12</div>
          <div className="text-xs text-[#6B6B68] uppercase tracking-wider mt-1">Industries</div>
        </div>
        <div className="w-px bg-[#FFFFFF]/10 hidden sm:block" />
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#F5F5F2]">98%</div>
          <div className="text-xs text-[#6B6B68] uppercase tracking-wider mt-1">Satisfaction</div>
        </div>
      </motion.div>
    </section>
  );
};

export default LogoCloud;
