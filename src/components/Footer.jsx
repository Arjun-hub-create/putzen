import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/10 pt-16 pb-6 relative overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#D4AF37]/2 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black tracking-widest uppercase mb-2">
                <span className="text-[#F5F5F5]">PUT</span>
                <span className="text-[#E63946]">Z</span>
                <span className="text-[#F5F5F5]">EN</span>
              </h2>
              <p className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">
                Premium Auto Care
              </p>
              <p className="text-[#F5F5F5]/30 text-xs leading-relaxed font-medium max-w-xs">
                Bengaluru's premium car & bike detailing studio. Spotless. Shiny. PUTZEN.
              </p>

              {/* Social */}
              <div className="flex gap-3 mt-6">
                {[
                  { icon: FaInstagram, href: '#', label: 'Instagram' },
                  { icon: FaFacebook, href: '#', label: 'Facebook' },
                  { icon: FaYoutube, href: '#', label: 'YouTube' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-sm border border-[#F5F5F5]/10 flex items-center justify-center text-[#F5F5F5]/40 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-[#D4AF37] text-[10px] font-black tracking-[0.3em] uppercase mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="text-[#F5F5F5]/40 hover:text-[#D4AF37] text-xs font-medium tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-3 h-px bg-[#D4AF37]/30 group-hover:w-5 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-[#D4AF37] text-[10px] font-black tracking-[0.3em] uppercase mb-5">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  'Interior Vacuum Cleaning',
                  'Underchassis Wash',
                  'Foam Exterior Wash',
                  'Tyre Polish',
                  'Dashboard Polish',
                ].map((s) => (
                  <li key={s} className="text-[#F5F5F5]/30 text-xs font-medium tracking-wider">{s}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-[#D4AF37] text-[10px] font-black tracking-[0.3em] uppercase mb-5">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#D4AF37] text-sm mt-0.5 flex-shrink-0" />
                  <span className="text-[#F5F5F5]/40 text-xs font-medium leading-relaxed">
                    16th Cross, Pai Layout, Bengaluru
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#D4AF37] text-xs flex-shrink-0" />
                  <div className="space-y-1">
                    <a href="tel:+919901995353" className="block text-[#F5F5F5]/40 hover:text-[#D4AF37] text-xs font-medium transition-colors">
                      +91 9901995353
                    </a>
                    <a href="tel:+917975843550" className="block text-[#F5F5F5]/40 hover:text-[#D4AF37] text-xs font-medium transition-colors">
                      +91 7975843550
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/917975843550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <FaWhatsapp className="text-[#25D366] text-sm flex-shrink-0" />
                  <span className="text-[#F5F5F5]/40 hover:text-[#25D366] text-xs font-medium transition-colors">
                    Chat on WhatsApp
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F5F5F5]/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F5F5]/20 text-[10px] font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} PUTZEN Premium Auto Care. All Rights Reserved.
          </p>
          <p className="text-[#F5F5F5]/15 text-[10px] font-medium tracking-wider">
            Spotless. Shiny. PUTZEN.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
