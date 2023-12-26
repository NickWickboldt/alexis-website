import './App.css';
import { useState, useEffect } from 'react';

export default function Navbar(){

  const [opac, setOpacity] = useState("back-to-top"); 
  
  useEffect(() => {
    const handleScroll = (event) => {
      if(window.scrollY == 0){
        setOpacity("back-to-top");
      }else{
        setOpacity("back-to-top opac"); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }); 
  }

  return (
    <div className="nav" >
      <img src="logo.png" alt="logo" className="logo"/>
      <p className="nav-text">Alexis Alaniz</p>
      <button className={opac} onClick={() => scrollToTop()}>⮭</button>
    </div>
  )
}