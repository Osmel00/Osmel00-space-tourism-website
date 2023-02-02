import { React, useState } from "react";
import Header from "../components/Header";
import { SubTechnology } from "../components/SubTechnology";
import { info } from "../jsonObject/ObjectInfo";
import { motion } from "framer-motion";
const imagenes = require.context("../images/icons-images/technology", true);
const Technology = () => {
  const [tech, setTech] = useState(0);
  return (
    <section className="technology min-h-[710px] h-screen">
      <Header />
      <motion.div 
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:2}}
       exit={{opacity:0}}
     
      className="flex flex-col items-center gap-y-[30px] md:pt-[30px]  xl:justify-between xl:pl-[150px] xl:mt-[80px] ">
       
        <h4 className="text-base text-white text-center uppercase  font-['Barlow_Condensed'] tracking-[5.5px] md:self-start md:px-[39px] xl:text-[28px] xl:px-0 xl:text-left">
          <span className="text-slate-600">03</span> SPACE LAUNCH 101
        </h4>

        <div className="w-full h-[170px] xl:hidden">
          <img
            className="mx-auto"
            src={imagenes(`./${info.technology[tech].img}`)}
          />
        </div>
        <div className="xl:flex xl:w-full xl:justify-between">
        <div className="xl:flex xl:items-center">
        <div className="menu w-[152px] h-[40px] mb-[20px] flex justify-between mx-auto cursor-pointer md:mt-[150px]  md:w-[210px] md:h-[60px] xl:flex-col  xl:m-0 xl:h-[303px] xl:w-[100px] xl:text-[32px]">
          <div className="hover:bg-white hover:text-black w-[40px] h-[40px] text-white bor rounded-full border-solid border border-[#383B4B] flex items-center justify-center  md:w-[60px] md:h-[60px] xl:mb-[15px] xl:w-[80px] xl:h-[80px] " onClick={()=> setTech(0)}>1</div>
          <div className="hover:bg-white hover:text-black w-[40px] h-[40px] text-white bor rounded-full border-solid border border-[#383B4B] flex items-center justify-center md:w-[60px] md:h-[60px] xl:mb-[15px] xl:w-[80px] xl:h-[80px] "onClick={()=> setTech(1)}>2</div>
          <div className="hover:bg-white hover:text-black w-[40px] h-[40px] text-white bor rounded-full border-solid border border-[#383B4B] flex items-center justify-center md:w-[60px] md:h-[60px] xl:w-[80px] xl:h-[80px] "onClick={()=> setTech(2)}>3</div>
        </div>
        <SubTechnology typeTech={info.technology[tech].typeTech} text={info.technology[tech].text}/>
        </div>
        
        <img
            className="hidden xl:block xl:w-[515px] xl:h-[527px] xl:bg-cover xl:bg-center"
            src={imagenes(`./${info.technology[tech].imgXL}`)}
          />
          </div>
      </motion.div>
    </section>
  );
};
export default Technology;
