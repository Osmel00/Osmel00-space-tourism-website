import React, {useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Contex } from "../contexto/Context";



export const RootLayout = () => {
  
  
  return (
    <>
      {/* <Header/> */}
    
      <main>
      
        <Contex>
          <Outlet/>
        </Contex>
      </main>
      
    </>
  );
};
