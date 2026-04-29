import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Brain, 
  Code2, 
  Globe, 
  Megaphone, 
  Lightbulb,
  ArrowRight 
} from 'lucide-react';
import { GlowCard } from './ui/GlowCard';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'AI SaaS',
    description: 'Intelligent software solutions that leverage machine learning and automation to transform business operations and decision-making.',
    icon: Brain,
    deliverables: ['AI Strategy Consulting', 'ML Model Development', 'SaaS Platform Architecture', 'API Integration'],
  },
  {
    id: '02',
    title: 'Custom Software',
    description: 'Bespoke software applications engineered to solve complex business challenges and streamline operations at scale.',
    icon: Code2,
    deliverables: ['Enterprise Applications', 'Process Automation', 'Legacy Modernization', 'System Integration'],
  },
  {
    id: '03',
    title: 'Websites & Web Platforms',
    description: 'High-performance web experiences that captivate users and drive measurable business outcomes through superior design and engineering.',
    icon: Globe,
    deliverables: ['Brand Websites', 'E-commerce Platforms', 'Web Applications', 'CMS Solutions'],
  },
  {
    id: '04',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that amplify your brand presence and accelerate growth across digital channels.',
    icon: Megaphone,
    deliverables: ['Growth Strategy', 'Content Marketing', 'SEO & SEM', 'Analytics & Attribution'],
  },
  {
    id: '05',
    title: 'Tech Advisory',
    description: 'Strategic technology consulting to navigate digital transformation and make informed decisions about your technology stack.',
    icon: Lightbulb,
    deliverables: ['Digital Strategy', 'Tech Stack Assessment', 'Architecture Review', 'Team Augmentation'],
  },
];

export const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
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

    // Service list items stagger
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    // Panel content animation on service change
    if (panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeService]);

  const activeServiceData = services[activeService];
  const IconComponent = activeServiceData.icon;

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="mb-16">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-heading-1 text-[#F5F5F2]">Services.</h2>
        </div>

        {/* Services Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Service List */}
          <div ref={listRef} className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-accordion-item py-6 cursor-pointer group transition-all duration-300 ${
                  activeService === index ? 'active pl-6' : 'pl-0 hover:pl-6'
                }`}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-baseline gap-6">
                  <span className={`text-sm font-mono transition-colors duration-300 ${
                    activeService === index ? 'text-[#F5F5F2]' : 'text-[#6B6B68]'
                  }`}>
                    {service.id}
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                    activeService === index ? 'text-[#F5F5F2]' : 'text-[#6B6B68] group-hover:text-[#B7B7B2]'
                  }`}>
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Panel */}
          <div ref={panelRef} className="lg:sticky lg:top-32 h-fit">
            <GlowCard className="p-8 md:p-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-full glass-badge flex items-center justify-center mb-6">
                <IconComponent size={28} className="text-[#F5F5F2]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#F5F5F2] mb-4">
                {activeServiceData.title}
              </h3>

              {/* Description */}
              <p className="text-[#B7B7B2] leading-relaxed mb-8">
                {activeServiceData.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-3">
                {activeServiceData.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D9E6FF]" />
                    <span className="text-sm text-[#B7B7B2]">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-8 text-[#F5F5F2] text-sm font-medium flex items-center gap-2 group hover-underline">
                Learn more
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
