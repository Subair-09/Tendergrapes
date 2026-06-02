import React from 'react';
import { Award, BookOpen, Sparkles, Cpu, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { whyFeatures } from '../schoolData';

// Icon mapper for string keys defined in schoolData
const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Award,
  BookOpen,
  Sparkles,
  Cpu,
  ShieldCheck,
  HeartHandshake
};

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-extrabold text-brand-red uppercase tracking-widest font-sans">
            Guaranteed Standards
          </span>
          <h2 className="font-serif font-extrabold text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Why Discerning Parents Choose Tender Grapes Schools
          </h2>
          <div className="h-1 w-20 bg-brand-red rounded mx-auto" />
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            We provide a world-class holistic growth environment where intellectual achievement merges 
            perfectly with emotional safety and personal leadership traits.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyFeatures.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Award;
            return (
              <motion.div
                key={feature.id}
                id={`why-card-${feature.id}`}
                className="bg-white rounded-2xl p-6.5 text-left border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-red/10 border-b-3 border-brand-blue hover:border-brand-red transition-all group flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  {/* Floating Circular Icon */}
                  <div className="relative flex items-center justify-center w-12 h-12 bg-brand-blue rounded-xl text-brand-blue-dark group-hover:bg-brand-red group-hover:text-white transition-colors duration-350">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="font-sans font-extrabold text-lg text-brand-blue-dark tracking-tight leading-snug group-hover:text-brand-red transition-colors duration-350">
                    {feature.title}
                  </h3>

                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-[10px] font-bold text-brand-blue-dark uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">
                  <span>Learn more</span>
                  <span className="text-brand-red">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
