
import React from 'react';
import Separator from './Separator';

const SectionGalaxy: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="nolan-style vertical-grid justify-between p-10 lg:p-24 bg-[#05070a]">
      {/* Top Header - Maintained exactly as requested */}
      <div className="flex justify-between items-start z-10 w-full">
        <div className="space-y-1">
          <span className="block text-[10px] opacity-40 uppercase tracking-[0.3em]">Status: Temporal Sync</span>
          <span className="block text-[10px] opacity-40 uppercase tracking-[0.3em]">Ref: Chronos_System</span>
        </div>
        <span className="text-[10px] border border-white/20 px-3 py-1">EPOCH: 1734912000</span>
      </div>
      
      {/* Updated Body Content - Galaxy and Time related */}
      <div className="max-w-6xl z-10 w-full">
        <h1 className="text-7xl lg:text-9xl font-black uppercase mb-10 tracking-tighter">GALAXY &<br />DEEP TIME.</h1>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 group relative overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
            <img 
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800" 
              alt="Cosmic Nebula"
              className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 p-4 bg-black/80 backdrop-blur-sm border border-white/10">
               <p className="text-[9px] text-white/50 tracking-widest uppercase">Event Horizon 0.94x</p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="h-px bg-white/20 w-1/2"></div>
            <h2 className="text-4xl font-bold tracking-[0.2em] uppercase">Cosmos Tracker</h2>
            <p className="text-[11px] uppercase leading-loose opacity-60 max-w-md">
              A navigational engine that maps the expansion of celestial bodies across the fourth dimension. Built for explorers of the infinite, where seconds are measured in parsecs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
                Stellar Schematics
              </a>
              <button className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-6 py-3 hover:border-blue-400 transition-all">
                Sync Orbit
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Centered Separator */}
      <div className="z-10 mt-10 w-full text-center">
        <Separator />
      </div>

      <div className="text-[12vw] font-black opacity-[0.03] pointer-events-none absolute bottom-0 right-0 leading-none select-none">COSMOS</div>
    </section>
  );
};

export default SectionGalaxy;
