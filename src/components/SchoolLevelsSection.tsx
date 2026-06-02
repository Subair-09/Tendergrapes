import { Baby, Smile, GraduationCap, Compass, Calendar, ArrowUpRight, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { schoolLevels } from '../schoolData';

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Baby,
  Smile,
  GraduationCap,
  Compass
};

export default function SchoolLevelsSection() {
  const [activeLevelId, setActiveLevelId] = useState<string>('primary');

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#admissions');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="school-levels" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-sm font-extrabold text-brand-red uppercase tracking-widest font-sans">
            Our Learning Pathways
          </span>
          <h2 className="font-serif font-extrabold text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Academic Levels Tailored for Every Developmental Stage
          </h2>
          <div className="h-1 w-20 bg-brand-red rounded mx-auto" />
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            From the loving security of our creche to the intellectual horizons of our secondary college, 
            we map optimal learning methods to every milestone.
          </p>
        </div>

        {/* Level Toggle Tabs for Mobile/Desktop */}
        <div className="flex flex-wrap justify-center gap-3">
          {schoolLevels.map((lvl) => {
            const Icon = iconMap[lvl.iconName] || GraduationCap;
            const isActive = activeLevelId === lvl.id;
            return (
              <button
                key={lvl.id}
                id={`lvl-tab-${lvl.id}`}
                onClick={() => setActiveLevelId(lvl.id)}
                className={`flex items-center gap-2.5 py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider font-sans transition-all cursor-pointer shadow-sm border border-black/5 ${
                  isActive
                    ? 'bg-brand-blue-dark text-white border-b-3 border-brand-red shadow-lg shadow-brand-blue-dark/10'
                    : 'bg-white text-brand-blue-dark border-b-3 border-brand-blue hover:border-brand-red hover:bg-brand-blue/10'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-brand-blue' : 'text-brand-red'} />
                <span>{lvl.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel showing selected Level detail */}
        <AnimatePresence mode="wait">
          {schoolLevels.map((lvl) => {
            if (lvl.id !== activeLevelId) return null;
            const Icon = iconMap[lvl.iconName] || GraduationCap;

            return (
              <motion.div
                key={lvl.id}
                id={`level-panel-${lvl.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid lg:grid-cols-12 gap-8 items-stretch pt-4"
              >
                {/* Left Visual Column */}
                <div className="lg:col-span-5 relative flex flex-col justify-between">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-square lg:aspect-auto lg:h-[450px] bg-brand-gray">
                    <img
                      src={lvl.image}
                      alt={lvl.name}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white flex justify-between items-end">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-red text-white text-[10px] font-extrabold tracking-wider rounded uppercase">
                          <Calendar size={10} />
                          Age: {lvl.ageRange}
                        </span>
                        <h4 className="font-serif font-bold text-lg mt-1.5">{lvl.name}</h4>
                      </div>
                      <span className="p-2.5 bg-white/25 backdrop-blur-md rounded-full text-white">
                        <Icon size={18} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Curricula Column */}
                <div className="lg:col-span-7 bg-brand-gray rounded-2xl p-6.5 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-brand-red uppercase tracking-wide">
                        Core Academic Overview
                      </span>
                      <h3 className="font-serif font-extrabold text-brand-blue-dark text-2xl sm:text-3xl">
                        Nurturing with Purpose
                      </h3>
                      <p className="text-sm text-gray-600 font-sans leading-relaxed">
                        {lvl.description}
                      </p>
                    </div>

                    <div className="space-y-3.5 pt-2">
                      <h4 className="font-sans font-bold text-sm text-brand-blue-dark tracking-wide uppercase">
                        Program Highlights & Curricula Focus:
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-3.5">
                        {lvl.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-xs text-gray-500 font-sans leading-relaxed"
                          >
                            <CheckCircle size={16} className="text-brand-red shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">CLASSES FILL UP RAPIDLY</p>
                      <p className="text-xs text-brand-blue-dark font-medium font-sans">
                        Applying early guarantees a placement consultation with the principal.
                      </p>
                    </div>
                    <button
                      id="lvl-cta-inquire"
                      onClick={handleScrollToContact}
                      className="bg-brand-red hover:bg-brand-red-hover text-white py-3 px-6.5 rounded-xl font-bold tracking-wide text-xs transition-colors shadow-md shadow-brand-red/10 cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Inquire for Admission</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
}
