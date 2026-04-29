import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Noise } from './components/ui/Noise';

// Pages
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { InsightsPage } from './pages/InsightsPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { LegalPage } from './pages/LegalPage';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
};

// Lenis smooth scroll wrapper
const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenisRef.current.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisRef.current?.destroy();
      gsap.ticker.remove((time) => {
        lenisRef.current?.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
};

// Main app content
const AppContent = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#0A0A0A]">
      {/* Global Noise Overlay */}
      <Noise />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content with Page Transitions - margin-bottom reveals footer */}
      <main 
        className="relative z-10 bg-[#0A0A0A]"
        style={{ 
          marginBottom: 'var(--footer-height, 600px)',
          boxShadow: '0 50px 100px rgba(0,0,0,0.5)' // Shadow creates depth over footer
        }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } 
            />
            <Route 
              path="/services" 
              element={
                <PageTransition>
                  <ServicesPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/solutions" 
              element={
                <PageTransition>
                  <SolutionsPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/work" 
              element={
                <PageTransition>
                  <WorkPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/work/:id" 
              element={
                <PageTransition>
                  <ProjectDetailPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/about" 
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/insights" 
              element={
                <PageTransition>
                  <InsightsPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/careers" 
              element={
                <PageTransition>
                  <CareersPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <PageTransition>
                  <PrivacyPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/legal" 
              element={
                <PageTransition>
                  <LegalPage />
                </PageTransition>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <SmoothScroll>
        <ScrollToTop />
        <AppContent />
      </SmoothScroll>
    </Router>
  );
}

export default App;
