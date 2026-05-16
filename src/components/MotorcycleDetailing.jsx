import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const premiumFeatures = ['Bike Wash', 'Body Polish', 'Tyre Polish'];
const ultimateFeatures = ['Bike Wash', 'Body Polish', 'Tyre Polish', 'Chain Lubricant', 'Complete Degreasing'];

const PackageCard = ({ tier, features, isUltimate, index }) => (
  <motion.div
    className={`relative rounded-sm overflow-hidden ${isUltimate ? 'border border-[#D4AF37]/40' : 'border border-[#D4AF37]/15'}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.6 }}
    whileHover={{ y: -6 }}
  >
    {/* Background */}
    <div className={`absolute inset-0 ${isUltimate ? 'bg-gradient-to-br from-[#D4AF37]/10 via-[#111] to-[#0A0A0A]' : 'bg-[#111]'}`} />

    {/* Ultimate badge */}
    {isUltimate && (
      <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0A0A0A] text-[10px] font-black tracking-widest uppercase px-3 py-1">
        Best Value
      </div>
    )}

    <div className="relative z-10 p-6 sm:p-8">
      {/* Tier label */}
      <div className={`inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-sm ${isUltimate ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/30' : 'bg-[#E63946]/10 border border-[#E63946]/20'}`}>
        <span className={`text-lg font-black uppercase tracking-widest ${isUltimate ? 'text-[#D4AF37]' : 'text-[#E63946]'}`} style={{ fontStyle: 'italic' }}>
          {tier}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feat) => (
          <li key={feat} className="flex items-center gap-3">
            <FaCheckCircle className={`text-sm flex-shrink-0 ${isUltimate ? 'text-[#D4AF37]' : 'text-[#E63946]'}`} />
            <span className="text-[#F5F5F5]/80 text-sm font-semibold tracking-wider uppercase">
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href="https://wa.me/917975843550"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-shine mt-8 block text-center text-xs font-bold tracking-widest uppercase py-3 px-6 rounded-sm transition-all duration-300 ${
          isUltimate
            ? 'bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#E8C547] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
            : 'border border-[#E63946] text-[#E63946] hover:bg-[#E63946]/10'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Book {tier} Package
      </motion.a>
    </div>

    {/* Animated border glow for ultimate */}
    {isUltimate && (
      <motion.div
        className="absolute inset-0 rounded-sm pointer-events-none"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ boxShadow: 'inset 0 0 30px rgba(212,175,55,0.05)' }}
      />
    )}
  </motion.div>
);

const MotorcycleDetailing = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Bg image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Two-Wheeler Care
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Motorcycle <span className="gold-text">Detailing</span>
          </motion.h2>
          <motion.div
            className="section-line mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <PackageCard tier="Premium" features={premiumFeatures} isUltimate={false} index={0} />
          <PackageCard tier="Ultimate" features={ultimateFeatures} isUltimate={true} index={1} />
        </div>
      </div>
    </section>
  );
};

export default MotorcycleDetailing;
