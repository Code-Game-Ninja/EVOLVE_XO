import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { LogoCloud } from '../components/LogoCloud';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { FeaturedSolutions } from '../components/FeaturedSolutions';
import { Projects } from '../components/Projects';
import { WhyEvolvexo } from '../components/WhyEvolvexo';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Intro />
      <LogoCloud />
      <Services />
      <Process />
      <FeaturedSolutions />
      <Projects />
      <WhyEvolvexo />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
