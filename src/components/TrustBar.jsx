import { motion } from 'framer-motion';
import { FaCar, FaStar, FaUserTie, FaBolt } from 'react-icons/fa';

const badges = [
  { icon: FaCar, label: 'Pickup & Drop', sub: 'Available' },
  { icon: FaStar, label: 'Premium Products', sub: 'Certified' },
  { icon: FaUserTie, label: 'Professional Staff', sub: 'Trained Experts' },
  { icon: FaBolt, label: 'Fast Service', sub: 'Quick Turnaround' },
];

const TrustBar = () => {
  return (
    <section className="relative py-6 bg-[#111111] border-y border-[#D4AF37]/10 overflow-hidden">
      {/* Background shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/3 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                className="flex flex-col sm:flex-row items-center gap-3 group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-sm border border-[#D4AF37]/20 flex items-center justify-center group-hover:border-[#D4AF37]/60 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300 flex-shrink-0 bg-[#D4AF37]/5">
                  <Icon className="text-[#D4AF37] text-base" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-[#F5F5F5] text-xs font-bold tracking-wider uppercase leading-tight">
                    {badge.label}
                  </div>
                  <div className="text-[#D4AF37]/60 text-[10px] tracking-wider font-medium">
                    {badge.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
