import React from "react";
import { BsCheck2 } from "react-icons/bs";
import ButtonSignUp from "./ButtonSignUp";
import Video from "../../src/assets/images/whyJoin/Video.png";
import "../styles/WhyJoin.scss";

const WhyJoin = () => {
  const materials = [
    { desc: "Est et in pharetra magna adipiscing ornare aliquam." },
    { desc: "Tellus arcu sed consequat ac velit ut eu blandit." },
    { desc: "Ullamcorper ornare in et egestas dolor orci." },
  ];

  const circle = [
    { color: "#E11D48" },
    { color: "#FBBF24" },
    { color: "#22C55E" },
  ];
  return (
    <div className="bgWhy">
      <div className="box d-flex justify-content-between flex-lg-row align-items-center flex-column">
        <div className="boxText text-center text-lg-start">
          <h1>Why join us</h1>
          <div className="materials ">
            {materials.map((element, i) => (
              <div className="d-flex align-items-center">
                <BsCheck2 className="icon" />
                <p>{element.desc}</p>
              </div>
            ))}
          </div>
          <ButtonSignUp />
        </div>
        <div className="screen d-flex justify-content-center align-items-start flex-column">
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
          <img className="video" src={Video} alt="video" />
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
