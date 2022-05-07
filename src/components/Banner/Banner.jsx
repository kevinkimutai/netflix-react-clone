import { React, useEffect, useState } from "react";

import { requests, base_url } from "../../utils/lib";

import "./Banner.css";

const truncString = (string, char) => {
  const newString = string?.substring(0, char);
  return newString + "...";
};

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies(requests.fetchNetflixOriginals);
  }, []);

  console.log(base_url + movies.backdrop_path);
  return (
    <div
      className="banner "
      style={{
        backgroundSize: "cover",
        backgroundImage: "url(" + base_url + movies.backdrop_path + ")",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__details-container">
        <h1>{movies.name}</h1>
        <div className="banner__details-desc">
          {truncString(movies.overview, 250)}
        </div>
        <div className="banner__details-buttons">
          <button>Play</button>
          <button>More Options</button>
        </div>
      </div>
      <div className="banner__backdrop" />
    </div>
  );
};

export default Banner;
