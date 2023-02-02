import {useEffect,useState} from "react";
import Header from "../components/Header";
import { motion, spring } from "framer-motion"
const Home = () => {
  const fadeLeft = {
        hidden:{opacity:0,x:-100},
        visible:{opacity:1,x:0},
  }
  
  const fadeTop = {
    hidden:{opacity:0,y:-100},
    visible:{opacity:1,y:0},
}
const [windows,setWindows] = useState(window.innerWidth);
  useEffect(()=>{
     window.addEventListener('resize',()=>setWindows(window.innerWidth));
  },[])
console.log(windows);
  return(
     <>
      <Header/>
      <section className="home flex flex-col gap-y-[100px] items-center  md:pt-[70px] min-h-[710px] h-screen  xl:flex-row xl:justify-around xl:h-[800px]">
         <motion.div
         initial={{scale:0}}
         animate={{scale:1}}
         transition={{duration:2,type:'spring'}}
         exit={{scale:0}}
         className="info-home mx-auto w-[327px] h-[276px] md:w-[450px] md:h-[334px]  xl:m-0">
             <h4 className="text-base text-[#D0D6F9] text-center font-['Barlow_Condensed'] tracking-[5.5px] xl:text-[28px] xl:text-left">
                SO, YOU WANT TO TRAVEL TO
             </h4>
             
             
             
             <h1 className="text-[80px] text-white text-center md:text-[150px]">SPACE</h1>
             <p 
            
              className="text-[15px] text-white text-[#D0D6F9] text-center font-sans tracking-[0.6px] xl:text-left xl:text-[18px] xl:leading-8 xl:pr-[0px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
             
         </motion.div>
         <motion.div 
          variants={fadeTop}
          initial='hidden'
          animate='visible'
          transition={{duration:1}}
          whileHover={windows >= 1440?{backgroundColor:'#97979733'}:null} //xl:hover:bg-[#979797]/20
          className=" xl:cursor-pointer   xl:w-[450px] xl:h-[450px] xl:rounded-full xl:flex xl:justify-center xl:items-center  xl:mt-[70px]">
         <div className="w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center text-[20px] md:w-[242px] md:h-[242px] md:text-[32px]  xl:w-[274px] xl:h-[274px]">EXPLORE</div>
         </motion.div>
         
      </section>
      
      </>
    );
} 

export default Home;