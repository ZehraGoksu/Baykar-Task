import React from "react";
import '../../styles/Navbar.scss'
import { Link } from "react-router-dom";
import { FiBarChart } from "react-icons/fi";
import ButtonSignUp from "../ButtonSignUp";

const Navbar = () => {
  const navElements = [
    { name: "Products", url: "/product" },
    { name: "Solutions", url: "/solutions" },
    { name: "Pricing", url: "/pricing" },
    { name: "Resources", url: "/resources" },
    { name: "Log In", url: "/login" },
  ];
  return (
    <div className="bgNav navbar navbar-expand-md px-lg-5 px-3 pt-lg-3 pt-xl-3 pt-2">
      <h1 className="navbar-brand ms-lg-3 ms-2">Collers</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
          <FiBarChart className="barIcon"/>
        </span>
      </button>
      {/* Ekran boyutu küçüldüğünde gösterilecek buton. */}
      <div className="collapse navbar-collapse justify-content-end align-items-center me-lg-3 me-2" id="navbarScroll">
        <ul className="navbar-nav navbar-nav-scroll mb-md-2">
          {navElements.map((element, i) => (
            <li className="nav-item mb-2 mb-lg-0" key={i}>
              <Link className="text pe-lg-3 mx-lg-3 me-3 ms-2" to={element.url}>
                {element.name}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonSignUp/>
      </div>
    </div>
  );
};

export default Navbar;
