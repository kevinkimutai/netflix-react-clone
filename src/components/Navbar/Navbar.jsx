import { React, useState, useEffect } from "react";

import avatar from "../../assets/images/avatar.png.png";
import logo from "../../assets/images/netflix-logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setNavShow(true);
    } else {
      setNavShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`navbar section__padding ${navShow && `navbar__black`} `}>
      <img className="navbar__img-logo" src={logo} alt="netflix" />
      <img className="navbar__img-avatar" src={avatar} alt="avatar" />
    </div>
  );
};

export default Navbar;
