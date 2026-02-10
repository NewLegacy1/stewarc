
import React, { useState } from 'react';
import { ArrowRight, Flame, Shield, Target, Lock, Play, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && phone) {
      setIsLocked(false);
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mx-auto">
            <Shield size={14} /> EXCLUSIVE ACCESS ONLY
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none max-w-5xl">
            ENTER THE <span className="text-blue-500 text-glow italic">STEW ARC</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-blue-100/60 max-w-3xl leading-relaxed mx-auto">
            I take guys who are skinny, lost, and unmotivated and I forge them into 
            <span className="text-white"> jacked, disciplined, and confident </span> 
            versions of themselves. This isn't for everyone. It's for the few who actually want to win.
          </p>
        </div>

        {/* VSL Integrated into Hero - Improved Mobile Responsiveness */}
        <div className="w-full max-w-4xl mx-auto">
          <div className={`relative ${isLocked ? 'min-h-[450px] md:aspect-video' : 'aspect-video'} rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group transition-all duration-500`}>
            {isLocked ? (
              <div className="absolute inset-0 z-20 flex items-center justify-center p-4 md:p-12 bg-black/60 backdrop-blur-sm">
                <div className="max-w-md w-full bg-black/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 md:p-8 space-y-4 md:space-y-6 text-center shadow-2xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-1 border border-blue-500/30">
                    <Lock className="text-blue-500" size={20} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold italic tracking-tight uppercase">Unlock The Training</h3>
                    <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider">Drop your info to watch how the Stew Arc works</p>
                  </div>
                  
                  <form onSubmit={handleUnlock} className="space-y-3 text-left">
                    <input 
                      type="text" 
                      placeholder="First Name..."
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white placeholder:text-gray-600 text-sm"
                    />
                    <input 
                      type="tel" 
                      placeholder="Mobile Number..."
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white placeholder:text-gray-600 text-sm"
                    />
                    <button 
                      type="submit"
                      className="w-full py-3 md:py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 group text-xs md:text-sm uppercase tracking-widest"
                    >
                      WATCH NOW <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
                
                <div className="absolute inset-0 -z-10 blur-sm opacity-30">
                  <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" alt="Preview" className="w-full h-full object-cover" />
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer">
                    <Play className="text-white ml-1" size={36} fill="white" />
                  </div>
                  <p className="text-blue-400 font-bold uppercase tracking-widest animate-pulse">Playing The Stew Arc Protocol...</p>
                </div>
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" alt="Training" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              </div>
            )}
          </div>
        </div>

        {/* Updated Stats Grid - Made smaller on mobile */}
        <div className="grid grid-cols-3 gap-2 md:gap-12 pt-8 w-full max-w-4xl">
          {[
            { label: 'Success Rate', value: '100%', icon: <Shield className="text-blue-500" size={16} /> },
            { label: 'Available', value: '3 LEFT', icon: <Flame className="text-blue-500" size={16} /> },
            { label: 'Avg. Result', value: '90 DAYS', icon: <Target className="text-blue-500" size={16} /> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center space-y-0 md:space-y-1 p-3 md:p-6 border border-white/5 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="mb-1 md:mb-2 scale-75 md:scale-100">{stat.icon}</div>
              <div className="text-lg md:text-4xl font-black text-white italic tracking-tighter whitespace-nowrap">{stat.value}</div>
              <div className="text-[7px] md:text-xs uppercase tracking-widest text-gray-500 font-bold text-center leading-none">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
