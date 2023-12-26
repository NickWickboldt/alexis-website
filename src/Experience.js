import "./App.css";
import { useState, useEffect, useRef } from "react";
import { updateButton} from "./App";

export default function Experience() {
  const visibilityRef = useRef();
  const elementRef = useRef();
  const [buttonDisplay, setButtonDisplay] = useState("newpage-button");
  const [containerVisibility, setContainerVisibility] = useState("job-container"); 
  const isVisible = useIsVisible(visibilityRef);

  if (isVisible) {
    updateButton(setButtonDisplay, "newpage-button display", 5000);
    if(!containerVisibility.includes("fade-in")){
      setContainerVisibility("job-container fade-in");
    }
  }else{
    if(containerVisibility.includes("fade-in")){
      setContainerVisibility("job-container");
    }
  }
  return (
    <div className="handle-button" ref={elementRef}>
      <div className="experience-content" >
        <div className="timeline">
          <p>2020</p>
          <hr />
          <p>2024</p>
        </div>
        <div className="experience-job-containers">
          <div className={containerVisibility}>
            <p className="job-loc">Willowbrook Hollister</p>
            <p className="job-title">Brand Representative</p>
            <p className="job-duration">2020 - 2021</p>
            <hr />
            <p className="job-desc">Responsible for embodying Hollister's laid-back and beach-inspired lifestyle, providing exceptional customer service, and maintaining a visually appealing store environment. This included engaging with customers, assisting in product selection, standardizing shelves and tables, and managing a cash register.</p>
          </div>
          <div className={containerVisibility} ref={visibilityRef}>
            <p className="job-loc">Willowbrook Hollister</p>
            <p className="job-title">Keyholder</p>
            <p className="job-duration">2021 - 2023</p>
            <hr />
            <p className="job-desc">Responsible for opening and closing the store, overseeing daily operations, supervising staff and managing shifts, opening/closing registers, ensuring compliance with company policies, managing floorsets, and contributing to a seamless and efficient store workflow. </p>
          </div>
          <div className={containerVisibility}>
            <p className="job-loc">Willowbrook Hollister</p>
            <p className="job-title">Assistant Manager</p>
            <p className="job-duration">2023 - 2024</p>
            <hr />
            <p className="job-desc">Reponsible for collaborating with the store manager and assisting in overall management of the store's operations and goals. This includes overseeing daily tasks and product movement goals, supporting and organizing staff, managing and maintaining inventory, contributing to the strategic decisions that enhance the store's performance, ensuring a positive working environment, and delivering and exceptional shopping experience.  </p>
          </div>
        </div>
      </div>
      <button
        style={{ bottom: 0 }}
        className={buttonDisplay}
        onClick={() => {
          window.scrollTo({
            top: (elementRef.current.offsetHeight + elementRef.current.offsetHeight),
            behavior: "smooth",
          });
          updateButton(setButtonDisplay, "newpage-button", 0);
        }}
      >
        What's Next? ⮯
      </button>
    </div>
  );
}

export function useIsVisible(ref) {

  const [isIntersecting, setIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
