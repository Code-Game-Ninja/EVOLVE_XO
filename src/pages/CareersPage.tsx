import { useState } from 'react';
import { ChevronDown, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SplitText } from '../components/ui/SplitText';
import { GlowCard } from '../components/ui/GlowCard';
import { MagneticButton } from '../components/ui/MagneticButton';

const roles = [
  {
    id: 1,
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote / Kanpur',
    type: 'Full-time',
    description: 'Lead the development of scalable web applications using modern technologies. Architect solutions, mentor junior developers, and drive technical excellence.',
    requirements: [
      '5+ years of experience in full-stack development',
      'Expert in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/GCP/Azure)',
      'Strong understanding of system design and architecture'
    ]
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote / Kanpur',
    type: 'Full-time',
    description: 'Build intelligent systems that solve real business problems. Work on NLP, computer vision, and predictive models that drive client value.',
    requirements: [
      '3+ years of ML engineering experience',
      'Strong Python skills and ML framework expertise',
      'Experience deploying models to production',
      'Knowledge of MLOps best practices'
    ]
  },
  {
    id: 3,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / Kanpur',
    type: 'Full-time',
    description: 'Create beautiful, intuitive interfaces for web and mobile applications. Lead design systems and ensure consistent user experiences.',
    requirements: [
      '4+ years of product design experience',
      'Proficiency in Figma and design systems',
      'Strong portfolio demonstrating UX/UI work',
      'Experience working with engineering teams'
    ]
  },
  {
    id: 4,
    title: 'Growth Marketing Manager',
    department: 'Marketing',
    location: 'Remote / Kanpur',
    type: 'Full-time',
    description: 'Drive client acquisition and brand growth through data-driven marketing strategies. Manage campaigns across multiple channels.',
    requirements: [
      '3+ years of B2B marketing experience',
      'Expertise in digital marketing channels',
      'Strong analytical and data skills',
      'Experience with marketing automation tools'
    ]
  }
];

const benefits = [
  { title: 'Competitive Salary', description: 'Above-market compensation with regular reviews' },
  { title: 'Remote-First', description: 'Work from anywhere with flexible hours' },
  { title: 'Health Benefits', description: 'Comprehensive health coverage for you and family' },
  { title: 'Learning Budget', description: 'Annual budget for courses, books, and conferences' },
  { title: 'Paid Time Off', description: 'Generous vacation policy plus paid holidays' },
  { title: 'Equity Options', description: 'Stock options for long-term team members' }
];

export const CareersPage = () => {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);
  const [appliedRole, setAppliedRole] = useState<number | null>(null);

  const toggleRole = (id: number) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  const handleApply = (id: number) => {
    setAppliedRole(id);
    setTimeout(() => setAppliedRole(null), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs text-[#6B6B68] uppercase tracking-[0.3em] mb-6 block">
            Join Our Team
          </span>
          <h1 className="text-display text-[#F5F5F2] mb-6">
            <SplitText text="Join the Team." scrollTrigger />
          </h1>
          <p className="text-xl text-[#B7B7B2] max-w-2xl mx-auto">
            Build the future of digital products with a team that values excellence, creativity, and impact.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-6 lg:px-12 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-[#F5F5F2] mb-4">Why Work With Us</h2>
            <p className="text-[#B7B7B2]">A culture built on trust, growth, and meaningful work.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <GlowCard className="p-8 text-center">
              <h3 className="text-lg font-semibold text-[#F5F5F2] mb-3">Impact-Driven</h3>
              <p className="text-sm text-[#B7B7B2]">Work on projects that matter. See your code in production, helping real businesses grow.</p>
            </GlowCard>
            <GlowCard className="p-8 text-center">
              <h3 className="text-lg font-semibold text-[#F5F5F2] mb-3">Continuous Learning</h3>
              <p className="text-sm text-[#B7B7B2]">Stay at the cutting edge. Budget for learning, mentorship, and growth opportunities.</p>
            </GlowCard>
            <GlowCard className="p-8 text-center">
              <h3 className="text-lg font-semibold text-[#F5F5F2] mb-3">Autonomy & Trust</h3>
              <p className="text-sm text-[#B7B7B2]">We hire smart people and let them work. Flexible schedules, remote-first, results-oriented.</p>
            </GlowCard>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <CheckCircle2 size={20} className="text-[#D9E6FF] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-[#F5F5F2] font-medium mb-1">{benefit.title}</h4>
                  <p className="text-sm text-[#6B6B68]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-6 lg:px-12" id="roles">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-[#F5F5F2] mb-4">Open Positions</h2>
            <p className="text-[#B7B7B2]">Join our growing team. All positions are remote-friendly.</p>
          </div>

          <div className="space-y-4">
            {roles.map((role) => (
              <GlowCard key={role.id} className="overflow-hidden">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleRole(role.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[#F5F5F2] mb-2">{role.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B6B68]">
                        <span className="text-[#D9E6FF]">{role.department}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-[#6B6B68] transition-transform ${
                        expandedRole === role.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {expandedRole === role.id && (
                  <div className="px-6 pb-6 border-t border-[#FFFFFF]/5 pt-6">
                    <p className="text-[#B7B7B2] mb-6">{role.description}</p>
                    
                    <h4 className="text-sm font-medium text-[#F5F5F2] uppercase tracking-wider mb-4">
                      Requirements
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#B7B7B2]">
                          <span className="text-[#D9E6FF] mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>

                    {appliedRole === role.id ? (
                      <div className="flex items-center gap-2 text-[#22c55e]">
                        <CheckCircle2 size={20} />
                        <span>Application recorded! We'll be in touch soon.</span>
                      </div>
                    ) : (
                      <MagneticButton>
                        <button
                          onClick={() => handleApply(role.id)}
                          className="btn-primary"
                        >
                          Apply Now
                          <ArrowRight size={16} />
                        </button>
                      </MagneticButton>
                    )}
                  </div>
                )}
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
