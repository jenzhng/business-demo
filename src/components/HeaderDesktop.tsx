import React, {useState} from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";



export const HeaderDesktop = () => {
	var logo = "logo.png"
	
  return (
 
 
     <> 

          <nav className="desktop">
            
              
              <li className="right">
                
                  <li
                    
                    className="logo"
                  >
				 
\                  </li>
              </li>
          </nav>
		  
		  <header>
          <nav
            className="desktop-full"
           
          >
            <ul >
              <li
             
                className="icon"
              >
			   <img
                    height="150px"
                    src={logo}
                    alt="logo"
                  />
			  
              </li>
              <li
                
                className="anchor"
              >
                <AnchorLink offset="70" href="#home">
                  Home
                </AnchorLink>
              </li>
			  
			  <li
                
                className="anchor"
              >
                <AnchorLink offset="155" href="#products">
                  Products
                </AnchorLink>
              </li>
			  
              <li
                
                className="anchor"
              >
                <AnchorLink offset="155" href="#services">
                  Services
                </AnchorLink>
              </li>
              <li
                
                className="anchor"
              >
                <AnchorLink offset="70" href="#about">
                  About
                </AnchorLink>
              </li>
             
              <li
               
                className="anchor"
              >
                <AnchorLink offset="70" href="#contact">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </nav>
		  </header>
        </>
  );
};

