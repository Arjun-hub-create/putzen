import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    before: '/gallery/exterior-before.jpg',
    after: '/gallery/exterior-after.jpg',
    label: 'Exterior Detail',
  },
  {
    before: '/services/dirty-dashboard.png',
    after: '/services/5-dashboard.png',
    label: 'Interior Clean',
  },
  {
    before: 'https://images.unsplash.com/photo-1619771914272-e3a4e2c8acad?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80',
    label: 'Full Detail',
  },
];

const BeforeAfterSlider = ({ before, after, label }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e) => { if (dragging.current) updatePos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e) => { updatePos(e.touches[0].clientX); };

  return (
    <motion.div
      className="relative rounded-sm overflow-hidden cursor-ew-resize select-none gold-border-glow"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* After image (full) */}
      <img
        src={after}
        alt="After"
        className="w-full h-52 sm:h-64 object-cover"
        loading="lazy"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <img
          src={before}
          alt="Before"
          className="w-full h-52 sm:h-64 object-cover"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/30" />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#D4AF37] z-10"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)]">
          <span className="text-[#0A0A0A] text-xs font-black">⟺</span>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-20">
        <span className="bg-[#0A0A0A]/80 text-[#F5F5F5]/60 text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm">
          Before
        </span>
      </div>
      <div className="absolute top-3 right-3 z-20">
        <span className="bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm">
          After
        </span>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A] to-transparent p-3">
        <p className="text-[#F5F5F5] text-xs font-bold tracking-widest uppercase text-center">{label}</p>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Transformations
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Before & <span className="gold-text">After</span>
          </motion.h2>
          <motion.p
            className="text-[#F5F5F5]/40 text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Drag the slider to see the PUTZEN difference
          </motion.p>
          <motion.div
            className="section-line mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((item, i) => (
            <BeforeAfterSlider key={i} before={item.before} after={item.after} label={item.label} />
          ))}
        </div>

        {/* Extra gallery grid */}
        <motion.div
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            '/gallery/1.png',
            '/gallery/2-black-wash.png',
            '/gallery/3.jpg',
            '/gallery/4.jpg',
          ].map((src, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-sm gold-border-glow group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
