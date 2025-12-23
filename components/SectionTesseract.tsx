
import React from 'react';
import Separator from './Separator';

const SectionTesseract: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="tesseract-style flex flex-col lg:flex-row min-h-screen">
      {/* Half Black */}
      <div className="lg:w-1/2 bg-black p-10 lg:p-24 flex flex-col justify-between border-r border-white/5">
        <div className="text-[10px] text-white/40 uppercase tracking-[0.5em]">The Archive // Dimension 05</div>
        <div className="my-20">
          <h1 className="text-white text-7xl lg:text-9xl font-black uppercase leading-none tracking-tighter">THE<br />BOOK<br />APP.</h1>
          <p className="text-white/60 mt-10 max-w-sm text-sm uppercase leading-loose">
            Inspired by the Interstellar Tesseract. An infinite library where every volume is a coordinate in space-time. Bold statement. Infinite knowledge.
          </p>
        </div>
        <a href="https://www.ataka.cl" target="_blank" className="px-10 py-5 bg-[#E3DCC8] text-black font-black uppercase tracking-widest text-center hover:bg-white transition-all">
          Access Archive
        </a>
      </div>
      
      {/* Half Book Color */}
      <div className="lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center relative overflow-hidden">
        <div className="grid grid-cols-4 gap-4 h-full py-10 opacity-20">
          <div className="bg-black/10 w-full h-full"></div>
          <div className="bg-black/20 w-full h-[80%] mt-auto"></div>
          <div className="bg-black/5 w-full h-full"></div>
          <div className="bg-black/30 w-full h-[60%]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="text-center">
            <span className="book-serif text-5xl lg:text-7xl block mb-6">Restraint as Ambition.</span>
            <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-40">Library of Dimensions</p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <Separator />
        </div>
      </div>
    </section>
  );
};

export default SectionTesseract;
