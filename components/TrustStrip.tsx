
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const TrustStrip: React.FC = () => {
  const socials = [
    { label: 'Instagram', value: '60K Followers', icon: <Instagram size={18} /> },
    { label: 'YouTube', value: '25K Subs', icon: <Youtube size={18} /> },
    { label: 'TikTok', value: '5K Followers', icon: <TikTokIcon size={18} /> },
  ];

  return (
    <div className="py-10 border-y border-white/5 bg-black/60 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-around items-center gap-8 md:gap-4">
          <span className="text-sm font-black tracking-widest text-blue-500 italic uppercase">The Community</span>
          {socials.map((social, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-blue-500">{social.icon}</div>
              <div className="flex flex-col md:flex-row items-baseline gap-2">
                <span className="text-white font-black text-xl tracking-tighter italic">{social.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
