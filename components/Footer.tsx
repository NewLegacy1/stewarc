
import React from 'react';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center font-black text-xl italic tracking-tighter">S</div>
            <span className="font-bold tracking-tighter text-xl uppercase italic">Stew <span className="text-blue-500">Nessy</span></span>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Leading high-performers to physical excellence through evidence-based training and ruthless discipline.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-blue-600 rounded-lg transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-blue-600 rounded-lg transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-blue-600 rounded-lg transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#vsl" className="hover:text-blue-400">Free Training</a></li>
            <li><a href="#included" className="hover:text-blue-400">Coaching Program</a></li>
            <li><a href="#results" className="hover:text-blue-400">Student Results</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Stew</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest font-bold">
        <span>&copy; 2024 STEW NESSY PERFORMANCE. ALL RIGHTS RESERVED.</span>
        <div className="flex items-center gap-2">
          <Mail size={14} /> HELLO@STEWNESSY.FIT
        </div>
      </div>
    </footer>
  );
};
