import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { GlowCard } from './ui/GlowCard';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    id: 1,
    name: 'NeuralFlow AI',
    category: 'AI SaaS',
    description: 'Enterprise AI platform for automated workflow optimization',
    gradient: 'from-[#1a1a2e] to-[#16213e]',
    tags: ['React', 'Python', 'OpenAI'],
  },
  {
    id: 2,
    name: 'FinEdge Platform',
    category: 'Fintech',
    description: 'Real-time financial analytics dashboard for institutions',
    gradient: 'from-[#0f3460] to-[#16213e]',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
];

const marqueeProjects = [
  { name: 'CloudSync', category: 'SaaS' },
  { name: 'RetailMax', category: 'E-commerce' },
  { name: 'HealthTrack', category: 'Healthcare' },
  { name: 'EduLearn', category: 'EdTech' },
  { name: 'LogisticsPro', category: 'Logistics' },
  { name: 'MediaHub', category: 'Media' },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
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

    // Featured cards animation
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const handleProjectClick = (id: number) => {
    navigate(`/work/${id}`);
  };

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="mb-16">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block">
            Selected Work
          </span>
          <h2 className="text-heading-1 text-[#F5F5F2]">Projects.</h2>
        </div>

        {/* Featured Projects Grid */}
        <div ref={featuredRef} className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project) => (
            <GlowCard
              key={project.id}
              className="group relative overflow-hidden cursor-pointer h-[400px] md:h-[500px]"
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                {/* Category */}
                <span className="text-xs text-[#B7B7B2] uppercase tracking-[0.2em] mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-[#F5F5F2] mb-3">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-[#B7B7B2] mb-4 max-w-md">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 glass-badge rounded-full text-[#B7B7B2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#F5F5F2] font-medium group/link">
                  <span className="text-sm">View Case Study</span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* Marquee Row */}
      <div className="marquee-container py-8 border-y border-[#FFFFFF]/5">
        <div className="flex animate-marquee">
          {[...marqueeProjects, ...marqueeProjects].map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 glass-panel rounded-xl px-6 py-4 min-w-[200px] hover:border-[#FFFFFF]/20 transition-colors cursor-pointer"
              onClick={() => navigate('/work')}
            >
              <div className="text-sm font-medium text-[#F5F5F2]">{project.name}</div>
              <div className="text-xs text-[#6B6B68] uppercase tracking-wider mt-1">
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Marquee Row (Reverse Direction) */}
      <div className="marquee-container py-8 border-b border-[#FFFFFF]/5">
        <div className="flex animate-marquee-reverse">
          {[...marqueeProjects.slice().reverse(), ...marqueeProjects.slice().reverse()].map(
            (project, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 glass-panel rounded-xl px-6 py-4 min-w-[200px] hover:border-[#FFFFFF]/20 transition-colors cursor-pointer"
                onClick={() => navigate('/work')}
              >
                <div className="text-sm font-medium text-[#F5F5F2]">{project.name}</div>
                <div className="text-xs text-[#6B6B68] uppercase tracking-wider mt-1">
                  {project.category}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
