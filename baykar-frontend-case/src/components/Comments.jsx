import React from "react";
import { useState } from "react";
import "../../src/styles/Comments.scss";
import { PiArrowCircleRightThin, PiArrowCircleLeftThin } from "react-icons/pi";
import zoomerr from "../assets/images/comments/zoomerr.png";
import shells from "../assets/images/comments/shells.png";
import artvenue from "../assets/images/comments/artvenue.png";
import waves from "../assets/images/comments/waves.png";
import kontrastr from "../assets/images/comments/kontrastr.png";
import hellenJummy from "../assets/images/comments/hellenJummy.png";
import hellenaJohn from "../assets/images/comments/hellenaJohn.png";
import davidOshodi from "../assets/images/comments/davidOshodi.png";
import janeDoe from "../assets/images/comments/janeDoe.png";

const Comments = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + cardInfo.length) % cardInfo.length
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % cardInfo.length);
  };

  const slidesToShow = 3;

  const cardInfo = [
    {
      logo: kontrastr,
      description:
        "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      photo: janeDoe,
      name: "Ralph Edwards",
      job: "Product Designer",
    },
    {
      logo: zoomerr,
      description:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      photo: hellenJummy,
      name: "Hellen Jummy",
      job: "Team Lead",
    },
    {
      logo: shells,
      description:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      photo: hellenaJohn,
      name: "Hellena John",
      job: "Co-founder",
    },
    {
      logo: artvenue,
      description:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      photo: davidOshodi,
      name: "David Oshodi",
      job: "Manager",
    },
    {
      logo: waves,
      description:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      photo: janeDoe,
      name: "Jane Doe",
      job: "CEO",
    },
  ];
  return (
    <div className="bgComments">
      <div className="d-flex justify-content-md-between align-items-center mb-5 mainTitle">
        <h2>Because they love us</h2> 
        <div className="removeIcons">
          <PiArrowCircleLeftThin className="circleIcon" onClick={prevSlide} />
          <PiArrowCircleRightThin className="circleIcon" onClick={nextSlide} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="yellowBox"></div>
        <div className="slider-container">
          <div
            className="d-flex slider"
            style={{
              transform: `translateX(-${slideIndex * (100 / slidesToShow)}%)`,
              
            }}
          >
            {cardInfo.map((element, i) => (
              <div
                className="card mb-3 mx-3 slide"
                key={i}
                style={{ flex: `0 0 20%` }}
              >
                <div className="card-body">
                  <img src={element.logo} alt="Platform Logo" />
                  <p className="card-text">{element.description}</p>
                  <div className="d-flex align-items-center">
                    <img src={element.photo} alt="Personel" className="" />
                    <div className="mx-3 personTitle">
                      <h6>{element.name}</h6>
                      <p>{element.job}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
