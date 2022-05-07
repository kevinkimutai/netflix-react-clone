import { React, useState, useEffect } from "react";

import { base_url } from "../../utils/lib";

import "./Row.css";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="row ">
      <h1>{title}</h1>
      <div className="row__movies-container">
        {movies.map((movie) => (
          <img src={base_url + movie.poster_path} alt="poster" key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Row;
