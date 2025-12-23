
import React from 'react';
import Separator from './Separator';

const SectionAkira: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="akira-style overflow-hidden bg-black flex flex-col">
      <div className="h-[35vh] bg-red-600 w-full diagonal-bar origin-left -mt-10 flex items-end p-10 lg:p-24">
        <h1 className="text-[16vw] font-black italic tracking-tighter leading-none text-black select-none">AKIRA</h1>
      </div>
      <div className="p-10 lg:p-24 grid lg:grid-cols-12 gap-10 flex-grow relative z-10">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-7xl font-black uppercase mb-8 leading-none">Cinema<br />App</h2>
          <p className="text-sm font-bold text-gray-400 max-w-sm leading-relaxed mb-10">
            Kinetic intensity meeting industrial utility. Built for the speed of Neo-Tokyo. 
          </p>
          <div className="flex">
            <a href="https://www.ataka.cl" target="_blank" className="px-10 py-4 bg-red-600 hover:bg-white hover:text-red-600 text-white font-black uppercase transition-colors">Launch Project</a>
          </div>
        </div>
        <div className="lg:col-span-7 relative">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" 
               className="w-full h-full object-cover grayscale brightness-50 mix-blend-screen border border-white/10" />
        </div>
      </div>
      <div className="pb-10 z-20 text-center">
        <Separator />
      </div>
    </section>
  );
};

export default SectionAkira;
