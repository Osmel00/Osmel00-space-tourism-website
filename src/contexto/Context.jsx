import { React, createContext, useContext, useState } from "react";

export const Contexto = createContext();

export const Contex = ({ children }) => {
  const [subMenu, setSubMenu] = useState(0);
  return (
    <Contexto.Provider value={{ subMenu, setSubMenu }}>
      {children}
    </Contexto.Provider>
  );
};
