import React from "react";
import "../../src/styles/Screens.scss";
import collection1 from "../../src/assets/images/growYourCollection/collection1.png";
import collection2 from "../../src/assets/images/growYourCollection/collection2.png";
import collection3 from "../../src/assets/images/growYourCollection/collection3.png";

const Screens = () => {
  const circle = [
    { color: "#E11D48" },
    { color: "#FBBF24" },
    { color: "#22C55E" },
  ];
  return (
    <div className="gallery">
      <div className="screen d-flex justify-content-center align-items-start flex-column ">
        <div className="d-flex buttons">
          {circle.map((element, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
            >
              <path
                d="M5 9.69369C2.69875 9.69369 0.833328 7.82827 0.833328 5.52702C0.833328 3.22577 2.69875 1.36035 5 1.36035C7.30125 1.36035 9.16666 3.22577 9.16666 5.52702C9.16666 7.82827 7.30125 9.69369 5 9.69369Z"
                fill={element.color}
              />
            </svg>
          ))}
        </div>
        <img className="video" src={collection2} alt="Screen" />
      </div>
      <div className="screen d-flex justify-content-center align-items-start flex-column position-absolute mainScreen">
        <div className="d-flex buttons">
          {circle.map((element, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
            >
              <path
                d="M5 9.69369C2.69875 9.69369 0.833328 7.82827 0.833328 5.52702C0.833328 3.22577 2.69875 1.36035 5 1.36035C7.30125 1.36035 9.16666 3.22577 9.16666 5.52702C9.16666 7.82827 7.30125 9.69369 5 9.69369Z"
                fill={element.color}
              />
            </svg>
          ))}
        </div>
        <img className="video" src={collection1} alt="Main Screen" />
      </div>
      <div className="miniScreen">
       <img src={collection3} alt="mini screen" className="miniImg"/>
      </div>
    </div>
  );
};

export default Screens;
