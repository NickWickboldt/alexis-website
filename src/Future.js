import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import { useIsVisible } from "./Experience";
import { sleep } from "./App";

export default function Future(){
  const [isHCOClicked, setIsHCOClicked] = useState(false); 
  const [isHCCClicked, setIsHCCClicked] = useState(false); 
  const [isColoClicked, setIsColoClicked] = useState(false); 

  const [isSkillsetVisible, setIsSkillsetVisible] = useState("skillset-content"); 
  const [isEducationVisible, setIsEducationVisible] = useState("education-content"); 
  const [isLocationVisible, setIsLocationVisible] = useState("location-content"); 

  const [isSThumbnailVisible, setIsSThumbnailVisible] = useState("skillset-thumbnail"); 
  const [isEThumbnailVisible, setIsEThumbnailVisible] = useState("education-thumbnail"); 
  const [isLThumbnailVisible, setIsLThumbnailVisible] = useState("location-thumbnail"); 

  const visibilityRef = useRef();
  const isVisible = useIsVisible(visibilityRef);

  let HCOContent, HCCCOntent, ColoContent; 

  if(isVisible){
    if(!isSThumbnailVisible.includes("fade-in") && !isSThumbnailVisible.includes("blinking")){
      setIsSkillsetVisible("skillset-content fade-in"); 
      setIsSThumbnailVisible("skillset-thumbnail fade-in"); 
      setIsEducationVisible("education-content fade-in"); 
      setIsEThumbnailVisible("education-thumbnail fade-in"); 
      setIsLocationVisible("location-content fade-in"); 
      setIsLThumbnailVisible("location-thumbnail fade-in"); 
      startAnimations(setIsSkillsetVisible, setIsSThumbnailVisible, setIsEducationVisible, setIsEThumbnailVisible, setIsLocationVisible, setIsLThumbnailVisible); 
    }
  }else{
    if(isSThumbnailVisible.includes("blinking") || isSThumbnailVisible.includes("fade-in")){
      setIsSkillsetVisible("skillset-content no-opac");
      setIsSThumbnailVisible("skillset-thumbnail no-opac"); 
      setIsEducationVisible("education-content no-opac"); 
      setIsEThumbnailVisible("education-thumbnail no-opac"); 
      setIsLocationVisible("location-content no-opac"); 
      setIsLThumbnailVisible("location-thumbnail no-opac"); 
    }
  }

  if(isHCOClicked){
    HCOContent = <div className={isSkillsetVisible} onClick={() => {
      setIsHCOClicked(false); 
    }}>
      <div className="skillset-text">
        <h1>My Skillset</h1>
        <hr />
        <p>My skills include: Customer Service Excellence, Visual Merchandising, Sales and Upselling, Cash Handling, Managing POS Systems, Managing Teams and Collaboration, Leading and Supervising large teams of staff, Managing time and shift organization, Inventory Management, Problem Solving, Communication Skills, Adaptability, and Decision Making.</p>
      </div>
    </div>
  }else{
    HCOContent = <img src="hco-logo.png" alt="hco-logo" className={isSThumbnailVisible} onClick={() => {
      setIsHCOClicked(true); 
    }}/>
  }

  if(isHCCClicked){
    HCCCOntent = <div className={isEducationVisible} onClick={() => {
      setIsHCCClicked(false); 
    }}>
      <div className="education-text">
        <h1>My Education</h1>
        <hr />
        <p>In 2024, I anticipate graduating  with an Associates of Healthcare Administration from Houston Community College. Throughout my pursuit of this degree,, I have learned the importance of healthcare regulation and compliance, a wide range of medical and financial terminology, how to manage, store, and organize health information, basic financial principles as they relate to healthcare, and data entry into software such as Excel. </p>
      </div>
    </div>
  }else{
    HCCCOntent = <img src="hcc-logo1.png"  alt="hcc-logo1" className={isEThumbnailVisible} onClick={() => {
      setIsHCCClicked(true); 
    }}/>
  }

  if(isColoClicked){
    ColoContent = <div className={isLocationVisible} onClick={() => {
      setIsColoClicked(false); 
    }}>
      <div className="location-text">
        <h1>My Goals</h1>
        <hr />
        <p>In the next year, I hope to acquire an entry-level healthcare administration position as well as expand my connections in the healthcare field. Beyond this, I'd like to continue purusing career advancement and higher education. </p>
        <p>Also, I hope to move to Colorado (:</p>
      </div>
    </div>
  }else{
    ColoContent = <img src="colorado-flag.png" alt="flag" className={isLThumbnailVisible} onClick={() => {
      setIsColoClicked(true);
    }}/>
  }
  return (
    <div className="future-content" ref={visibilityRef}>
      {HCOContent}
      {HCCCOntent}
      {ColoContent}
    </div>
  )
}

async function startAnimations(setSV, setSTV, setEV, setETV, setLV, setLTV){
  await sleep(5000); 
  setSV("skillset-content opac"); 
  setSTV("skillset-thumbnail blinking"); 
  setEV("education-content opac"); 
  setETV("education-thumbnail blinking"); 
  setLV("location-content opac"); 
  setLTV("location-thumbnail blinking"); 
}