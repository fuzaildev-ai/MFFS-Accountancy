import React from 'react';

export default function LogoCloud() {
  const auditFirms = [
    { name: "Deloitte", icon: <span className="font-black text-4xl" style={{ color: "#86bc25" }}>Deloitte.</span> },
    { name: "PwC", icon: <span className="font-black text-4xl" style={{ color: "#e0301e" }}>pwc</span> },
    { name: "EY", icon: <span className="font-black text-4xl bg-[#ffe600] text-black px-2 py-1 leading-none">EY</span> },
    { name: "KPMG", icon: <span className="font-black text-4xl" style={{ color: "#00338d" }}>KPMG</span> },
    { name: "BDO", icon: <span className="font-black text-4xl" style={{ color: "#ed1a3b" }}>BDO</span> },
    { name: "Grant Thornton", icon: <span className="font-bold text-3xl" style={{ color: "#4a2e8e" }}>Grant Thornton</span> },
    { name: "RSM", icon: <span className="font-black text-4xl" style={{ color: "#00a3e0" }}>RSM</span> }
  ];

  const logos = auditFirms.map((firm, i) => (
    <div key={i} className="flex-shrink-0 w-[250px] flex items-center justify-center px-6 transition-all duration-500 hover:scale-110">
       {firm.icon}
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
