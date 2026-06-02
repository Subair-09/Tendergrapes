import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Levels', href: '#school-levels' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        id="main-navigation-bar"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white shadow-md py-3.5 border-b-2 border-brand-blue"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <motion.a
              id="navbar-logo"
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2.5 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative flex items-center justify-center w-11 h-11 bg-brand-red rounded-xl shadow-lg shadow-brand-red/10 overflow-hidden">
                <GraduationCap className="text-white relative z-10" size={24} />
                <div className="absolute inset-0 bg-brand-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <span className="block font-serif font-bold text-lg leading-none transition-colors duration-300 text-brand-blue-dark text-black mt-0.5">
                  TENDER GRAPES
                </span>
                <span className="block text-[10px] uppercase tracking-[0.25em] font-sans font-semibold text-brand-red leading-none mt-1">
                  Schools Lagos
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans font-medium text-sm transition-all relative py-1.5 text-brand-blue-dark/95 hover:text-brand-red group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                id="cta-nav-call"
                href="tel:+2348123456789"
                className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue-dark hover:text-brand-red transition-colors mr-2"
              >
                <Phone size={14} className="text-brand-red animate-pulse" />
                <span>+234 812 345 6789</span>
              </a>
              <motion.a
                id="cta-nav-apply"
                href="#admissions"
                onClick={(e) => handleLinkClick(e, '#admissions')}
                className="bg-brand-red text-white py-2 px-5 rounded-lg text-sm font-semibold tracking-wide hover:bg-brand-red-hover transition-all shadow-md shadow-brand-red/10"
                whileHover={{ y: -1.5 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
              </motion.a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg lg:hidden transition-colors text-brand-blue-dark hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-30 lg:hidden shadow-2xl p-6 flex flex-col justify-between"
            >
              <div className="pt-14">
                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      id={`mobile-nav-link-${link.label.toLowerCase()}`}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="font-sans font-semibold text-lg text-brand-blue-dark/90 hover:text-brand-red py-1 border-b border-gray-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center font-medium">Tender Grapes Admissions 2026</p>
                <div className="grid grid-cols-1 gap-2.5">
                  <a
                    id="mobile-cta-call"
                    href="tel:+2348123456789"
                    className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-lg text-sm font-semibold text-brand-blue-dark hover:bg-gray-50"
                  >
                    <Phone size={14} className="text-brand-red" />
                    +234 812 345 6789
                  </a>
                  <a
                    id="mobile-cta-apply"
                    href="#admissions"
                    onClick={(e) => handleLinkClick(e, '#admissions')}
                    className="bg-brand-red text-white text-center py-2.5 rounded-lg text-sm font-bold shadow-md shadow-brand-red/10"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
