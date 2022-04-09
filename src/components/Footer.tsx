import React, {useState} from 'react';



export const Footer = () => {
  return (
     <footer>
		<div className="social-links">
		<li>
		<span key="twitter" className="m-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-twitter'></i>
            </a>
          </span>
		</li>
				<li>

			<span key="instagram" className="m-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-instagram'></i>
            </a>
          </span>
		  </li>
		</div>
		   <div className="copyright">
			Copyright 2022
		   </div>
	 </footer>
  
  );
};

