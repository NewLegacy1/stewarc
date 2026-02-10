
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white">
      {/* Dynamic Cursor Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`
        }}
      />

      {/* Background Layer */}
      <div className="fixed inset-0 bg-grid z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-black z-0 pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TrustStrip />
          <Features />
          <Testimonials />
          
          {/* Final CTA Section */}
          <section className="py-24 px-6 border-y border-blue-900/20 bg-blue-950/10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                STOP <span className="text-blue-500">NEGOTIATING</span> WITH YOURSELF.
              </h2>
              <p className="text-xl text-blue-200/70 max-w-2xl mx-auto">
                I only work with serious individuals. If you're ready to stop making excuses and start building a life you're proud of, click below.
              </p>
              <button className="group relative px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 glow-blue">
                <span className="relative z-10 uppercase tracking-widest">APPLY FOR THE STEW ARC</span>
                <div className="absolute inset-0 rounded-full bg-blue-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
