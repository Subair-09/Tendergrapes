import { MessageSquare, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show a small interactive welcome message after 4.5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = 'https://wa.me/2348123456789?text=Hello%20Tender%20Grapes%20Schools%2C%20I%20am%20inquiring%20about%20admissions%20for%20my%20child.';

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-chat-bubble"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="pointer-events-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-4 mb-3 max-w-[calc(100vw-3rem)] sm:max-w-xs text-sm text-gray-700 relative text-right"
          >
            <button
              id="close-whatsapp-bubble"
              onClick={() => setIsOpen(false)}
              className="absolute top-2 left-2 text-gray-300 hover:text-gray-500 transition-colors p-1"
              aria-label="Close message"
            >
              <X size={14} />
            </button>
            <div className="pt-2 text-left">
              <p className="font-semibold text-brand-blue-dark flex items-center gap-1.5 text-xs tracking-wide uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
                Admissions Team
              </p>
              <p className="text-gray-600 leading-normal">
                Hello! 👋 Welcome to Tender Grapes Schools. Need help with our 2026 application process?
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-block mt-3 px-4 py-1.5 bg-[#25D366] text-white font-medium text-xs rounded-lg hover:bg-emerald-600 transition-all shadow-md shadow-emerald-100"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        id="whatsapp-trigger-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all cursor-pointer relative hover:scale-105 active:scale-95 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:scale-110"></span>
        <MessageSquare size={26} className="relative z-10 fill-current" />
      </motion.a>
    </div>
  );
}
