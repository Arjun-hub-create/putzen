import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl animate-pulse" />
          </div>

          {/* Logo */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className="text-6xl sm:text-8xl font-black tracking-widest uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="text-[#F5F5F5]">PUT</span>
              <motion.span
                className="text-[#E63946]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >Z</motion.span>
              <span className="text-[#F5F5F5]">EN</span>
            </motion.h1>

            <motion.p
              className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.4em] uppercase mt-2 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Premium Auto Care
            </motion.p>

            {/* Gold line */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
            />

            {/* Loading bar */}
            <motion.div
              className="mt-8 w-48 mx-auto h-0.5 bg-[#1a1a1a] rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E63946] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.0, duration: 1.2, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.p
              className="text-[#444] text-xs tracking-widest uppercase mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
            >
              Loading Experience...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
