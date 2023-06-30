import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/lib";
import "../Row/Row.css";

const SimilarMovies = ({ movie, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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
      <h1>
        Movies Like <span>{movie}</span>
      </h1>

      <div className="similar__movies-container">
        {movies.map((movie) => (
          <img
            src={base_url + movie.poster_path}
            alt="poster"
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
