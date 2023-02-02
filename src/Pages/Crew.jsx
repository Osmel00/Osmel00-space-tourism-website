import React from "react";
import Header from "../components/Header";
import { info } from "../jsonObject/ObjectInfo";
import { useState } from "react";
import { motion } from "framer-motion";
import { SubCrew } from "../components/SubCrew";
const imagenes = require.context("../images/icons-images/crew", true);

const Crew = () => {
  //const { subMenu, setSubMenu } = useContext(Contexto);
  const [crew, setCrew] = useState(0);
  return (
    <section className="crew min-h-[710px] h-screen md:relative">
      <Header />
      
      <motion.div 
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:2}}
       exit={{opacity:0}}
      
      >
      
      <div className="flex flex-col gap-y-[30px] items-center mb-[30px] md:px-[39px] xl:items-start xl:h-[800px] xl:w-[800px] xl:pl-[150px] xl:pr-0 xl:justify-center xl:items-start">
        <h4 className="text-base text-white text-center uppercase  font-['Barlow_Condensed'] tracking-[5.5px] md:self-start xl:text-[28px]">
          <span className="text-slate-600">02</span> Meet your crew
        </h4>
        <div className="w-[327px] h-[223px] md:hidden">
          <div>
            <img
              className="w-[177px] h-[223px] mx-auto"
              src={imagenes(`./${info.crew[crew].img}`)}
            />
            <hr className="w-[327px] border-[#383B4B]" />
          </div>
        </div>
        <div className="hidden md:block">
          <SubCrew
            rango={info.crew[crew].rango}
            name={info.crew[crew].name}
            text={info.crew[crew].text}
          />
        </div>
        <div>
          <ul className="flex w-[88px] justify-between cursor-pointer xl:relative xl:top-[100px] xl:w-[132px]">
            <li>
              <div
                className="w-[10px] h-[10px] bg-[#979797] rounded-full hover:bg-white xl:w-[15px] xl:h-[15px]"
                onClick={() => setCrew(0)}
              ></div>
            </li>
            <li>
              <div
                className="w-[10px] h-[10px] bg-[#979797] rounded-full hover:bg-white  xl:w-[15px] xl:h-[15px]"
                onClick={() => setCrew(1)}
              ></div>
            </li>
            <li>
              <div
                className="w-[10px] h-[10px] bg-[#979797] rounded-full hover:bg-white xl:w-[15px] xl:h-[15px]"
                onClick={() => setCrew(2)}
              ></div>
            </li>
            <li>
              <div
                className="w-[10px] h-[10px] bg-[#979797] rounded-full hover:bg-white xl:w-[15px] xl:h-[15px]"
                onClick={() => setCrew(3)}
              ></div>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        <SubCrew
          rango={info.crew[crew].rango}
          name={info.crew[crew].name}
          text={info.crew[crew].text}
        />
      </div>
  
        <img
          className="hidden  md:block md:w-[450px] md:h-[512px]   md:absolute  md:bottom-0 md:left-[159px] md:right-[200px] md:mx-auto xl:m-0 xl:left-[780px] xl:w-auto xl:h-auto "
          src={imagenes(`./${info.crew[crew].img}`)}
        />
     </motion.div>
    </section>
  );
};

export default Crew;
