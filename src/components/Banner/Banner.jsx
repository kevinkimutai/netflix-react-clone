import { React, useEffect, useState } from "react";

import { requests, base_url, API_KEY } from "../../utils/lib";

import "./Banner.css";

const truncString = (string, char) => {
  const newString = string?.substring(0, char);
  return newString + "...";
};

const Banner = ({ setYoutube, setVideoKey }) => {
  const [movies, setMovies] = useState([]);

  const [YTData, setYTData] = useState([]);

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

  useEffect(() => {
    const fetchYTVids = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setYTData(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchYTVids(
      `https://api.themoviedb.org/3/movie/${movies.id}/videos?api_key=${API_KEY}&language=en-US`
    );
  }, [movies.id]);

  return (
    <>
      <div
        className="banner "
        style={{
          backgroundSize: "cover",

          backgroundImage: `linear-gradient(to right, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0.6) 40%, transparent), url(${base_url}${movies.backdrop_path})`,
          //  backgroundImage: "url(" + base_url + movies.backdrop_path + ")",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__details-container">
          <h1>{movies.name}</h1>
          <div className="banner__details-desc">
            {truncString(movies.overview, 250)}
          </div>
          <div className="banner__details-buttons">
            <button
              onClick={() => {
                setYoutube(true);
                setVideoKey(YTData.key || YTData[0].key);
              }}
            >
              Play
            </button>
            <button>More Options...</button>
          </div>
        </div>
        <div className="banner__backdrop" />
      </div>
    </>
  );
};

export default Banner;
