import React, {useState, useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.scss';
import { HeaderDesktop } from './components/HeaderDesktop';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { HeaderMobile } from './components/HeaderMobile';




function App() {
	
	 const [windowWidth, setWindowSize] = useState(window.innerWidth)
	 const handleWindowResize = useCallback(event => {

      setWindowSize(window.innerWidth);

  }, []); 


  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);
  
  return (
    <div className="App">
	
	{windowWidth > 1200 ? <HeaderDesktop/> : <HeaderMobile/>}    
	 <Products/>

	 <Services/>
	 <About/>
	 <Contact/>
	 <Footer/>
    </div>
  );
}

export default App;
//{windowWidth > 1200 ? <HeaderDesktop/> : <HeaderMobile/>}    
