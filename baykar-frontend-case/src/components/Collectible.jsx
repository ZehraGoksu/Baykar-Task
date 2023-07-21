import React from "react";
import ButtonSignUp from "./ButtonSignUp";
import { HiOutlinePlay } from "react-icons/hi";
import "../styles/Collectible.scss";
import Sneaker from "../assets/images/collectible/PexelsPhotobyRayPiedra.png";
import SubCollectible from "./SubCollectible";

const Collectible = () => {
  return (
    <div className="bgCollectible">
      <div className="d-flex flex-lg-row flex-column justify-content-center justify-content-lg-start">
        <div className="mb-5 d-flex flex-column align-items-center align-items-lg-start">
          <h1 className="text-center text-lg-start">Collectible Sneakers</h1>
          <p className="text-center text-lg-start">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div className="d-flex align-items-center">
            <ButtonSignUp />
            <div className="watch d-flex align-items-center">
              <HiOutlinePlay className="watchIcon" />
              <a href="/">Watch Demo </a>
            </div>
          </div>
        </div>
        <div className="paddingLeft d-flex justify-content-center mt-5">
          <div className="yellowBox">
            <img className="pb-5 mb-4" src={Sneaker} alt="Sneaker" />
          </div>
        </div>
      </div>
      <SubCollectible />
      <div className="rentagle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1428"
          height="806"
          viewBox="0 0 1428 806"
          fill="none"
        >
          <path d="M1428 265.472V0L0 806H1428V265.472Z" fill="#FEF3C7" />
        </svg>
      </div>
    </div>
  );
};

export default Collectible;
