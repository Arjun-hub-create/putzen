import { motion } from 'framer-motion';
import { GiVacuumCleaner, GiWaterSplash, GiCarWheel } from 'react-icons/gi';
import { MdDashboard } from 'react-icons/md';
import { BsDropletFill } from 'react-icons/bs';

/* ─── individual service cards (top grid) ─── */
const services = [
  {
    icon: GiVacuumCleaner,
    title: 'Interior Vacuum Cleaning',
    description: 'Deep vacuum cleaning of seats, carpets, dashboard, and all interior surfaces.',
    color: '#D4AF37',
    img: '/services/1-vacuum.png',
  },
  {
    icon: GiWaterSplash,
    title: 'Underchassis High Pressure Wash',
    description: 'Professional high-pressure washing to remove grime and mud from the undercarriage.',
    color: '#E63946',
    img: '/services/2-underchassis.png',
  },
  {
    icon: BsDropletFill,
    title: 'Wavex Foam Exterior Wash',
    description: 'Premium foam blaster exterior wash leaving your car spotless and gleaming.',
    color: '#D4AF37',
    img: '/services/3-foam.jpg',
  },
  {
    icon: GiCarWheel,
    title: 'Premium Tyre Polish',
    description: 'Professional tyre polishing that restores deep black finish and protects rubber.',
    color: '#E63946',
    img: '/services/4-tyre.png',
  },
  {
    icon: MdDashboard,
    title: 'Premium Dashboard Polish',
    description: 'Restore and protect your dashboard with premium conditioning products.',
    color: '#D4AF37',
    img: '/services/5-dashboard.png',
  },
];

/* ─── single service card ─── */
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  return (
    <motion.div
      className="relative group overflow-hidden rounded-sm glass gold-border-glow cursor-default"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        {/* Icon badge */}
        <div
          className="absolute top-3 right-3 w-9 h-9 rounded-sm flex items-center justify-center"
          style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
        >
          <Icon className="text-lg" style={{ color: service.color }} />
        </div>
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="text-[#F5F5F5] font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 leading-tight">
          {service.title}
        </h3>
        <p className="text-[#F5F5F5]/40 text-xs leading-relaxed font-medium">
          {service.description}
        </p>
        <motion.div
          className="mt-4 h-px"
          style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.3, duration: 0.5 }}
        />
      </div>

      {/* Shine on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent" />
    </motion.div>
  );
};

/* ─── main section ─── */
const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E63946]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <motion.span
            className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase block mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            What We Offer
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] mb-4"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Our <span className="gold-text">Services</span>
          </motion.h2>
          <motion.p
            className="text-[#F5F5F5]/40 text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            From Interior Detailing to Exterior Perfection
          </motion.p>
          <motion.div
            className="section-line mt-6"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

        {/* ── Service cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} service={svc} index={i} />
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════
            PUTZEN POSTERS — Price List + Motorcycle Detailing
            Two real branded posters side-by-side (stack on mobile)
        ════════════════════════════════════════════════════════ */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Sub-heading */}
          <div className="text-center mb-10">
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase">
              Our Brochures
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F5F5F5] mt-2">
              Pricing &amp; <span className="gold-text">Motorcycle Detailing</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">

            {/* — Price List Poster — */}
            <motion.div
              className="relative group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37] z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37] z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37] z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37] z-10 pointer-events-none" />

              <div className="overflow-hidden rounded-sm border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-colors duration-400 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <img
                  src="/pricelist-poster.jpeg"
                  alt="PUTZEN Price List — Professional Car Wash & Detailing"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{
                    filter: 'drop-shadow(0 10px 40px rgba(212,175,55,0.12))',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-sm bg-gradient-to-t from-[#D4AF37]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Label */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="bg-[#D4AF37] text-[#0A0A0A] text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-sm shadow-lg">
                  Price List
                </span>
              </motion.div>
            </motion.div>

            {/* — Motorcycle Detailing Poster — */}
            <motion.div
              className="relative group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37] z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37] z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37] z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37] z-10 pointer-events-none" />

              <div className="overflow-hidden rounded-sm border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-colors duration-400 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <img
                  src="/motorcycle-poster.jpeg"
                  alt="PUTZEN Motorcycle Detailing — Premium & Ultimate Packages"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{
                    filter: 'drop-shadow(0 10px 40px rgba(230,57,70,0.10))',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-sm bg-gradient-to-t from-[#E63946]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Label */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-[#E63946] text-white text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-sm shadow-lg">
                  Motorcycle Detailing
                </span>
              </motion.div>
            </motion.div>

          </div>{/* /grid */}
        </motion.div>
        {/* ── END POSTERS ── */}

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[#F5F5F5]/30 text-sm font-medium mb-4">
            Give Your Car The Care It Deserves!
          </p>
          <a
            href="https://wa.me/917975843550"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-block bg-[#E63946] text-white text-xs font-bold tracking-widest uppercase px-8 py-3 rounded-sm hover:bg-[#cc2f3b] transition-all duration-300 shadow-[0_0_20px_rgba(230,57,70,0.3)]"
          >
            Book a Service →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
