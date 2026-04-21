import React from 'react';

export default function LogoCloud() {
  // SVG Placeholders for Corporate Logos
  const logos = Array(7).fill(0).map((_, i) => (
    <div key={i} className="flex-shrink-0 w-[250px] flex items-center justify-center px-8 filter grayscale opacity-30 transition-all duration-500 hover:filter-none hover:opacity-100 hover:scale-110">
       <div className="text-brand-primary font-black text-2xl tracking-tighter uppercase italic flex items-center gap-2">
          <div className="w-6 h-6 bg-brand-primary rounded-sm" />
          VENTURE_{i+1}
       </div>
    </div>
  ));

  return (
    <div className="overflow-hidden relative w-full py-16 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
        <div className="flex">
          {logos}
        </div>
        <div className="flex">
          {logos}
        </div>
      </div>
    </div>
  );
}
