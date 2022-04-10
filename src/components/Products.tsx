import React, {useState} from 'react';



export const Products = () => {
	
	var tshirt = "gildan-tee.png"
	var drawstring = "drawstring.png"
	var bcaps = "blank-caps.png"
  return (
    
		<div className="products-sec" id="products">
			<h1> Products </h1>
			<img
                    height="200px"
                    src={tshirt}
                    alt="Stock t-shirt"
                  />
				  <p className="thick"> Shirts </p>

				  <br></br>
				<br></br>

			<img
                    height="200px"
                    src={drawstring}
                    alt="Stock pullover"
                  />	  
				  
			<p className="thick"> Sweatshirts </p>
			
			
			
			<img
                    height="200px"
                    src={bcaps}
                    alt="Stock baseball caps"
                  />	
				  
				  <p className="thick"> Hats </p>
				  
				  <button type = "button"  className = "browseBtn"> Browse Products</button>

		</div>
  
  );
};

