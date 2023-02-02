import React from "react";
export const SubTechnology = ({ typeTech, text }) => {
  return (
    <div className="flex flex-col items-center w-[327px] h-[220px] mx-auto md:w-[458px] md:h-[237px]  xl:items-start xl:w-[500px] xl:h-[303px]">
      <p className="text-[#D0D6F9] text-[14px] font-['Barlow_Condensed'] tracking-[2.36px] uppercase md:text-[16px]">The Terminology...</p>
      <p className="text-white text-[24px] uppercase pb-[20px] md:text-[40px] xl:text-[56px]">{typeTech}</p>
      <p className="px-[8px] text-center text-[#D0D6F9] font-['Barlow']  w-[327px] mb-[30px] md:w-full xl:w-[444px] xl:h-[192px] xl:text-left xl:text-[18px]">
        {text}
      </p>
    </div>
  );
};
