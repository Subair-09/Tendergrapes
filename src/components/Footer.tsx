import React from 'react';
import { GraduationCap, Facebook, Instagram, Linkedin, Twitter, ArrowUp, Calendar, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="footer-section" className="bg-brand-blue-deep text-gray-300 pt-16 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-red rounded-lg">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div>
                <span className="block font-serif font-bold text-base leading-none text-white tracking-wide">
                  TENDER GRAPES
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] font-sans font-semibold text-brand-red leading-none mt-1">
                  Schools Lagos
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 font-sans leading-relaxed pt-2">
              An elite educational institution in Maryland, Ikeja, Lagos, dedicated to raising creative, 
              spiritually balanced, and intellectually brilliant global future leaders.
            </p>

            {/* Social media connections */}
            <div className="flex items-center gap-3 pt-3">
              <a
                id="social-fb"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-red hover:text-white transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                id="social-ig"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-red hover:text-white transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                id="social-li"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-red hover:text-white transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                id="social-tw"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-red hover:text-white transition-all flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'About Overview', href: '#about' },
                { label: 'Why Tender Grapes', href: '#why-choose' },
                { label: 'School Levels & Age', href: '#school-levels' },
                { label: 'High-Tech Facilities', href: '#facilities' },
                { label: 'Campus Media Gallery', href: '#gallery' },
                { label: 'Inquire admissions', href: '#admissions' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    id={`footer-nav-link-${i}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-red transition-colors font-sans flex items-center gap-1.5"
                  >
                    <span className="text-brand-red">•</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Admissions */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Admissions Portal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  id="footer-adm-portal"
                  href="#admissions"
                  onClick={(e) => handleLinkClick(e, '#admissions')}
                  className="hover:text-brand-red transition-colors font-sans block font-semibold text-brand-blue"
                >
                  Apply Online for 2026/27
                </a>
              </li>
              <li>
                <a
                  id="footer-brochure"
                  href="#admissions"
                  onClick={(e) => handleLinkClick(e, '#admissions')}
                  className="hover:text-brand-red transition-colors font-sans block"
                >
                  Download Prospectus PDF
                </a>
              </li>
              <li>
                <span className="text-gray-400 block">Entrance Evaluation Timelines</span>
              </li>
              <li className="flex items-center gap-2 text-[11px] text-gray-400 mt-1">
                <Calendar size={12} className="text-brand-red" />
                <span>Exams: Saturday, Aug 8, 2026</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinate */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Contact Information
            </h4>
            <p className="text-xs text-gray-400 leading-normal">
              12, Shonny Highway, Shonibare Estate, Maryland, Ikeja, Lagos, Nigeria.
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a
                id="footer-call"
                href="tel:+2348123456789"
                className="flex items-center gap-1.5 hover:text-brand-red transition-colors"
              >
                <Phone size={12} className="text-brand-red" />
                <span>+234 812 345 6789</span>
              </a>
              <span className="block text-gray-500 text-[11px]">admissions@tendergrapesschools.com</span>
            </div>
          </div>

        </div>

        {/* Bottom block */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Tender Grapes Schools Lagos. All Rights Reserved. Designed for Excellence.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Guidelines</span>
            <span className="hover:text-gray-400 cursor-pointer text-brand-blue">Terms of Admission</span>
            
            <button
              id="footer-totop-btn"
              onClick={handleScrollToTop}
              className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-brand-red hover:text-white transition-all flex items-center justify-center gap-1 cursor-pointer"
              aria-label="Back to Top"
            >
              <span>To Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
