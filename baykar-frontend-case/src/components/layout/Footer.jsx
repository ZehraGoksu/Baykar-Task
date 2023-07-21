import "../../styles/Footer.scss";
import { Link } from "react-router-dom";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiYoutubeFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import GooglePlay from "../../assets/images/footer/GooglePlay.png";
import AppStore from "../../assets/images/footer/AppStore.png";

const Footer = () => {
  const ProductTitles = [
    { name: "Pricing" },
    { name: "Overview" },
    { name: "Browse" },
    { name: "Accessibility" },
    { name: "Five" },
  ];
  const SolutionsTitles = [
    { name: "Brainstorming" },
    { name: "Ideation" },
    { name: "Wireframing" },
    { name: "Research" },
    { name: "Design" },
  ];
  const SupportTitles = [
    { name: "Contact Us" },
    { name: "Developers" },
    { name: "Documentation" },
    { name: "Integrations" },
    { name: "Reports" },
  ];
  const SubTitles = [
    { name: "Terms" },
    { name: "Privacy" },
    { name: "Contact" },
    { name: "EN", icon: <TbWorld className="icon" /> },
  ];

  return (
    <div className="bg-footer pt-5 pb-5">
      <div className="link">
        <div className="mb-3 col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <h5>Product</h5>
          <ul className="nav flex-column">
            {ProductTitles.map((title, i) => (
              <li className="nav-item mb-2" key={i}>
                <Link to="/" className="nav-link p-0">
                  {title.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3 col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <h5>Solutions</h5>
          <ul className="nav flex-column">
            {SolutionsTitles.map((title, i) => (
              <li className="nav-item mb-2" key={i}>
                <Link to="/" className="nav-link p-0">
                  {title.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3 col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <h5>Support</h5>
          <ul className="nav flex-column">
            {SupportTitles.map((title, i) => (
              <li className="nav-item mb-2" key={i}>
                <Link to="/" className="nav-link p-0">
                  {title.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3 col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <h5>Get the App</h5>
          <div className="d-flex flex-column store">
            <img src={AppStore} alt="App store" id="AppStore"/>
            <img src={GooglePlay} alt="Google play store" id="PlayStore"/>
          </div>
          <h5 className="followUs">Follow Us</h5>
          <div className="d-flex justify-content-center justify-content-sm-start gap-3">
            <Link to="/youtube">
              <RiYoutubeFill className="riIcon rounded-circle" />
            </Link>
            <Link to="/facebook">
              <RiFacebookFill className="riIcon rounded-circle" />
            </Link>
            <Link to="/twitter">
              <RiTwitterFill className="riIcon rounded-circle" />
            </Link>
            <Link to="/instagram">
              <RiInstagramLine className="riIcon rounded-circle" />
            </Link>
            <Link to="/linkedin">
              <RiLinkedinFill className="riIcon rounded-circle" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="hrLong"></hr>
      <div className="subTitle d-flex justify-content-between mt-4">
        <h6>Collers @ 2023. All rights reserved.</h6>
        <ul className="mt-2 mb-2">
          {SubTitles.map((title, i) => (
            <li className="nav-item d-inline" key={i}>
              <Link to="/" className="nav-link p-2 ps-lg-2 ps-md-1 ps-xl-4 ps-xxl-4 d-inline">
                {title.icon} {title.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
