import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, RefreshCw, Bot, TrendingUp, ArrowUpRight } from 'lucide-react';
import { GlowCard } from './ui/GlowCard';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: 1,
    title: 'Launch a Product',
    description: 'From concept to market in record time. We build MVPs, prototypes, and full-scale products.',
    icon: Rocket,
    size: 'large',
    gradient: 'from-[#D9E6FF]/5 via-transparent to-transparent',
    href: '/solutions#launch',
  },
  {
    id: 2,
    title: 'Modernize Operations',
    description: 'Transform legacy systems into modern, scalable architectures.',
    icon: RefreshCw,
    size: 'small',
    gradient: 'from-[#FFC81E]/5 via-transparent to-transparent',
    href: '/solutions#modernize',
  },
  {
    id: 3,
    title: 'Automate Work',
    description: 'AI-powered automation that eliminates repetitive tasks.',
    icon: Bot,
    size: 'small',
    gradient: 'from-[#E87F24]/5 via-transparent to-transparent',
    href: '/solutions#automate',
  },
  {
    id: 4,
    title: 'Digital Growth',
    description: 'Accelerate your business with data-driven digital strategies and measurable outcomes.',
    icon: TrendingUp,
    size: 'large',
    gradient: 'from-[#D9E6FF]/5 via-transparent to-transparent',
    href: '/solutions#growth',
    cta: true,
  },
];

export const FeaturedSolutions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Grid items stagger
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const handleSolutionClick = (href: string) => {
    navigate(href);
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="mb-16">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block">
            What We Deliver
          </span>
          <h2 className="text-heading-1 text-[#F5F5F2]">Featured Solutions.</h2>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            const isLarge = solution.size === 'large';
            
            return (
              <GlowCard
                key={solution.id}
                className={`group relative overflow-hidden p-8 md:p-10 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => handleSolutionClick(solution.href)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full glass-badge flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-[#F5F5F2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#F5F5F2] mb-3 flex items-center gap-3">
                    {solution.title}
                    <ArrowUpRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </h3>

                  {/* Description */}
                  <p className="text-[#B7B7B2] leading-relaxed max-w-lg">
                    {solution.description}
                  </p>

                  {/* CTA for large card */}
                  {solution.cta && (
                    <button className="mt-8 btn-primary">
                      Explore Solutions
                      <ArrowUpRight size={16} />
                    </button>
                  )}
                </div>

                {/* Corner Glow Effect */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
