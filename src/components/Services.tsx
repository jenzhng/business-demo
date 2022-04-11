import React, {useState} from 'react';



export const Services = () => {
	
	var dtgpic = "dtg-shirts.png"
	var screenpic = "screen-printing.png"
	var embroidery = "croix-lavender.png"
  return (
  
  <>
    <h1 className="font-weight-bold"> Services </h1>
		<div className="collection" id="services">
		
			
			<div>
			<img
                    height="150px"
                    src={dtgpic}
                    alt="direct-to-garment"
                  />
				  <p className="thick"> Digital Printing </p>

			</div>
			<div>

			<img
                    height="150px"
                    src={screenpic}
                    alt="screenprinting"
                  />	  
				  
			<p className="thick"  > Screen Printing </p>
			
			</div>

			<div>
			<img
                    height="150px"
                    src={embroidery}
                    alt="embroidery"
                  />	
				  
				  <p className="thick"> Embroidery </p>
			</div>
		</div>
  </>
  );
};

