import { motion } from 'framer-motion';
import { FaUserTie, FaStar, FaBolt, FaCar, FaTag } from 'react-icons/fa';

const reasons = [
  {
    icon: FaUserTie,
    title: 'Professional Staff',
    description: 'Our trained detailing experts handle every vehicle with precision and care.',
    color: '#D4AF37',
  },
  {
    icon: FaStar,
    title: 'Premium Products',
    description: 'We use only certified, high-quality detailing products for exceptional results.',
    color: '#E63946',
  },
  {
    icon: FaBolt,
    title: 'Fast Service',
    description: 'Quick turnaround without compromising on the quality of our work.',
    color: '#D4AF37',
  },
  {
    icon: FaCar,
    title: 'Pickup & Drop',
    description: 'Convenient doorstep pickup and drop service available for your comfort.',
    color: '#E63946',
  },
  {
    icon: FaTag,
    title: 'Affordable Pricing',
    description: "Premium quality detailing at prices that won't break the bank.",
    color: '#D4AF37',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-[#E63946]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <motion.span
              className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase block mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Advantage
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="gold-text">PUTZEN?</span>
            </motion.h2>
            <motion.p
              className="text-[#F5F5F5]/40 text-sm leading-relaxed font-medium mb-8 max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We combine professional expertise with premium products to deliver an automotive detailing experience unlike any other in Bengaluru.
            </motion.p>

            <motion.a
              href="https://wa.me/917975843550"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-block bg-[#D4AF37] text-[#0A0A0A] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-[#E8C547] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Experience PUTZEN →
            </motion.a>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  className={`glass gold-border-glow p-5 rounded-sm group cursor-default hover:border-[#D4AF37]/30 transition-all duration-300 ${i === 4 ? 'sm:col-span-2 sm:max-w-xs sm:mx-auto w-full' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${reason.color}15`, border: `1px solid ${reason.color}30` }}
                  >
                    <Icon className="text-base" style={{ color: reason.color }} />
                  </div>
                  <h3 className="text-[#F5F5F5] font-bold text-xs tracking-wider uppercase mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-[#F5F5F5]/40 text-xs leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
