import React from "react";
import "../style-sheets/Logo.css"
import logo from "../images/shared/logo.svg"
import logoDesktop from "../images/shared/logo-desktop.svg"
 export default function Logo() {
    return(
        <div className="logo">
            <img className="xl:hidden"  src={logo}/>
            <img className="hidden xl:block" src={logoDesktop}/>
        </div>
    )
 }