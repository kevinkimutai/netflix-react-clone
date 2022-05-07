import React from "react";
import { Banner, Navbar, Row } from "../../components";

import { requests } from "../../utils/lib";

import "./HomePage.css";

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
  return (
    <div className="homepage">
      <Navbar />
      <Banner />

      <Row title="Netflix Originals" fetchURL={fetchNetflixOriginals} />
      <Row title="Trending" fetchURL={fetchTrending} />
      <Row title="Action Movies" fetchURL={fetchActions} />
      <Row title="Top rated" fetchURL={fetchTopRated} />
      <Row title="Comedies" fetchURL={fetchComedies} />
      <Row title="Horror Movies" fetchURL={fetchHorror} />
      <Row title="Romance" fetchURL={fetchRomance} />
      <Row title="Documentaries" fetchURL={fetchDocumentaries} />
    </div>
  );
};

export default HomePage;
