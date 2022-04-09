import React, {useState} from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";


export const HeaderMobile = () => {

	var logo = "logo.png"


	const [navbarOpen, setNavbarOpen] = useState(false)
	
	
	const handleToggle = () => {
		setNavbarOpen(prev => !prev)
	}
	
	const closeMenu = () => {
  setNavbarOpen(false)
}
	
  return (
  
  <>
       <nav className="navBar">

              
                  <li
                    
                    className="logo"
                  >
				  <img
                    height="150px"
                    src={logo}
                    alt="logo"
                  />                 </li>
             
          
    <button onClick={handleToggle}>{navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )}</button>
    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>

	<li
                
                className="anchor"
              >
                <AnchorLink offset="70" href="#home" onClick={() => closeMenu()}>
                  Home
                </AnchorLink>
              </li>
			  
			  <li
                
                className="anchor"
              >
                <AnchorLink offset="155" href="#products" onClick={() => closeMenu()}>
                  Products
                </AnchorLink>
              </li>
			  
              <li
                
                className="anchor"
              >
                <AnchorLink offset="155" href="#services" onClick={() => closeMenu()}>
                  Services
                </AnchorLink>
              </li>
              <li
                
                className="anchor"
              >
                <AnchorLink offset="70" href="#about" onClick={() => closeMenu()}>
                  About
                </AnchorLink>
              </li>
             
              <li
               
                className="anchor"
              >
                <AnchorLink offset="70" href="#contact" onClick={() => closeMenu()}>
                  Contact
                </AnchorLink>
              </li>
	
	</ul>
  </nav>
  </>
  );
};

