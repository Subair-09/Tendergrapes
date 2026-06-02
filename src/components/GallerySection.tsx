import { useState } from 'react';
import { Camera, Calendar, ArrowRight, Expand, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryItems } from '../schoolData';

type CategoryFilter = 'all' | 'classroom' | 'sports' | 'graduation' | 'event' | 'achievement';

export default function GallerySection() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'Show All' },
    { value: 'classroom', label: 'Classroom' },
    { value: 'graduation', label: 'Graduation' },
    { value: 'sports', label: 'Sports' },
    { value: 'event', label: 'School Events' },
    { value: 'achievement', label: 'Achievements' },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-sm font-extrabold text-brand-red uppercase tracking-widest font-sans">
            Life at Tender Grapes
          </span>
          <h2 className="font-serif font-extrabold text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Our Vibrant School Gallery
          </h2>
          <div className="h-1 w-20 bg-brand-red rounded mx-auto" />
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            Take a visual tour through our daily campus life, celebration ceremonies, sporting arenas, 
            and modern science explorations.
          </p>
        </div>

        {/* Categories Tab Row */}
        <div className="flex flex-wrap justify-center items-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`gallery-filter-${cat.value}`}
              onClick={() => setFilter(cat.value)}
              className={`py-2 px-4.5 rounded-xl text-xs font-bold font-sans tracking-wide transition-all cursor-pointer ${
                filter === cat.value
                  ? 'bg-brand-red text-white shadow-md shadow-brand-red/10'
                  : 'bg-brand-gray text-brand-blue-dark/80 hover:bg-brand-blue/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Bento Responsive Grid */}
        <motion.div
          id="gallery-grid"
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                id={`gallery-item-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 aspect-video sm:aspect-square flex flex-col justify-end bg-brand-gray"
              >
                {/* Main Visual */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5 opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Floating Content */}
                <div className="relative p-5 text-white space-y-2 z-10">
                  <span className="inline-block px-2.5 py-0.5 bg-brand-red/95 text-[9px] font-extrabold tracking-wider rounded uppercase">
                    {item.category}
                  </span>
                  
                  <h3 className="font-sans font-bold text-base leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-gray-300 leading-normal line-clamp-2 md:line-clamp-none">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[10px] text-white/70 font-semibold group-hover:text-white transition-colors">
                    <span className="flex items-center gap-1">
                      <Camera size={12} className="text-brand-blue" />
                      Tender Grapes Media Desk
                    </span>
                    <button
                      id={`gallery-expand-${item.id}`}
                      onClick={() => setSelectedImage(item.image)}
                      className="p-1 px-2 border border-white/20 hover:bg-white/15 rounded text-[9px] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Expand size={10} />
                      View Full
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal overlay if an image is selected */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-55 flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <img
                  src={selectedImage}
                  alt="High-definition gallery visual"
                  className="w-full h-auto max-h-[85vh] object-contain"
                  referrerPolicy="no-referrer"
                />
                <button
                  id="close-lightbox-btn"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-brand-red transition-all text-xs font-bold uppercase tracking-wider"
                >
                  ✕ Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
