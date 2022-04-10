import React, {useState} from 'react';



export const Services = () => {
	
	var dtgpic = "dtg-shirts.png"
	var screenpic = "screen-printing.png"
	var embroidery = "croix-lavender.png"
  return (
    
		<div className="services-sec" id="services">
			<h1> Services </h1>
			
			<img
                    height="200px"
                    src={dtgpic}
                    alt="Avatar placeholder"
                  />
				  <p className="thick"> Digital Printing </p>

				  <br></br>
				<br></br>

			<img
                    height="200px"
                    src={screenpic}
                    alt="Avatar placeholder"
                  />	  
				  
			<p className="thick"  > Screen Printing </p>
			
			
			
			<img
                    height="200px"
                    src={embroidery}
                    alt="Avatar placeholder"
                  />	
				  
				  <p className="thick"> Embroidery </p>

		</div>
  
  );
};

