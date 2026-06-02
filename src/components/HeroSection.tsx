import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Sparkles, PhoneCall, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { value: '100%', label: 'WASSCE Pass Rate', icon: BookOpen },
  { value: '100%', label: 'Secure & Shielded Campus', icon: ShieldCheck },
  { value: '15+', label: 'Years Educating Trailblazers', icon: Sparkles },
];

export default function HeroSection() {
  const handleScrollToAdmissions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const admissionsSection = document.querySelector('#admissions');
    if (admissionsSection) {
      admissionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const whatsappUrl = 'https://wa.me/2348123456789?text=Hello%20Tender%20Grapes%20Schools%2C%20I%20am%20inquiring%20about%20admissions%20for%20my%20child.';

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden bg-brand-blue-deep"
    >
      {/* Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://imgur.com/dIyyTom.png"
          alt="Happy students at school"
          className="w-full h-full object-cover object-center opacity-35 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        {/* Modern double-gradient layer: school deep blue (#1E3A52) turning into school red (#E53935) */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-deep via-brand-blue-deep/90 to-brand-red/10 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-blue-deep to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Tag Badge */}
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-brand-blue rounded-full text-xs font-semibold tracking-wide uppercase"
            >
              <Sparkles size={12} className="text-brand-red animate-pulse" />
              <span>Admissions Open for September 2026</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight"
            >
              Raising Future Leaders Through <span className="text-brand-blue border-b-2 border-brand-red/60 pb-1">Excellence</span> in Education
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              id="hero-subheadline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 font-sans text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
            >
              Providing quality education in a safe, nurturing, and inspiring learning environment. Instilling high academics, strong values, and leadership paths across Creche, Nursery, Primary, and College.
            </motion.p>

            {/* CTAs */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                id="hero-cta-apply"
                onClick={handleScrollToAdmissions}
                className="bg-brand-red hover:bg-brand-red-hover text-white py-3.5 px-7 rounded-xl text-sm font-bold tracking-wider hover:shadow-lg hover:shadow-brand-red/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                id="hero-cta-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/5 border-2 border-white/30 hover:border-white/50 text-white py-3 px-7 rounded-xl text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={16} className="text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Premium Stat Cards */}
            <motion.div
              id="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
            >
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <IconComponent className="text-brand-red" size={16} />
                      <span className="font-sans font-bold text-lg sm:text-2xl text-white">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-medium font-sans leading-tight">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Hero Right Visual Column - Floats smoothly */}
          <motion.div
            id="hero-right-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Colored Backdrops mimicking school crest / shield colors */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-brand-blue/10 rounded-2xl -rotate-3 z-0" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-red/10 rounded-2xl rotate-3 z-0" />

              {/* Main Rounded Image */}
              <div className="relative border-4 border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[4/5]">
                <img
                  src="https://imgur.com/tsAHP4s.png"
                  alt="Young student smiling in Nigerian school uniform"
                  className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-500 rounded-xl"
                  referrerPolicy="no-referrer"
                />
                {/* School Shield Motif Stamp Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md py-3 px-4 rounded-xl flex items-center gap-3 shadow-md">
                  <div className="p-1.5 bg-brand-blue-dark text-white rounded-lg">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-sans leading-none">SCHOOL VALUES</p>
                    <p className="text-xs text-brand-blue-dark font-extrabold font-sans mt-0.5">Integrity & Honor</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
