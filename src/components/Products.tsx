import React, {useState} from 'react';
import "../scss/buttons.scss";
import Button from 'react-bootstrap/Button';

export const Products = () => {
	
	var tshirt = "gildan-tee.png"
	var drawstring = "drawstring.png"
	var bcaps = "blank-caps.png"
  return (
    <>
	<h1 className="font-weight-bold"> Products </h1>
		<div className="collection" id="products">
			
			<div>
			<img
                    height="150px"
                    src={tshirt}
                    alt="Stock t-shirt"
                  />
				  <p className="thick"> Shirts </p>
			</div>
				  
			<div>

			<img
                    height="150px"
                    src={drawstring}
                    alt="Stock pullover"
                  />	  
				  
			<p className="thick"> Sweatshirts </p>
			
			</div>
			<div>

			<img
                    height="150px"
                    src={bcaps}
                    alt="Stock baseball caps"
                  />	
				  
				  <p className="thick"> Hats </p>
			</div>
	

				
						</div>
  
<button type="button" className="btn btn-primary btn-lg btn-radius">Browse Products</button>

  <br></br>
				<br></br>
		</>
  
  );
};

