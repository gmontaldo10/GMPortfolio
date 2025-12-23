
import React from 'react';
import Separator from './Separator';

const SectionKon: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="kon-style justify-center relative overflow-hidden p-10 lg:p-24">
      <div className="absolute inset-0 bg-[#d0006e] opacity-20 mix-blend-multiply"></div>
      <div className="grid lg:grid-cols-2 gap-20 items-center z-10">
        <div className="space-y-10">
          <div className="inline-block px-4 py-1 border-2 border-white text-xs font-black uppercase">Dream Phase: 04</div>
          <h2 className="text-8xl lg:text-[10vw] font-black uppercase leading-none tracking-tighter italic">MOVIE<br />APP.</h2>
          <p className="text-xl font-bold max-w-md leading-relaxed">
            Where the boundary between the interface and the observer dissolves. A psychological layering of cinema discovery.
          </p>
          <a href="https://www.ataka.cl" target="_blank" className="inline-block px-8 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Enter Reality
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 border-4 border-black/20 kon-fragment"></div>
          <div className="relative bg-white p-2 kon-fragment shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="absolute top-0 right-0 p-4 bg-black text-white font-black text-4xl italic">今</div>
        </div>
      </div>
      <div className="mt-20 z-10 text-center">
        <Separator />
      </div>
    </section>
  );
};

export default SectionKon;
