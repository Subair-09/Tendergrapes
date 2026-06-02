import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../schoolData';

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Autoslide every 7.5 seconds
    const timer = setInterval(() => {
      nextSlide();
    }, 7500);
    return () => clearInterval(timer);
  }, [index]);

  const activeTestimonial = testimonials[index];

  return (
    <section id="testimonials" className="py-20 bg-brand-blue-deep text-white relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-10 right-10 leading-none text-brand-blue/5 pointer-events-none select-none z-0">
        <Quote size={220} className="stroke-1" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-sm font-extrabold text-brand-red uppercase tracking-widest font-sans">
            Hear From Our Parents
          </span>
          <h2 className="font-serif font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none">
            Trusted by Inspiring Families
          </h2>
          <div className="h-1 w-20 bg-brand-red rounded mx-auto" />
          <p className="text-gray-400 font-sans text-sm leading-relaxed">
            Discover why our community of parents trust Tender Grapes Schools with their children’s 
            formative year-on-year mental, social, and spiritual milestones.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6.5 sm:p-12 shadow-xl backdrop-blur-md">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              id={`testimonial-slide-${activeTestimonial.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Star Rating & Quote Visual */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-brand-red fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-gray-500 font-mono tracking-wider bg-white/10 px-2 py-0.5 rounded">
                  {activeTestimonial.date}
                </span>
              </div>

              {/* Review Testimonial Text */}
              <p className="font-serif font-medium text-lg sm:text-xl lg:text-2xl text-gray-100 leading-normal italic">
                "{activeTestimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-2">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.parentName}
                  className="w-12 h-12 object-cover object-center rounded-full border-2 border-brand-red shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-sans font-bold text-base text-white">
                    {activeTestimonial.parentName}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Parent of student in <span className="text-brand-blue font-semibold">{activeTestimonial.childClass}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Sliders Control Nav */}
          <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 flex items-center gap-2">
            <button
              id="testimonial-prev-btn"
              onClick={prevSlide}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all focus:outline-none cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={nextSlide}
              className="p-2 bg-brand-red hover:bg-brand-red-hover text-white rounded-lg transition-all focus:outline-none cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Nav Dots */}
        <div className="flex justify-center items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              id={`testimonial-dot-${i}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === index ? 'w-6 bg-brand-red' : 'w-2 bg-white/25 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
