import React from 'react';

const texts = [
  "ADDA SIGNS",
  "DOOR SIGNS",
  "LOBBY SIGNS",
  "BUSINESS SIGNS",
  "ACRYLIC SIGNS",
  "STORE FRONT SIGNS",
  "BUILDING SIGNS",
  "PYLON SIGNS",
  "METAL SIGNS"
];

const MarqueeText = () => {
  return (
    <div className="marquee-container bg-[#ED1D26] text-[#0083CB]  h-28 flex items-center overflow-hidden" >
      <div className="marquee-track flex whitespace-nowrap animate-marquee items-center">
        {[...texts, ...texts].map((text, index, array) => (
          <>
          <span
            key={index}
            className="flex items-center text-white text-4xl font-bold px-6 "
          >
            {text}
            
          </span>
          {index !== array.length - 1 && (
              <span className="px-6 pt-[19px] text-white text-6xl font-bold ">*</span>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
