import React from "react";
import Logo from "./Logo";
import { Navbar } from "../components/Navbar";
import { IconHamburger, IconClose } from "./Icons";
import { useState,useEffect } from "react";
import { motion} from "framer-motion";

export default function Header() {
 const[hamburger,setHamburger] = useState(true);
 const changeHamburger = (e) => {
   if(e.target){
     setHamburger(!hamburger);
   }
 }

 const [windows,setWindows] = useState(window.innerWidth);
 useEffect(()=>{
    window.addEventListener('resize',()=>setWindows(window.innerWidth));
 },[])
console.log(windows);
  return (
     <div className=" container md:w-screen  xl:max-w-[1400px] p-[24px] flex justify-between items-center md:p-[0px]  md:h-[96px] md:pl-[39px] xl:relative xl:top-[40px] xl:pl-[55px]">
      <Logo />
      <hr className="hidden w-[473px] h-0.5 border-[#383B4B] z-10 xl:block xl:absolute xl:left-[165px]" />
    
      <motion.div 
      animate={windows < 768 ? {x: hamburger?-3000:0, }:{display:'block'}}
     
   
      className={`border absolute top-0 bottom-0 right-0 left-[121px] backdrop-blur-xl pt-[90px] pl-[40px] tracking-[0.2em] md:border-0  md:block md:static md:pt-[0px] md:pl-[0px] md:w-[450px] md:h-[96px] md:backdrop-filter-none md:bg-[#151923]  xl:backdrop-blur-3xl xl:bg-[#979797]/10 xl:bg-inherit xl:w-[830px] z-[100] xl:tracking-[0.25em] `}>
        <Navbar />
      </motion.div>
      
       <div className="cursor-pointer z-[101] md:hidden" onClick={changeHamburger}>
        {hamburger? <IconHamburger/>: <IconClose/>}
         
       </div>
     
    </div>
  );
}
