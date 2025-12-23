
import React from 'react';
import Separator from './Separator';

const SectionVoid: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="noe-style justify-center items-center overflow-hidden p-10 bg-black">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="z-10 text-center">
        <h1 className="text-[14vw] font-black uppercase italic leading-none noe-glitch tracking-tighter">THE GM</h1>
        <div className="mt-12 border-y-[1px] border-white/20 py-8">
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.5em]">Portfolio</h2>
          <p className="mt-3 text-xs text-[#ff0055] font-black tracking-widest uppercase">Provoke / Watch / Evolve</p>
        </div>
        
        <div className="mt-16">
          <Separator />
        </div>
      </div>
    </section>
  );
};

export default SectionVoid;
