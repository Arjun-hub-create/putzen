import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────────────────────────
// EMAILJS SETUP FOR: putzenautocare@gmail.com
//
// STEP 1 — Create a free account at https://emailjs.com
//
// STEP 2 — Add Email Service:
//   Dashboard → Email Services → Add New Service → Choose "Gmail"
//   Connect your Gmail account: putzenautocare@gmail.com
//   Copy the generated Service ID → paste into EMAILJS_SERVICE_ID below
//
// STEP 3 — Create Email Template:
//   Dashboard → Email Templates → Create New Template
//   Set "To Email" = putzenautocare@gmail.com
//   Use these variables in your template body:
//     {{from_name}}  — Customer's name
//     {{phone}}      — Customer's phone number
//     {{vehicle}}    — Selected vehicle type
//     {{message}}    — Customer's message
//   Example subject: "New Booking Request from {{from_name}}"
//   Copy the Template ID → paste into EMAILJS_TEMPLATE_ID below
//
// STEP 4 — Get Public Key:
//   Dashboard → Account → API Keys → copy your Public Key
//   Paste into EMAILJS_PUBLIC_KEY below
//
// STEP 5 — Save Contact.jsx and deploy. Done!
// ─────────────────────────────────────────────────────────────────────────────

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';    // e.g. 'service_abc1234'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // e.g. 'template_xyz5678'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';    // e.g. 'abcDEFghIJKL12345'

// Booking email destination (used in template & display only)
const BUSINESS_EMAIL = 'putzenautocare@gmail.com';

const vehicleTypes = [
  'Scooter',
  'Bike (Below 200cc)',
  'Bike',
  'Hatchback',
  'Sedan / Mid SUV',
  'MPV / SUV / Premium Car',
  'Motorcycle (Premium Package)',
  'Motorcycle (Ultimate Package)',
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\+?[\d\s\-]{10,}$/.test(form.phone))
      e.phone = 'Valid phone number required';
    if (!form.vehicle) e.vehicle = 'Please select a vehicle type';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          phone:     form.phone,
          vehicle:   form.vehicle,
          message:   form.message,
          reply_to:  BUSINESS_EMAIL,
          to_email:  BUSINESS_EMAIL,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', phone: '', vehicle: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const inputClass = (field) =>
    `w-full bg-[#0A0A0A]/60 border ${
      errors[field]
        ? 'border-[#E63946]/60'
        : 'border-[#F5F5F5]/10 focus:border-[#D4AF37]/50'
    } text-[#F5F5F5] text-sm font-medium px-4 py-3 rounded-sm outline-none transition-all duration-300 placeholder-[#F5F5F5]/20 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-[#D4AF37]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Book Your <span className="gold-text">Detail</span>
          </motion.h2>
          <motion.p
            className="text-[#F5F5F5]/30 text-xs tracking-wider font-medium mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We'll respond to {BUSINESS_EMAIL}
          </motion.p>
          <motion.div
            className="section-line mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass gold-border-glow rounded-sm p-6 sm:p-8">
              {status === 'success' ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FaCheckCircle className="text-[#D4AF37] text-5xl mx-auto mb-4" />
                  <h3 className="text-[#F5F5F5] text-xl font-black tracking-wider uppercase mb-2">
                    Booking Received!
                  </h3>
                  <p className="text-[#F5F5F5]/50 text-sm leading-relaxed">
                    We've received your request and will contact you shortly to confirm your appointment.
                  </p>
                  <p className="text-[#D4AF37]/60 text-xs mt-3">
                    Confirmation sent to {BUSINESS_EMAIL}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-[#D4AF37] text-xs font-bold tracking-widest uppercase border border-[#D4AF37]/30 px-6 py-2 rounded-sm hover:bg-[#D4AF37]/10 transition-all"
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Full Name *"
                      autoComplete="name"
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <p className="text-[#E63946] text-[10px] mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number * (e.g. +91 9876543210)"
                      autoComplete="tel"
                      className={inputClass('phone')}
                    />
                    {errors.phone && (
                      <p className="text-[#E63946] text-[10px] mt-1 font-medium">{errors.phone}</p>
                    )}
                  </div>

                  {/* Vehicle Type */}
                  <div>
                    <select
                      name="vehicle"
                      value={form.vehicle}
                      onChange={handleChange}
                      className={`${inputClass('vehicle')} appearance-none bg-[#0A0A0A]`}
                    >
                      <option value="" disabled>Select Vehicle Type *</option>
                      {vehicleTypes.map((v) => (
                        <option key={v} value={v} className="bg-[#111] text-[#F5F5F5]">
                          {v}
                        </option>
                      ))}
                    </select>
                    {errors.vehicle && (
                      <p className="text-[#E63946] text-[10px] mt-1 font-medium">{errors.vehicle}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message or special requests... *"
                      rows={4}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[#E63946] text-[10px] mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Error state */}
                  {status === 'error' && (
                    <motion.div
                      className="flex items-start gap-2 text-[#E63946] text-xs font-medium bg-[#E63946]/5 border border-[#E63946]/20 rounded-sm px-4 py-3"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
                      <span>
                        Failed to send message. Please contact us directly via WhatsApp or call{' '}
                        <a href="tel:+919901995353" className="underline">+91 9901995353</a>.
                      </span>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-shine w-full bg-[#D4AF37] text-[#0A0A0A] text-sm font-black tracking-widest uppercase py-4 rounded-sm hover:bg-[#E8C547] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Book My Detail →'
                    )}
                  </motion.button>

                  <p className="text-[#F5F5F5]/20 text-[10px] text-center tracking-wider">
                    Booking confirmation sent to {BUSINESS_EMAIL}
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Info + Map */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917975843550"
                target="_blank"
                rel="noopener noreferrer"
                className="glass gold-border-glow rounded-sm p-5 flex items-center gap-4 hover:border-[#25D366]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-sm bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <FaWhatsapp className="text-[#25D366] text-xl" />
                </div>
                <div>
                  <div className="text-[#F5F5F5]/40 text-[10px] font-bold tracking-widest uppercase mb-1">
                    WhatsApp
                  </div>
                  <div className="text-[#F5F5F5] text-sm font-bold">+91 7975843550</div>
                </div>
              </a>

              {/* Phone */}
              <div className="glass gold-border-glow rounded-sm p-5">
                <div className="flex items-center gap-2 text-[#F5F5F5]/40 text-[10px] font-bold tracking-widest uppercase mb-3">
                  <FaPhone className="text-[#D4AF37] text-xs" />
                  Call Us
                </div>
                <a
                  href="tel:+919901995353"
                  className="block text-[#F5F5F5] text-sm font-bold hover:text-[#D4AF37] transition-colors mb-1"
                >
                  +91 9901995353
                </a>
                <a
                  href="tel:+917975843550"
                  className="block text-[#F5F5F5] text-sm font-bold hover:text-[#D4AF37] transition-colors"
                >
                  +91 7975843550
                </a>
              </div>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="glass gold-border-glow rounded-sm p-5 flex items-center gap-4 hover:border-[#D4AF37]/40 transition-all duration-300 group sm:col-span-2"
              >
                <div className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <span className="text-[#D4AF37] text-base">✉</span>
                </div>
                <div>
                  <div className="text-[#F5F5F5]/40 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Email Us
                  </div>
                  <div className="text-[#D4AF37] text-sm font-bold">{BUSINESS_EMAIL}</div>
                </div>
              </a>

              {/* Address */}
              <div className="glass gold-border-glow rounded-sm p-5 flex items-start gap-4 sm:col-span-2">
                <div className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#D4AF37] text-lg" />
                </div>
                <div>
                  <div className="text-[#F5F5F5]/40 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Visit Us
                  </div>
                  <div className="text-[#F5F5F5] text-sm font-bold">
                    16th Cross, Pai Layout, Bengaluru
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="flex-1 rounded-sm overflow-hidden gold-border-glow" style={{ minHeight: '220px' }}>
              <iframe
                title="PUTZEN Premium Auto Care Location"
                src="https://maps.google.com/maps?q=Pai+Layout+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  width: '100%',
                  height: '220px',
                  border: 0,
                  filter: 'grayscale(80%) invert(92%) contrast(88%) hue-rotate(180deg)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
