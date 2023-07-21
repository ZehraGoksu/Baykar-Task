import React from 'react'
import trophy from "../assets/images/subCollectible/trophy.svg";
import tunnel from "../assets/images/subCollectible/tunnel.svg";
import tv from "../assets/images/subCollectible/tv.svg";
import "../styles/SubCollectible.scss";

const SubCollectible = () => {
    const subElements = [
        {
          title: "Nibh viverra",
          icon: trophy,
          description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        },
        {
          title: "Cursus amet",
          icon:tunnel,
          description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        },
        {
          title: "Ipsum fermentum",
          icon: tv,
          description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        },
      ];
  return (
    <div className='d-flex bgSub'>
          {subElements.map((element, i) => (
          <div>
            <img src={element.icon} className="img-size" alt={element.title} />
            <div className="card-body d-grid gap-2">
              <h5 className="title">{element.title}</h5>
              <p className="text">{element.description}</p> 
            </div>
          </div>
        ))}
    </div>
  )
}

export default SubCollectible
