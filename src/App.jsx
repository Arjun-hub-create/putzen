import { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Lenis from 'lenis';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';
import ChatBot from './components/ChatBot';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import MotorcycleDetailing from './components/MotorcycleDetailing';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2.5s then fade out
    const timer = setTimeout(() => setIsLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>PUTZEN Premium Auto Care | Premium Car & Bike Detailing in Bengaluru</title>
        <meta name="description" content="PUTZEN Premium Auto Care - Premium Car & Bike Detailing in Bengaluru. Professional detailing solutions. Spotless. Shiny. PUTZEN." />
        <meta property="og:title" content="PUTZEN Premium Auto Care" />
        <meta property="og:description" content="Premium detailing solutions for cars and motorcycles in Bengaluru." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://putzen.in" />
      </Helmet>

      {/* Loader */}
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <div className="relative">
          <Navbar />
          <FloatingButtons />
          <ChatBot />
          <main>
            <Hero />
            <TrustBar />
            <Services />
            <MotorcycleDetailing />
            <Pricing />
            <WhyChooseUs />
            <Gallery />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </HelmetProvider>
  );
}

export default App;
