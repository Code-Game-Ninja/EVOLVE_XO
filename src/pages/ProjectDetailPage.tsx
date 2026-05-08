import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Check, ArrowRight } from 'lucide-react';
import { SplitText } from '../components/ui/SplitText';
import { GlowCard } from '../components/ui/GlowCard';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SEO } from '../components/SEO';

const projects = [
  {
    id: '1',
    name: 'NeuralFlow AI',
    category: 'AI SaaS',
    client: 'Enterprise Tech',
    year: '2024',
    description: 'An enterprise-grade AI platform for automated workflow optimization and intelligent process automation.',
    challenge: 'The client needed to automate complex business processes across multiple departments while maintaining human oversight and ensuring compliance with industry regulations.',
    brief: 'Build an AI-powered platform that can understand, optimize, and automate complex enterprise workflows while integrating with existing systems.',
    deliverables: [
      'AI Workflow Engine',
      'Natural Language Processing Module',
      'Integration APIs',
      'Analytics Dashboard',
      'Compliance Monitoring System'
    ],
    technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL', 'Redis'],
    metrics: [
      { value: '70%', label: 'Process Automation' },
      { value: '40%', label: 'Cost Reduction' },
      { value: '3x', label: 'Efficiency Gain' }
    ],
    gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]'
  },
  {
    id: '2',
    name: 'FinEdge Platform',
    category: 'Fintech',
    client: 'Financial Services',
    year: '2024',
    description: 'Real-time financial analytics dashboard for institutional investors with predictive modeling.',
    challenge: 'Financial institutions struggled with fragmented data sources and the need for real-time insights to make split-second trading decisions.',
    brief: 'Create a unified platform that aggregates multiple data sources and provides AI-powered predictive analytics for investment decisions.',
    deliverables: [
      'Real-time Data Pipeline',
      'Predictive Analytics Engine',
      'Interactive Dashboard',
      'Risk Assessment Module',
      'API Ecosystem'
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'Kafka'],
    metrics: [
      { value: '<50ms', label: 'Data Latency' },
      { value: '99.9%', label: 'Uptime' },
      { value: '2M+', label: 'Daily Transactions' }
    ],
    gradient: 'from-[#0f3460] via-[#16213e] to-[#1a1a2e]'
  },
  {
    id: '3',
    name: 'CloudSync',
    category: 'SaaS',
    client: 'Tech Startup',
    year: '2023',
    description: 'Cloud infrastructure management and monitoring platform for DevOps teams.',
    challenge: 'DevOps teams were spending too much time on routine infrastructure management tasks and struggling with multi-cloud visibility.',
    brief: 'Develop a unified platform for managing cloud infrastructure across multiple providers with automated monitoring and optimization.',
    deliverables: [
      'Multi-cloud Dashboard',
      'Automated Monitoring',
      'Cost Optimization Engine',
      'Alerting System',
      'Resource Scheduler'
    ],
    technologies: ['Vue.js', 'Go', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana'],
    metrics: [
      { value: '35%', label: 'Cost Savings' },
      { value: '100+', label: 'Cloud Resources' },
      { value: '24/7', label: 'Monitoring' }
    ],
    gradient: 'from-[#16213e] via-[#1a1a2e] to-[#0f3460]'
  },
  {
    id: '4',
    name: 'RetailMax',
    category: 'E-commerce',
    client: 'Retail Chain',
    year: '2023',
    description: 'Omnichannel retail platform with AI-powered recommendations and inventory management.',
    challenge: 'A traditional retailer needed to compete with digital-native brands by unifying their online and in-store experiences.',
    brief: 'Build an omnichannel platform that integrates online and physical retail with intelligent inventory and recommendation systems.',
    deliverables: [
      'Unified Commerce Platform',
      'AI Recommendation Engine',
      'Inventory Sync System',
      'Mobile App',
      'POS Integration'
    ],
    technologies: ['Next.js', 'Shopify', 'Python', 'TensorFlow', 'Stripe', 'AWS'],
    metrics: [
      { value: '45%', label: 'Revenue Increase' },
      { value: '3x', label: 'Conversion Rate' },
      { value: '50%', label: 'Inventory Accuracy' }
    ],
    gradient: 'from-[#1a1a2e] via-[#0f3460] to-[#16213e]'
  },
  {
    id: '5',
    name: 'HealthTrack',
    category: 'Healthcare',
    client: 'Medical Group',
    year: '2023',
    description: 'Patient management system with telemedicine integration and health monitoring.',
    challenge: 'Healthcare providers needed a secure, HIPAA-compliant system to manage patient records and enable remote consultations.',
    brief: 'Create a comprehensive healthcare platform combining patient records, telemedicine, and remote monitoring with strict security compliance.',
    deliverables: [
      'Patient Portal',
      'Telemedicine System',
      'EHR Integration',
      'Remote Monitoring',
      'Billing Module'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS', 'HIPAA Compliance'],
    metrics: [
      { value: '10K+', label: 'Patients' },
      { value: '4.8/5', label: 'Patient Rating' },
      { value: '60%', label: 'Reduced Wait Time' }
    ],
    gradient: 'from-[#0f3460] via-[#1a1a2e] to-[#16213e]'
  },
  {
    id: '6',
    name: 'EduLearn',
    category: 'EdTech',
    client: 'Education Startup',
    year: '2022',
    description: 'Interactive learning platform with AI tutoring and personalized learning paths.',
    challenge: 'Students needed personalized learning experiences that adapt to their pace and learning style, with support for remote learning.',
    brief: 'Build an adaptive learning platform that uses AI to personalize education and provide real-time tutoring assistance.',
    deliverables: [
      'Adaptive Learning Engine',
      'AI Tutor Chatbot',
      'Video Learning Platform',
      'Progress Analytics',
      'Collaboration Tools'
    ],
    technologies: ['Next.js', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL', 'WebRTC'],
    metrics: [
      { value: '85%', label: 'Completion Rate' },
      { value: '2.5x', label: 'Learning Speed' },
      { value: '50K+', label: 'Active Learners' }
    ],
    gradient: 'from-[#16213e] via-[#0f3460] to-[#1a1a2e]'
  }
];

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#F5F5F2] mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/work')}
            className="btn-primary"
          >
            <ArrowLeft size={16} />
            Back to Work
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${project.name} | ${project.category} Case Study`}
        description={project.description}
      />
      {/* Hero Header */}
      <section className={`relative pt-32 pb-24 px-6 lg:px-12 bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={() => navigate('/work')}
            className="flex items-center gap-2 text-[#B7B7B2] hover:text-[#F5F5F2] transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Work
          </button>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xs text-[#D9E6FF] uppercase tracking-[0.2em]">{project.category}</span>
            <span className="text-xs text-[#6B6B68]">{project.year}</span>
          </div>

          <h1 className="text-display text-[#F5F5F2] mb-4">
            <SplitText text={project.name} scrollTrigger />
          </h1>

          <p className="text-xl text-[#B7B7B2] max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6 lg:px-12 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {project.metrics.map((metric, index) => (
              <GlowCard key={index} className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#F5F5F2] mb-2">{metric.value}</div>
                <div className="text-sm text-[#6B6B68] uppercase tracking-wider">{metric.label}</div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-heading-2 text-[#F5F5F2] mb-4">The Challenge</h2>
                <p className="text-lg text-[#B7B7B2] leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-heading-2 text-[#F5F5F2] mb-4">Our Approach</h2>
                <p className="text-lg text-[#B7B7B2] leading-relaxed">{project.brief}</p>
              </div>

              <div>
                <h2 className="text-heading-2 text-[#F5F5F2] mb-6">Key Deliverables</h2>
                <ul className="space-y-3">
                  {project.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-[#22c55e]" />
                      </div>
                      <span className="text-[#F5F5F2]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <GlowCard className="p-8">
                <h3 className="text-sm font-medium text-[#F5F5F2] uppercase tracking-[0.2em] mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 glass-badge rounded-full text-sm text-[#B7B7B2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlowCard>

              <div className="glass-panel rounded-2xl p-8">
                <h3 className="text-sm font-medium text-[#F5F5F2] uppercase tracking-[0.2em] mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-[#6B6B68]">Client</span>
                    <span className="text-[#F5F5F2]">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B6B68]">Year</span>
                    <span className="text-[#F5F5F2]">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B6B68]">Category</span>
                    <span className="text-[#F5F5F2]">{project.category}</span>
                  </div>
                </div>
              </div>

              <MagneticButton>
                <span className="btn-primary w-full justify-center text-base py-4">
                  View Live Project
                  <ExternalLink size={18} />
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-1 text-[#F5F5F2] mb-6">
            Ready to build something similar?
          </h2>
          <p className="text-lg text-[#B7B7B2] mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <MagneticButton onClick={() => navigate('/contact')}>
            <span className="btn-primary text-base py-4 px-8">
              Start Your Project
              <ArrowRight size={18} />
            </span>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
