import React from "react";
import "../styles/TheBestBox.scss";
import ButtonSignUp from "./ButtonSignUp";
import {LiaShoppingCartSolid} from "react-icons/lia"
import Box1 from "../assets/images/theBestBox/Box1.png"
import Box2 from "../assets/images/theBestBox/Box2.png"
import Box3 from "../assets/images/theBestBox/Box3.png"

const TheBestBox = () => {
  const boxElements = [
    {
      title: "Title",
      photo: Box1,
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      url: "/product1",
    },
    {
      title: "Title",
      photo:Box2,
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      url: "/product2",
    },
    {
      title: "Title",
      photo: Box3,
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      url: "/product3",
    },
  ];
  return (
    <div className="bestBox">
      <div className="d-flex justify-content-between align-items-center titleBest ">
        <h1>The best of the best </h1>
        <ButtonSignUp />
      </div>
      <div className="boxDiv d-flex gap-lg-5 gap-md-3">
        <div className="pinkcircle"></div>
        <div className="blueCircle"></div>
        <div className="orangeCircle"></div>
        <div className="purpleCircle"></div>
        <div className="greenCircle"></div>
        {boxElements.map((element, i) => (
          <div className="card mb-5">
            <img src={element.photo} className="card-img-top" alt={element.title} />
            <div className="card-body d-grid gap-2">
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.description}</p>
              <button href={element.url} className="btnBuy d-flex align-items-center justify-content-center">
                <LiaShoppingCartSolid className="icon me-2"/>Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheBestBox;
