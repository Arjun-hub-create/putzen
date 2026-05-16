import { motion } from 'framer-motion';

const pricingData = [
  { vehicle: 'Scooter', price: '₹149', highlight: false },
  { vehicle: 'Bike Below 200cc', price: '₹179', highlight: false },
  { vehicle: 'Bike', price: '₹199', highlight: false },
  { vehicle: 'Hatchback', price: '₹449', highlight: true },
  { vehicle: 'Sedan / Mid SUV', price: '₹499', highlight: false },
  { vehicle: 'MPV / SUV / Premium Cars', price: '₹599', highlight: false },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute right-0 top-1/2 w-64 h-64 bg-[#D4AF37]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Transparent Pricing
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Price <span className="gold-text">List</span>
          </motion.h2>
          <motion.p
            className="text-[#F5F5F5]/40 text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Professional Car Wash & Detailing
          </motion.p>
          <motion.div
            className="section-line mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Pricing table */}
        <div className="max-w-2xl mx-auto">
          {/* Header row */}
          <motion.div
            className="grid grid-cols-2 mb-3 px-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37]/60 text-[10px] font-bold tracking-widest uppercase">Vehicle Type</span>
            <span className="text-[#D4AF37]/60 text-[10px] font-bold tracking-widest uppercase text-right">Price</span>
          </motion.div>

          <div className="space-y-2">
            {pricingData.map((item, i) => (
              <motion.div
                key={item.vehicle}
                className={`grid grid-cols-2 items-center px-5 py-4 rounded-sm transition-all duration-300 group cursor-default ${
                  item.highlight
                    ? 'bg-gradient-to-r from-[#D4AF37]/15 to-[#D4AF37]/5 border border-[#D4AF37]/30'
                    : 'bg-[#0A0A0A]/60 border border-[#F5F5F5]/5 hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/5'
                }`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3">
                  {item.highlight && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  )}
                  <span className={`text-sm font-semibold tracking-wider uppercase ${
                    item.highlight ? 'text-[#F5F5F5]' : 'text-[#F5F5F5]/70 group-hover:text-[#F5F5F5]'
                  } transition-colors`}>
                    {item.vehicle}
                  </span>
                </div>
                <div className="text-right">
                  <span className={`text-xl font-black ${item.highlight ? 'text-[#D4AF37]' : 'text-[#E63946]'}`}>
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-10 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase">
              Visit Today
            </p>
            <p className="text-[#F5F5F5]/40 text-xs tracking-wider">
              Give Your Car The Care It Deserves
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919901995353"
                className="btn-shine border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                📞 9901995353
              </a>
              <a
                href="tel:+917975843550"
                className="btn-shine border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                📞 7975843550
              </a>
            </div>
            <p className="text-[#F5F5F5]/30 text-xs">16th Cross, Pai Layout, Bengaluru</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
