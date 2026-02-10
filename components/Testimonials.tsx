
import React, { useState } from 'react';
import { Quote, Trophy, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const michaelImages = [
  "https://media.igram.world/get?__sig=315UHe6eJ4CDpjFJeGyxtw&__expires=1770757892&uri=https%3A%2F%2Fscontent-lga3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F525350536_17852592492506348_4463482617531969333_n.jpg%3Fstp%3Ddst-jpg_e15_tt6%26_nc_ht%3Dscontent-lga3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_oc%3DQ6cZ2QEI_xZG2ju9ZjgI2dDJQ4EI34TK5eDWAnjDW7aHVKUc1ZF6B49RxC9r1rhI75_YbkOazzLX4HALrgi6G8_YAhqw%26_nc_ohc%3Dz2lMjfZX7LsQ7kNvwG21YI2%26_nc_gid%3DlO2u6e8TjpBRpAajFtr_4g%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AftrBzKzOMuY_zI8EwpYkkspg4RsyHgp722NoFW7xrfBpg%26oe%3D69915464%26_nc_sid%3Dd885a2&filename=525350536_17852592492506348_4463482617531969333_n.jpg",
  "https://media.igram.world/get?__sig=2qept5R_68LH6jkm-4tUmg&__expires=1770757892&uri=https%3A%2F%2Fscontent-lga3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F526359439_17852592462506348_1340981035579969953_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08_tt6%26_nc_ht%3Dscontent-lga3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_oc%3DQ6cZ2QEI_xZG2ju9ZjgI2dDJQ4EI34TK5eDWAnjDW7aHVKUc1ZF6B49RxC9r1rhI75_YbkOazzLX4HALrgi6G8_YAhqw%26_nc_ohc%3DY4LZaxTTR6AQ7kNvwHIWNd-%26_nc_gid%3DlO2u6e8TjpBRpAajFtr_4g%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfvUwLprbKFFyJ7vIh4M1VsOI2_JpUMH5WO7GJ24ViiUDQ%26oe%3D69915263%26_nc_sid%3Dd885a2&filename=526359439_17852592462506348_1340981035579969953_n.jpg",
  "https://media.igram.world/get?__sig=2C6hXpz_v5-xE8WS4mbuPg&__expires=1770757892&uri=https%3A%2F%2Fscontent-lga3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F526285591_17852592501506348_4005135387410389383_n.jpg%3Fstp%3Ddst-jpg_e15_tt6%26_nc_ht%3Dscontent-lga3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_oc%3DQ6cZ2QEI_xZG2ju9ZjgI2dDJQ4EI34TK5eDWAnjDW7aHVKUc1ZF6B49RxC9r1rhI75_YbkOazzLX4HALrgi6G8_YAhqw%26_nc_ohc%3DuBC6dB0tJ7sQ7kNvwHq5hjX%26_nc_gid%3DlO2u6e8TjpBRpAajFtr_4g%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_Afu76rl1GcvjoBRtKDM1m5aJB0OzKVsCSCmCSaTJOOmLnA%26oe%3D69916A71%26_nc_sid%3Dd885a2&filename=526285591_17852592501506348_4005135387410389383_n.jpg"
];

export const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % michaelImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + michaelImages.length) % michaelImages.length);
  };

  return (
    <section id="results" className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
        <div className="text-center space-y-2 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black tracking-widest uppercase mx-auto">
            <Star size={10} fill="currentColor" className="md:w-3 md:h-3" /> STUDENT SPOTLIGHT
          </div>
          <h2 className="text-3xl md:text-7xl font-black tracking-tighter uppercase italic">
            MEET <span className="text-blue-500">MICHAEL B</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto">
            From content creator to elite competitive lifter. 
            Real discipline, real science, real results.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Main Spotlight Card */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 p-4 md:p-10 lg:p-14 border border-white/10 rounded-[24px] md:rounded-[40px] bg-gradient-to-br from-zinc-900 to-black backdrop-blur-sm relative overflow-hidden">
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-8 text-blue-500/5 -rotate-12 pointer-events-none hidden md:block">
                <Trophy size={400} strokeWidth={1} />
              </div>

              {/* Slideshow Section */}
              <div className="flex-shrink-0 w-full lg:w-[420px] space-y-4 md:space-y-6">
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[20px] md:rounded-[32px] border border-white/10 shadow-2xl bg-black">
                   {michaelImages.map((img, idx) => (
                     <img 
                        key={idx}
                        src={img} 
                        alt={`Michael B - Slide ${idx + 1}`} 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      />
                   ))}
                   
                   {/* Navigation Arrows */}
                   <button 
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 bg-black/40 hover:bg-blue-600/80 backdrop-blur-md rounded-full text-white transition-all border border-white/10"
                   >
                     <ChevronLeft size={20} className="md:w-6 md:h-6" />
                   </button>
                   <button 
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 bg-black/40 hover:bg-blue-600/80 backdrop-blur-md rounded-full text-white transition-all border border-white/10"
                   >
                     <ChevronRight size={20} className="md:w-6 md:h-6" />
                   </button>

                   {/* Indicator Dots */}
                   <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                     {michaelImages.map((_, idx) => (
                       <button 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1 md:h-1.5 transition-all rounded-full ${idx === currentSlide ? 'w-6 md:w-8 bg-blue-500' : 'w-1.5 md:w-2 bg-white/20'}`}
                       />
                     ))}
                   </div>

                    <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-20 px-3 md:px-4">
                       <div className="px-4 py-2 md:px-6 md:py-3 bg-blue-600/90 backdrop-blur-sm text-[8px] md:text-[10px] font-black rounded-xl md:rounded-2xl tracking-widest uppercase text-center shadow-2xl border border-blue-400/30">
                        180 LBS STAGE WEIGHT
                      </div>
                    </div>
                </div>
                
                {/* Win List */}
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                  <div className="flex items-center gap-3 p-3 md:p-4 bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl group/win hover:border-blue-500/30 transition-all">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover/win:scale-110 transition-transform">
                      <Award size={16} className="md:w-5 md:h-5" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white italic leading-tight">1st Place - Teenage Classic Physique</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 md:p-4 bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl group/win hover:border-blue-500/30 transition-all">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover/win:scale-110 transition-transform">
                      <Award size={16} className="md:w-5 md:h-5" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white italic leading-tight">2nd Place - True Novice Classic Physique</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center space-y-6 md:space-y-10 relative z-10">
                <div className="space-y-1 md:space-y-3">
                  <div className="flex flex-col">
                    <h3 className="text-4xl md:text-8xl font-black text-white italic tracking-tighter leading-none">MICHAEL B.</h3>
                    <p className="text-blue-500 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] ml-0.5 mt-1 md:mt-2">Content Creator & Elite Competitor</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-5">
                  {[
                    { val: '-20 LBS', label: 'Fat Loss' },
                    { val: '10 WK', label: 'Bulk' },
                    { val: '15 WK', label: 'Prep' }
                  ].map((stat, i) => (
                    <div key={i} className="p-3 md:p-6 bg-white/5 border border-white/5 rounded-xl md:rounded-3xl text-center backdrop-blur-sm group/stat hover:bg-white/10 transition-all">
                      <div className="text-base md:text-4xl font-black text-white italic tracking-tighter group-hover/stat:text-blue-400 leading-none">{stat.val}</div>
                      <div className="text-[6px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-0.5 md:mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="relative pl-4 md:pl-6 border-l-2 md:border-l-4 border-blue-600/30">
                  <Quote size={30} className="text-blue-500/10 absolute -top-4 -left-2 -rotate-12 md:hidden" fill="currentColor" />
                  <Quote size={60} className="text-blue-500/10 absolute -top-8 -left-4 -rotate-12 hidden md:block" fill="currentColor" />
                  <p className="text-gray-300 text-sm md:text-xl leading-relaxed italic relative z-10 font-light">
                    "Genuinely one of the greatest experiences of my life. I want to thank my family and friends, but the biggest shoutout goes to my good friend and coach Stew. 
                    <span className="text-white font-black block mt-2 md:mt-4 md:bg-blue-600/10 md:p-4 md:rounded-2xl"> 
                      He put me through a 10 week bulk to get to 202lbs, then a 15 week prep that took me to 180lbs stage weight. Genuinely the greatest coach I've ever had.
                    </span>
                  </p>
                </div>

                <div className="pt-2 md:pt-6">
                  <button className="w-full md:w-auto flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-blue-600 text-white font-black text-[10px] md:text-xs tracking-widest uppercase rounded-xl md:rounded-2xl transition-all border border-white/10 group/btn">
                    VIEW FULL ARCHIVE <Trophy size={14} className="md:w-4 md:h-4 group-hover/btn:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
