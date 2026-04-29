import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Zap, Target, Users, Heart, Star, Award, Rocket, TrendingUp } from 'lucide-react';
import { SplitText } from '../components/ui/SplitText';
import { GlowCard } from '../components/ui/GlowCard';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We obsess over quality in every line of code, every pixel, every interaction.'
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'We measure success by the business outcomes we help our clients achieve.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We become an extension of your team, invested in your long-term success.'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We build trust through transparency, honest communication, and ethical practices.'
  }
];

const milestones = [
  { year: '2020', title: 'Founded', description: 'EVOLVEXO started with a mission to build systems that evolve.' },
  { year: '2021', title: 'First 10 Projects', description: 'Completed our first 10 client projects with 100% satisfaction.' },
  { year: '2022', title: 'AI Division', description: 'Launched our AI/ML practice to meet growing demand.' },
  { year: '2023', title: 'Global Reach', description: 'Expanded to serve clients across 12 countries.' },
  { year: '2024', title: '30+ Projects', description: 'Crossed 30+ successful project deliveries.' }
];

export const AboutPage = () => {
  const manifestoRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const manifestoText = "We believe technology should adapt to business, not the other way around. That's why we build systems that evolve—scalable, intelligent, and ready for whatever comes next.";
  const words = manifestoText.split(' ');

  useEffect(() => {
    // Word reveal for manifesto
    if (wordsRef.current.length > 0) {
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.2 },
        {
          opacity: 1,
          duration: 0.3,
          stagger: 0.03,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: manifestoRef.current,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );
    }

    // Timeline animation
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.children,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero with Animated Background */}
      <section className="pt-32 pb-16 px-6 lg:px-12 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-40 right-20 w-64 h-64 bg-[#D9E6FF]/5 rounded-full blur-3xl"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-48 h-48 bg-[#FFC81E]/5 rounded-full blur-3xl"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block"
          >
            Who We Are
          </motion.span>
          <h1 className="text-display text-[#F5F5F2] mb-6">
            <SplitText text="An engineering-led agency building systems that evolve." scrollTrigger />
          </h1>
          
          {/* Stats Row */}
          <motion.div 
            className="flex flex-wrap gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: Rocket, label: 'Projects Delivered', value: '30+' },
              { icon: Users, label: 'Countries Served', value: '12' },
              { icon: Star, label: 'Client Satisfaction', value: '100%' },
              { icon: Award, label: 'Years Experience', value: '4+' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-3 glass-badge px-5 py-3 rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(217, 230, 255, 0.1)" }}
              >
                <stat.icon size={18} className="text-[#FFC81E]" />
                <span className="text-[#F5F5F2] font-semibold">{stat.value}</span>
                <span className="text-[#6B6B68] text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 px-6 lg:px-12 bg-[#121212]">
        <div className="max-w-4xl mx-auto">
          <div ref={manifestoRef} className="text-2xl md:text-3xl lg:text-4xl font-light text-[#F5F5F2] leading-relaxed">
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
          </div>
        </div>
      </section>

      {/* Values with Enhanced Cards */}
      <section className="py-24 px-6 lg:px-12 relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#D9E6FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block"
            >
              Our Values
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-heading-1 text-[#F5F5F2]"
            >
              What Drives Us.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlowCard className="p-8 group hover:border-[#D9E6FF]/20 transition-all duration-300 cursor-pointer">
                    <motion.div 
                      className="w-14 h-14 rounded-full glass-badge flex items-center justify-center mb-6 group-hover:bg-[#D9E6FF]/10 transition-all"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent size={28} className="text-[#F5F5F2] group-hover:text-[#D9E6FF] transition-colors" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-[#F5F5F2] mb-3 group-hover:text-[#D9E6FF] transition-colors">{value.title}</h3>
                    <p className="text-[#B7B7B2] group-hover:text-[#F5F5F2] transition-colors">{value.description}</p>
                    
                    {/* Hover Indicator */}
                    <motion.div 
                      className="mt-4 flex items-center gap-2 text-[#6B6B68] group-hover:text-[#D9E6FF] transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <TrendingUp size={16} />
                      <span className="text-sm">Core Principle</span>
                    </motion.div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline with Enhanced Animation */}
      <section className="py-24 px-6 lg:px-12 bg-[#121212] relative overflow-hidden">
        {/* Animated Background Line */}
        <motion.div 
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D9E6FF] via-[#FFC81E] to-[#E87F24] md:-translate-x-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ originY: 0 }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block"
            >
              Our Journey
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-heading-1 text-[#F5F5F2]"
            >
              Timeline.
            </motion.h2>
          </div>

          <div ref={timelineRef} className="relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div 
                    className="glass-panel rounded-xl p-6 group hover:border-[#D9E6FF]/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <span className="text-sm font-mono text-[#D9E6FF] block mb-2">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-[#F5F5F2] mb-2 group-hover:text-[#D9E6FF] transition-colors">{milestone.title}</h3>
                    <p className="text-sm text-[#B7B7B2] group-hover:text-[#F5F5F2] transition-colors">{milestone.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot with Pulse */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D9E6FF] md:-translate-x-1/2 z-10 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#D9E6FF]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
