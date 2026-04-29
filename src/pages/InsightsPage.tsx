import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Clock } from 'lucide-react';
import { SplitText } from '../components/ui/SplitText';
import { GlowCard } from '../components/ui/GlowCard';

gsap.registerPlugin(ScrollTrigger);

const insights = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'How artificial intelligence is reshaping business operations and what leaders need to know to stay competitive.',
    category: 'AI & Technology',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Building Scalable SaaS Architectures',
    excerpt: 'Key architectural patterns and best practices for creating SaaS platforms that grow with your business.',
    category: 'Engineering',
    date: 'Jan 10, 2024',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 3,
    title: 'Digital Transformation Playbook',
    excerpt: 'A comprehensive guide to modernizing legacy systems and processes for the digital age.',
    category: 'Strategy',
    date: 'Jan 5, 2024',
    readTime: '10 min read',
    featured: false
  },
  {
    id: 4,
    title: 'The Rise of No-Code and Low-Code',
    excerpt: 'Exploring the impact of visual development tools on software engineering and business agility.',
    category: 'Technology',
    date: 'Dec 28, 2023',
    readTime: '5 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Data-Driven Marketing Strategies',
    excerpt: 'How to leverage analytics and automation to maximize marketing ROI in competitive markets.',
    category: 'Marketing',
    date: 'Dec 20, 2023',
    readTime: '7 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Security Best Practices for Modern Web Apps',
    excerpt: 'Essential security considerations and implementation strategies for web applications.',
    category: 'Engineering',
    date: 'Dec 15, 2023',
    readTime: '6 min read',
    featured: false
  }
];

const categories = ['All', 'AI & Technology', 'Engineering', 'Strategy', 'Marketing'];

export const InsightsPage = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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

  const featuredInsight = insights.find(i => i.featured);
  const regularInsights = insights.filter(i => !i.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block">
            Insights & Perspectives
          </span>
          <h1 className="text-display text-[#F5F5F2] mb-6">
            <SplitText text="Insights." scrollTrigger />
          </h1>
          <p className="text-xl text-[#B7B7B2] max-w-2xl">
            Thoughts on technology, design, and building digital products that matter.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2 rounded-full text-sm font-medium glass-badge text-[#B7B7B2] hover:text-[#F5F5F2] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredInsight && (
        <section className="px-6 lg:px-12 mb-16">
          <div className="max-w-7xl mx-auto">
            <GlowCard className="group cursor-pointer overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl" />
                <div className="p-8 lg:py-12 lg:pr-12">
                  <span className="text-xs text-[#D9E6FF] uppercase tracking-[0.2em] mb-4 block">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F2] mb-4 group-hover:text-[#D9E6FF] transition-colors">
                    {featuredInsight.title}
                  </h2>
                  <p className="text-[#B7B7B2] mb-6">
                    {featuredInsight.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[#6B6B68]">
                    <span>{featuredInsight.category}</span>
                    <span>•</span>
                    <span>{featuredInsight.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredInsight.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularInsights.map((insight) => (
              <GlowCard
                key={insight.id}
                className="group cursor-pointer p-6 hover:border-[#FFFFFF]/15 transition-colors"
              >
                <span className="text-xs text-[#D9E6FF] uppercase tracking-[0.2em] mb-4 block">
                  {insight.category}
                </span>
                <h3 className="text-xl font-semibold text-[#F5F5F2] mb-3 group-hover:text-[#D9E6FF] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-[#B7B7B2] mb-6">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-[#6B6B68]">
                    <span>{insight.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {insight.readTime}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[#6B6B68] group-hover:text-[#F5F5F2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
