import { React, useState, useEffect } from "react";

import { Link } from "react-router-dom";

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
      <Link to="/">
        <img className="navbar__img-logo" src={logo} alt="netflix" />
      </Link>

      <Link to="/profile">
        <img className="navbar__img-avatar" src={avatar} alt="avatar" />
      </Link>
    </div>
  );
};

export default Navbar;
