import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_url, API_KEY } from "../../utils/lib";
import { Navbar } from "../../components";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";
import YouTubeVideo from "../YoutubeVideo/YoutubeVideo";

const MovieId = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState([]);
  const [youtube, setYoutube] = useState(false);
  const [YTData, setYTData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async (url) => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchMovies(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  }, [id]);

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
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!movies && <p style={{ color: "white" }}>NOTHING TO SHOW</p>}
          {youtube && (
            <YouTubeVideo videoKey={YTData[0].key} setYoutube={setYoutube} />
          )}
          {!youtube && (
            <>
              <Navbar />
              <main
                className="banner "
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `linear-gradient(to right, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0.6) 40%, transparent), url(${base_url}${movies.backdrop_path})`,
                  backgroundPosition: "center center",
                }}
              >
                <div className="banner__details-container">
                  <h1>{movies.title}</h1>
                  <div className="banner__details-desc">{movies.overview}</div>
                  <div className="banner__details-buttons">
                    <button onClick={() => setYoutube(true)}>Play</button>
                    <button>More Options...</button>
                  </div>
                </div>
                <div className="banner__backdrop" />
              </main>
              <SimilarMovies
                movie={movies.title}
                fetchURL={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default MovieId;
