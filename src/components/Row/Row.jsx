import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { base_url } from "../../utils/lib";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import "./Row.css";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const scrollableRef = useRef(null);
  //const [showLeftArrow, setShowLeftArrow] = useState(false);
  //const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(fetchURL);
        const data = await res.json();

        setMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, [fetchURL]);

  const scrollToLeft = () => {
    const divElement = scrollableRef.current;
    if (divElement) {
      divElement.scrollBy({
        left: -divElement.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToRight = () => {
    const divElement = scrollableRef.current;
    if (divElement) {
      divElement.scrollBy({
        left: divElement.clientWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="row ">
      <h1>{title}</h1>
      <div className="row__movies-wrapper">
        <div className="row__icon-scrollBy scroll-left">
          <MdKeyboardArrowLeft className="scroll-icon" onClick={scrollToLeft} />
        </div>
        <div className="row__movies-container" ref={scrollableRef}>
          {movies.map((movie) => (
            <img
              src={base_url + movie.poster_path}
              alt="poster"
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
            />
          ))}
        </div>
        <div className="row__icon-scrollBy scroll-right">
          <MdKeyboardArrowRight
            className="scroll-icon"
            onClick={scrollToRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Row;
