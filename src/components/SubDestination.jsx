import React from "react";

export const SubDestination = ({ title, text, distance,travelTime }) => {
  return (
    <div className="flex flex-col items-center md:w-[573px] mx-auto xl:items-start xl:w-[445px]">
      <h2 className="text-white text-[56px] md:text-[80px]">{title}</h2>
      <p className="text-center text-[#D0D6F9] font-['Barlow']  w-[327px] mb-[30px] md:w-full xl:text-left xl:w-[390px] xl:pr-[15px]">{text}</p>
      <hr className="w-[327px] border-[#383B4B] md:w-full xl:w-[359px]"/>
      <div className="md:flex md:justify-evenly md:items-center md:w-full xl:justify-start xl:gap-x-[90px] ">
      <div className="my-[30px] text-center">
        <h5 className="text-[15px]  text-[#D0D6F9] uppercase text-center pb-[10px] font-['Barlow_Condensed'] tracking-[2.36px] xl:text-left">AVG. DISTANCE</h5>
        <p className="text-white text-[28px]">{distance}</p>
      </div>
      <div className="text-center">
        <h5 className="text-[15px] text-[#D0D6F9] uppercase text-center pb-[10px] font-['Barlow_Condensed'] tracking-[2.36px] ">Est. travel time</h5>
        <p className="text-white text-[28px] xl:text-left">{travelTime}</p> 
      </div>
      </div>
    </div>
  );
};
