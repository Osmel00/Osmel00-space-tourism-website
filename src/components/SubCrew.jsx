import React from "react";
export const SubCrew = ({ rango, name, text }) => {
  return (
    <div className="flex flex-col items-center md:pt-[40px] md:w-[580px]  xl:items-start xl:w-full">
      <p className="text-[#979797] text-[16px] md:text-[24px] xl:text-[32px] uppercase">{rango}</p>
      <p className="text-white text-[24px] uppercase md:text-[40px] md:pb-[10px] xl:text-[56px]">{name}</p>
      <p className="text-center text-[#D0D6F9] font-['Barlow'] w-[327px] mb-[30px] md:w-full   xl:text-left xl:pr-[200px] xl:text-[18px]">
        {text}
      </p>
    </div>
  );
};
