import React from "react";
import Header from "../components/Header";
import { SubDestination } from "../components/SubDestination";
import { info } from "../jsonObject/ObjectInfo";
import { useState } from "react";
import { useContext } from "react";
import { Contexto } from "../contexto/Context";
import { motion} from "framer-motion";
const imagenes = require.context("../images/icons-images/destination", true);
const Destination = () => {
  const { subMenu, setSubMenu } = useContext(Contexto);
  const [destination, setDestination] = useState(0);


  return (
    <>
      <section className="destination min-h-[850px] h-screen">
        <Header />
        <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:2}}
         exit={{opacity:0}}
        className="xl:flex justify-evenly xl:items-center xl:mt-[100px] xl:h-[650px]">
          <div className="flex flex-col gap-y-[30px] items-center mb-[30px]  md:px-[39px] md:pt-[30px] md:h-[450px] md:gap-y-[60px] xl:self-start">
            <h4 
            
            className="text-base text-white text-center uppercase  font-['Barlow_Condensed'] tracking-[5.5px] md:self-start xl:text-[28px] xl:pr-[125px]">
              <span className="text-slate-600">01</span> Pick your destinatioN
            </h4>
            
            <div className="w-[170px] h-[170px] rounded-full md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px] cursor-pointer">
              {/* <img src={moon} alt="" />  */}
              <motion.img
               whileHover={{scale:1.1}}
               animate={{rotate: destination === 1 ? 360 : destination === 2 ? 0 :destination === 3 ? -360 : -500}}
               
               transition={{duration:1}}
               
              src={imagenes(`./${info.destination[destination].img}`)} />
            </div>
         
          </div>
          {/* aqui va el nav moon mars europa titan */}
          <div className="xl:flex xl:flex-col">
            <ul className="text-white font-['Barlow_Condensed'] tracking-[3.5px] text-[15px] w-[237.5px] mx-auto flex justify-between mb-[10px] xl:m-0">
              <li>
                <a
                  className="md:transition-all hidden:border-b-2 pb-1.5 hover:border-b-2"
                  href="#"
                  onClick={() => setDestination(0)}
                >
                  MOON
                </a>
              </li>
              <li>
                <a
                  className="md:transition-all hidden:border-b-2 pb-1.5 hover:border-b-2"
                  href="#"
                  onClick={() => setDestination(1)}
                >
                  MARS
                </a>
              </li>
              <li>
                <a
                  className="md:transition-all hidden:border-b-2 pb-1.5 hover:border-b-2"
                  href="#"
                  onClick={() => setDestination(2)}
                >
                  EUROPA
                </a>
              </li>
              <li>
                <a
                  className="md:transition-all hidden:border-b-2 pb-1.5 hover:border-b-2"
                  href="#"
                  onClick={() => setDestination(3)}
                >
                  TITAN
                </a>
              </li>
            </ul>

            {/* Final moon mars europa titan */}

            <SubDestination
              title={info.destination[destination].title}
              text={info.destination[destination].text}
              distance={info.destination[destination].distance}
              travelTime={info.destination[destination].travelTime}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Destination;
