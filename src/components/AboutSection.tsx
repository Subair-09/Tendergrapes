import { CheckCircle2, Eye, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const points = [
    'Integrated Dual Curriculum (Standard British syllabus integrated with Nigerian Core Curriculum).',
    'Modern Classrooms equipped with individual ergonomic seating, climate control, and digital teaching aids.',
    'World-class STEM and ICT systems featuring robotic modeling kits and visual programming blocks.',
    'Uncompromising spiritual and character grounding aligned with strong leadership and moral ethics.',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission, Vision & Excellence */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="block text-sm font-extrabold text-brand-red uppercase tracking-widest font-sans">
                About Our Institution
              </span>
              <h2 className="font-serif font-extrabold text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]">
                Guiding Every Child Towards Their Infinite Potential
              </h2>
              <div className="h-1 w-20 bg-brand-red rounded" />
            </div>

            <p className="text-gray-600 font-sans text-base leading-relaxed">
              Founded on the pillars of academic rigor, character development, and safe innovation, 
              <strong> Tender Grapes Schools</strong> has grown to become a benchmark of international-standard 
              private education in Lagos. We nurture young minds from tender infancy through teenage growth, 
              equipping them to think critically, lead honorably, and succeed globally.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              <motion.div
                id="about-mission-card"
                className="bg-brand-gray rounded-xl p-5 border-l-4 border-brand-red space-y-3"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-brand-red/10 text-brand-red rounded-lg">
                    <Compass size={18} />
                  </span>
                  <h3 className="font-sans font-bold text-base text-brand-blue-dark">Our Mission</h3>
                </div>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  To provide an elite, secure, and nurturing learning experience that empowers students with intellectual clarity and deep-seated moral values to lead as dynamic global problem solvers.
                </p>
              </motion.div>

              <motion.div
                id="about-vision-card"
                className="bg-brand-gray rounded-xl p-5 border-l-4 border-brand-blue-dark space-y-3"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-brand-blue-dark/10 text-brand-blue-dark rounded-lg">
                    <Eye size={18} />
                  </span>
                  <h3 className="font-sans font-bold text-base text-brand-blue-dark">Our Vision</h3>
                </div>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  To be the preferred premium citadel of learning in Africa, renowned for breeding creative innovators, ethical statesmen, and academic trailblazers of stellar global standing.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Visual and Academic Highlights */}
          <div className="lg:col-span-6 lg:pl-6 space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] bg-brand-blue/15">
              <img
                src="https://imgur.com/tsAHP4s.png"
                alt="Group of young African kids playing and learning"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <p className="font-serif font-bold text-lg">School Value: Integrity & Honor</p>
                <p className="text-xs text-gray-200 mt-1">Upholding honesty, respect, moral grounding, and academic success.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-sans font-bold text-lg text-brand-blue-dark flex items-center gap-2">
                <ShieldCheck className="text-brand-red inline-block" size={20} />
                Our Commitment to Academic Excellence
              </h3>
              <p className="text-sm text-gray-500 font-sans">
                At Tender Grapes, standard education is designed beyond rote learning. We employ highly specialized 
                cognitive and behavioral feedback tools, letting us map out individualized study guides for math, 
                science, music, coding, and linguistics.
              </p>

              {/* Checkmarks */}
              <ul className="space-y-3">
                {points.map((pt, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-gray-600 font-sans leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
