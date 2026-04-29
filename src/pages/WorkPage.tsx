import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../components/ui/SplitText';
import { Terminal } from '../components/ui/terminal';
import { ExpandableCardGrid } from '../components/ui/ExpandableCard';

gsap.registerPlugin(ScrollTrigger);

const filters = ['All', 'AI', 'Software', 'Web', 'Marketing'];

export const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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
        }
      );
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block">
            Selected Projects
          </span>
          <h1 className="text-display text-[#F5F5F2] mb-6">
            <SplitText text="Work." scrollTrigger />
          </h1>
          <p className="text-xl text-[#B7B7B2] max-w-2xl">
            A showcase of our finest work—products we've built that drive real business impact.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#F5F5F2] text-[#0A0A0A]'
                    : 'glass-badge text-[#B7B7B2] hover:text-[#F5F5F2]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Expandable Cards */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <ExpandableCardGrid />
        </div>
      </section>

      {/* Development Process - Terminal */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-4 block">
              How We Build
            </span>
            <h2 className="text-heading-1 text-[#F5F5F2] mb-4">
              Development Workflow
            </h2>
            <p className="text-[#B7B7B2] max-w-xl mx-auto">
              From concept to deployment, our process is transparent and collaborative.
            </p>
          </div>

          <Terminal
            commands={[
              "git clone evolvexo/project-template",
              "npm install && npm run setup",
              "git checkout -b feature/new-capability",
              "npm run build && npm run test",
              "git push origin feature/new-capability",
              "npm run deploy --env=production",
            ]}
            outputs={{
              0: ["Cloning into 'project-template'...", "done."],
              1: ["added 847 packages in 3.2s", "✔ Project initialized"],
              2: ["Switched to a new branch 'feature/new-capability'"],
              3: [
                "✔ Build completed: dist/",
                "✔ 42 tests passed",
                "✔ 0 failures",
              ],
              4: ["remote: Create pull request at", "remote: https://github.com/evolvexo/project/pull/42"],
              5: [
                "✔ Production build verified",
                "✔ Deployed to https://client-project.com",
                "✔ CDN cache invalidated",
              ],
            }}
            username="evolvexo-dev"
            typingSpeed={40}
            delayBetweenCommands={1200}
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
