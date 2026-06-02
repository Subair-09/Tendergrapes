import React from 'react';
import { BookOpen, Monitor, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { facilities } from '../schoolData';

const tagIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  LEARNING: Sparkles,
  EXPLORATION: BookOpen,
  INNOVATION: Monitor,
  FITNESS: Dumbbell,
  SAFETY: ShieldCheck,
};

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-sm font-extrabold text-brand-red uppercase tracking-widest font-sans">
            Our Infrastructure
          </span>
          <h2 className="font-serif font-extrabold text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Premium Facilities Designed for Wholesome Milestones
          </h2>
          <div className="h-1 w-20 bg-brand-red rounded mx-auto" />
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            Every square foot of our campus is engineered to ensure children’s total safety, mental focus, 
            and physical development.
          </p>
        </div>

        {/* Facilities Bento-Style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = tagIcons[fac.tag] || Sparkles;
            const isLargeCard = idx === 0 || idx === 4;

            return (
              <motion.div
                key={fac.id}
                id={`facility-card-${fac.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col hover:shadow-xl transition-all border-b-3 border-brand-blue hover:border-brand-red ${
                  isLargeCard ? 'lg:col-span-2 md:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Visual Cover Header */}
                <div className="h-56 relative w-full overflow-hidden bg-brand-blue/10">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Absolute Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-lg flex items-center gap-1.5 shadow-sm text-brand-blue-dark">
                    <Icon size={12} className="text-brand-red" />
                    <span className="font-sans font-extrabold text-[9px] tracking-widest uppercase mt-0.5">
                      {fac.tag}
                    </span>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-blue-dark text-left">
                      {fac.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed text-left">
                      {fac.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-50 flex justify-between items-center text-[10px] uppercase tracking-wider font-extrabold text-brand-blue-dark/50">
                    <span>STATUS: ACTIVE & ACCREDITED</span>
                    <span className="text-brand-red">TENDER GRAPES CAMPUS</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
