import React from "react";
import { useState } from "react";
import "../../src/styles/GrowYourCollection.scss";
import { Link } from "react-router-dom";
import { BiSearch, BiCheckShield, BiPodcast } from "react-icons/bi";
import { TbRocket } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { GiSettingsKnobs } from "react-icons/gi";
import Screens from "./Screens";

const GrowYourCollection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + collectionList.length) % collectionList.length
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % collectionList.length);
  };

  const slidesToShow = 3;
  const collectionList = [
    { name: "Bibendum tellus", icon: <BiSearch /> },
    { name: "Cras eget", icon: <BiCheckShield /> },
    { name: "Dolor pharetra", icon: <TbRocket /> },
    { name: "Amet, fringilla", icon: <CgScreen /> },
    { name: "Amet nibh", icon: <BiPodcast /> },
    { name: "Sed velit", icon: <GiSettingsKnobs /> },
  ];
  return (
    <div className="bgGrow">
      <div className="growTitle">
        <h1>Grow your collection</h1>
        <p>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="d-flex flex-column flex-lg-row gap-xl-5">
        <div className="d-flex flex-column">
          <ul className="navbar-nav mb-md-2 flex-row flex-lg-column" style={{
              transform: `translateX(-${slideIndex * (100 / slidesToShow)}%)`,
              
            }}>
            {collectionList.map((element, i) => (
              <li
                className="nav-item mb-2 mb-lg-0 list justify-content-center"
                key={i}
              >
                <Link
                  className="text pe-lg-3 mx-lg-3 me-3 ms-2"
                  to={element.url}
                >
                  <svg className="icon">{element.icon}</svg>
                  {element.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Screens/>
      </div>
    </div>
  );
};

export default GrowYourCollection;
