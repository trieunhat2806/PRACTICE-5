import React from "react";
import img1 from "./images/100.jpg";

type HeaderProps={
    style:React.CSSProperties;
}


const Header=(props:HeaderProps)=>{
    return(
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                <a className="navbar-brand" href="#">
                    <img src={img1} style={props.style} alt="Logo" />
                </a>
            </nav>
    )
}
export default Header;