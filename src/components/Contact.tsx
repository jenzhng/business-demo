import React, {useState} from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";


export const Contact = () => {
  return (
  
  <div className="form-name" id="contact">
  
  <h1 className="font-weight-bold"> Contact </h1>
<br></br>
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

            
		<button type="submit" id= "submitBtn"className="btn btn-primary btn-lg btn-radius">Submit</button>

	 </form>
	 </div>
  );
};
/* 
<button type = "submit" id= "submitBtn" className = "submitBtn"> submit</button> */