
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const Navbar = () => {
  
  return (
   
   
     <nav className="text-white uppercase font-['Barlow_Condensed']">
         <ul className="flex flex-col gap-y-[30px] md:flex md:flex-row md:items-center md:justify-evenly md:text-[14px]  xl:w-[542px] xl:mx-auto">
            <li className=" md:py-[36px] xl:px-[5px]">
          <Link to={"/"} className=" md:hidden:border-b-2  md:hover:border-b-2 md:py-[36px]"><span className="pr-[10px] font-bold md:hidden xl:inline-block xl:pr-[7px]">00</span>Home</Link>
           </li>
           <li className="xl:px-[5px]">
              <Link to={"/Destination"}className=" md:hidden:border-b-2 md:hover:border-b-2 md:py-[36px]"><span className="pr-[10px] font-bold md:hidden xl:inline-block  xl:pr-[7px]" >01</span> Destination</Link>
           </li>
           <li className="xl:px-[5px]">
             <Link to={"/Crew"}className=" md:hidden:border-b-2 md:hover:border-b-2 md:py-[36px]"><span className="pr-[10px] font-bold md:hidden xl:inline-block  xl:pr-[7px]">02</span>Crew</Link>
           </li>
           <li>
              <Link to={"/Technology"}className="md:hidden:border-b-2 md:hover:border-b-2 md:py-[36px]"> <span className="pr-[10px] font-bold md:hidden xl:inline-block  xl:pr-[7px]">03</span>Technology</Link>
           </li>
          </ul> 
       </nav>
   
       
      
      

 
   



     
    
 );
};
