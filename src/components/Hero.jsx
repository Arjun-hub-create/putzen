import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const Hero = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0f0f0f] to-[#060606]" />

        {/* Subtle dark car bg (desktop only, behind everything) */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-10 hidden lg:block"
          style={{
            backgroundImage: `url('/services-poster.jpeg')`,
            backgroundPosition: 'right center',
            backgroundSize: 'cover',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/80" />

        {/* Gold glow accents */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#E63946]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Scan-line light sweep */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 3 }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            {/* Studio badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase">
                Bengaluru's Premier Studio
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </motion.div>

            {/* Headline */}
            <div className="mb-5">
              <motion.h1
                variants={itemVariants}
                className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight text-[#F5F5F5]"
              >
                Premium
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight gold-text"
              >
                Car &amp; Bike
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight text-[#F5F5F5]"
              >
                Detailing
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-[#D4AF37] text-base sm:text-lg font-semibold tracking-widest uppercase mb-3"
            >
              Spotless. Shiny. <span className="text-[#E63946]">PUTZEN.</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#F5F5F5]/50 text-sm sm:text-base font-medium max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Premium detailing solutions for cars and motorcycles in Bengaluru.
              Experience the art of automotive perfection.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-shine bg-[#D4AF37] text-[#0A0A0A] text-sm font-bold tracking-widest uppercase px-7 py-4 rounded-sm hover:bg-[#E8C547] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]"
              >
                Book a Wash
              </button>

              <a
                href="https://wa.me/917975843550"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] text-sm font-bold tracking-widest uppercase px-7 py-4 rounded-sm hover:bg-[#25D366]/10 transition-all duration-300"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp Us
              </a>

              <a
                href="tel:+919901995353"
                className="btn-shine flex items-center justify-center gap-2 border border-[#F5F5F5]/20 text-[#F5F5F5]/70 text-sm font-bold tracking-widest uppercase px-7 py-4 rounded-sm hover:border-[#F5F5F5]/50 hover:text-[#F5F5F5] transition-all duration-300"
              >
                <FaPhone className="text-sm" />
                Call Now
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-3 gap-6 max-w-xs mx-auto lg:mx-0"
            >
              {[
                { num: '500+', label: 'Happy Cars' },
                { num: '4.9★', label: 'Rating' },
                { num: '2+',   label: 'Years' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black text-[#D4AF37]">{stat.num}</div>
                  <div className="text-[#F5F5F5]/40 text-[10px] font-medium tracking-wider uppercase mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: PUTZEN Services Poster ── */}
          <motion.div
            className="flex items-center justify-center relative"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 3.0 }}
          >
            {/* Outer glow ring — decorative */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[90%] h-[90%] rounded-sm border border-[#D4AF37]/10 animate-pulse" />
            </div>

            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-sm pointer-events-none z-20" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-sm pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-sm pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] rounded-br-sm pointer-events-none z-20" />

            {/* ★ THE PUTZEN SERVICES POSTER IMAGE ★ */}
            <motion.div
              className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] animate-float"
            >
              <img
                src="/services-poster.jpeg"
                alt="PUTZEN Premium Auto Care — Our Services"
                className="w-full h-auto rounded-sm object-contain"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.20)) drop-shadow(0 20px 60px rgba(0,0,0,0.8))',
                }}
                loading="eager"
              />

              {/* Subtle gold shine overlay on image */}
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating info badge */}
            <motion.div
              className="absolute -bottom-3 right-2 sm:right-6 glass gold-border-glow px-3 py-2 sm:px-4 sm:py-3 rounded-sm z-30"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-[#D4AF37] text-[10px] sm:text-xs font-bold tracking-widest uppercase">Premium Care</div>
              <div className="text-[#F5F5F5]/50 text-[9px] sm:text-[10px] tracking-wider">16th Cross, Pai Layout</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8 }}
      >
        <span className="text-[#F5F5F5]/30 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
