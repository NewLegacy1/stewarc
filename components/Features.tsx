
import React from 'react';
import { Utensils, Dumbbell, PhoneCall, MessageCircle } from 'lucide-react';

export const Features: React.FC = () => {
  const items = [
    {
      title: 'The Arc Nutrition Plan',
      desc: 'No more guessing. I design a protocol that kills the skinny-fat look and feeds the muscle without making your life miserable.',
      icon: <Utensils className="text-blue-500" size={32} />,
    },
    {
      title: 'Hyper-Growth Training',
      desc: 'Every rep counts. We focus on progressive overload and high-intensity mechanics to force your body to change.',
      icon: <Dumbbell className="text-blue-500" size={32} />,
    },
    {
      title: 'Weekly Calls',
      desc: 'Weekly check-ins aren\'t enough. We have strategic calls to make sure your discipline is iron-clad and your head is in the game.',
      icon: <PhoneCall className="text-blue-500" size={32} />,
    },
    {
      title: 'Direct Personal Cell',
      desc: 'You get my personal number. No VAs. No bots. Just me in your corner making sure you don\'t slip up.',
      icon: <MessageCircle className="text-blue-500" size={32} />,
    },
  ];

  return (
    <section id="included" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              THIS IS YOUR <span className="text-blue-500 italic">TRANSFORMATION</span> <br />
              FROM THE GROUND UP.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              If you're tired of being the small guy in the room, the unmotivated guy at the office, 
              or the guy who never follows through—The Stew Arc is your solution. 
              <span className="text-white"> We build men of substance here.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div key={i} className="p-8 border border-white/5 rounded-3xl bg-gradient-to-br from-white/5 to-transparent hover:border-blue-500/30 transition-all duration-300 group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white italic tracking-tight uppercase">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
