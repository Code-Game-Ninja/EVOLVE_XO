import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from './ui/resizable-navbar';

const navItems = [
  { name: 'Services', link: '/services' },
  { name: 'Solutions', link: '/solutions' },
  { name: 'Work', link: '/work' },
  { name: 'About', link: '/about' },
  { name: 'Insights', link: '/insights' },
  { name: 'Contact', link: '/contact' },
];

const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center gap-0 font-bold text-xl tracking-tight">
      <span className="text-[#F5F5F2]">EVOLVE</span>
      <span className="text-[#F5F5F2]/40">XO</span>
    </NavLink>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (link: string) => {
    setIsMobileMenuOpen(false);
    navigate(link);
  };

  return (
    <ResizableNavbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Logo />
        <NavItems
          items={navItems}
          className="text-[#B7B7B2] hover:text-[#F5F5F2]"
          onItemClick={() => {}}
        />
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => navigate('/contact')}
            className="btn-primary text-xs py-2 px-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Project
            <ArrowUpRight size={14} />
          </motion.button>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-[#121212] border border-white/10"
        >
          {navItems.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={() => handleNavClick(item.link)}
              className={`block text-left text-lg font-medium transition-colors ${
                location.pathname === item.link
                  ? 'text-[#F5F5F2]'
                  : 'text-[#6B6B68] hover:text-[#F5F5F2]'
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="flex w-full flex-col gap-4 mt-6 pt-6 border-t border-white/10">
            <motion.button
              onClick={() => handleNavClick('/contact')}
              className="btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
              <ArrowUpRight size={16} />
            </motion.button>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};

export default Navbar;
