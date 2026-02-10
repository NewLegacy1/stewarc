
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center">
        <span className="font-black tracking-tighter text-2xl uppercase italic">
          Official <span className="text-blue-500">Stew</span>
        </span>
      </div>
    </nav>
  );
};
