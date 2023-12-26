import "./App.css";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { useRef } from "react";
import { updateButton,sleep } from "./App";

const phrase = [
  "Assistant Manager",
  "Keyholder",
  "Brand Representative",
  "Student",
  "Leader",
  "Administrator"
];

export default function NamePage() {
  const [buttonDisplay, setButtonDisplay] = useState("newpage-button"); 
  const elementRef = useRef(null); 
  updateButton(setButtonDisplay, "newpage-button display", 5000); 
  return (
    <div className="namepage-content" ref={elementRef}>
      <p className="namepage-title">
        Hello! I'm Alexis and I'm a
        <span className="namepage-typewriter">
          <Typewriter
            options={{
              strings: [...phrase],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </p>
      <img src="blank-pfp.png" alt="pfp" className="namepage-pfp"/>
      <div className="namepage-text-container">
        <p className="namepage-text">Hi! My name is Alexis Alaniz and I am an Assistant Manager at Willowbrook Hollister as well as a student at Houston Community College pursuing an Associates of Healthcare Administration.</p>
      </div>
      <button className={buttonDisplay} id="button-padding" onClick={()=> {
        window.scrollTo({
          top: (elementRef.current.offsetHeight),
          behavior: "smooth"
        })
        updateButton(setButtonDisplay, "newpage-button", 0)
      }
      }>My Experience <img src="down-arrow.png" alt="⌄"/></button>
    </div>
  );
}


