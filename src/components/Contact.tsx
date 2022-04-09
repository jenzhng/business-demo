import React, {useState} from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";


export const Contact = () => {
  return (
  
  <div className="form-name" id="contact">
  
  <h1> Contact </h1>
     <form>
		 <div className = "field1">
            
            <input placeholder="Name"/>     
				<br></br>
				<br></br>

            <input placeholder="E-mail"/>
				<br></br>
				<br></br>

            <textarea placeholder="Message"/>
				<br></br>
				<br></br>

            </div>

            <button type = "submit" id= "submitBtn" className = "submitBtn"> submit</button>
		
	 </form>
	 </div>
  );
};

