import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Rahul Sharma',
    vehicle: 'Honda City Owner',
    rating: 5,
    review: 'Absolutely incredible service! My Honda City looks better than the showroom. The team at PUTZEN is extremely professional and the results are outstanding. Highly recommend!',
    avatar: 'RS',
  },
  {
    name: 'Priya Nair',
    vehicle: 'Scooter Owner',
    rating: 5,
    review: 'Best detailing studio in Pai Layout! The pickup and drop service is so convenient. My Activa was returned absolutely spotless. Will definitely come back!',
    avatar: 'PN',
  },
  {
    name: 'Aditya Kumar',
    vehicle: 'KTM Duke Owner',
    rating: 5,
    review: 'Got the Ultimate motorcycle package and the results blew me away. The chain lubricant and degreasing made a huge difference. Premium service at a very reasonable price.',
    avatar: 'AK',
  },
  {
    name: 'Meghna Rao',
    vehicle: 'Toyota Innova Owner',
    rating: 5,
    review: 'Very professional team. Came on time for pickup, handled my car with care, and the interior cleaning was exceptional. The dashboard polish made it look brand new!',
    avatar: 'MR',
  },
  {
    name: 'Vikram Singh',
    vehicle: 'BMW 3 Series Owner',
    rating: 5,
    review: 'Finally found a place that handles premium cars correctly. Used the right products for my BMW and the result is showroom-quality. PUTZEN is my go-to from now on.',
    avatar: 'VS',
  },
];

const TestimonialCard = ({ t }) => (
  <div className="glass gold-border-glow rounded-sm p-6 h-full flex flex-col">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {Array.from({ length: t.rating }).map((_, i) => (
        <FaStar key={i} className="text-[#D4AF37] text-sm" />
      ))}
    </div>

    {/* Quote icon */}
    <FaQuoteLeft className="text-[#D4AF37]/30 text-2xl mb-3" />

    {/* Review */}
    <p className="text-[#F5F5F5]/70 text-sm leading-relaxed font-medium flex-1 mb-6">
      {t.review}
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 border-t border-[#F5F5F5]/5 pt-4">
      <div className="w-10 h-10 rounded-sm bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center">
        <span className="text-[#D4AF37] text-xs font-black">{t.avatar}</span>
      </div>
      <div>
        <div className="text-[#F5F5F5] text-sm font-bold tracking-wide">{t.name}</div>
        <div className="text-[#D4AF37]/60 text-[10px] font-medium tracking-wider uppercase">{t.vehicle}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-[#D4AF37]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Client Reviews
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our <span className="gold-text">Clients Say</span>
          </motion.h2>
          <motion.div
            className="section-line mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
