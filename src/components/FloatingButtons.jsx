import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/917975843550"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl pulse-green hover:scale-110 transition-transform duration-300"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:+919901995353"
        className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-2xl pulse-gold hover:scale-110 transition-transform duration-300"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.4, duration: 0.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call"
      >
        <FaPhone className="text-[#0A0A0A] text-xl" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
