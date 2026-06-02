import React from 'react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function CtaBanner() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-brand-blue-deep text-white relative overflow-hidden">
      {/* Absolute decorative red gradient backdrop to align with uniform colors */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Sparkle icon banner */}
        <motion.div
          id="cta-sparkle-indicator"
          className="mx-auto flex items-center justify-center w-12 h-12 bg-white/10 border border-white/20 text-brand-red rounded-2xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Sparkles size={22} className="animate-pulse" />
        </motion.div>

        {/* Content block */}
        <div className="space-y-4">
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Give Your Child the Best Start in Life
          </h2>
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover a community that inspires active learning, spiritual growth, confidence, 
            and global preparedness. Join the admissions process for the 2026/2027 Academic Session today.
          </p>
        </div>

        {/* Dynamic Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            id="banner-cta-apply"
            onClick={(e) => handleScroll(e, '#admissions')}
            className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold tracking-wider py-4 px-8 rounded-xl shadow-lg shadow-brand-red/15 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="banner-cta-contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:bg-white/5 text-white text-xs sm:text-sm font-bold tracking-wider py-3.5 px-8 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall size={14} className="text-brand-blue" />
            <span>Contact Admissions Team</span>
          </button>
        </div>

        {/* Quality indicator footer */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-[10px] sm:text-xs text-gray-400 font-medium">
          <span className="flex items-center gap-1.5">• WASSCE & British Curricula Standards</span>
          <span className="flex items-center gap-1.5">• Lagos State Approved</span>
          <span className="flex items-center gap-1.5">• Verified Safe Campus Layout</span>
        </div>

      </div>
    </section>
  );
}
