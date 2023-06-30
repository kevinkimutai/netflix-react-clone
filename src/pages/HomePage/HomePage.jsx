import React from "react";
import { Banner, Navbar, Row } from "../../components";

import { requests } from "../../utils/lib";

import "./HomePage.css";
import { useState } from "react";
import YouTubeVideo from "../YoutubeVideo/YoutubeVideo";

const {
  fetchTrending,
  fetchNetflixOriginals,
  fetchTopRated,
  fetchActions,
  fetchComedies,
  fetchHorror,
  fetchRomance,
  fetchDocumentaries,
} = requests;

const HomePage = () => {
  const [youtube, setYoutube] = useState(false);
  const [videoKey, setVideoKey] = useState();

  return (
    <>
      {youtube && (
        <YouTubeVideo
          videoKey={videoKey}
          setYoutube={setYoutube}
          setVideoKey={setVideoKey}
        />
      )}

      {!youtube && (
        <div className="homepage">
          <Navbar />
          <Banner setYoutube={setYoutube} setVideoKey={setVideoKey} />

          <Row title="Netflix Originals" fetchURL={fetchNetflixOriginals} />
          <Row title="Trending" fetchURL={fetchTrending} />
          <Row title="Action Movies" fetchURL={fetchActions} />
          <Row title="Top rated" fetchURL={fetchTopRated} />
          <Row title="Comedies" fetchURL={fetchComedies} />
          <Row title="Horror Movies" fetchURL={fetchHorror} />
          <Row title="Romance" fetchURL={fetchRomance} />
          <Row title="Documentaries" fetchURL={fetchDocumentaries} />
        </div>
      )}
    </>
  );
};

export default HomePage;
