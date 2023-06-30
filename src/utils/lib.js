export const APIURL = "https://api.themoviedb.org/3";
export const API_KEY = "a6c4d86ec6e189e00bac2015305f81c0";
//api.themoviedb.org/3/movie/550?api_key=a6c4d86ec6e189e00bac2015305f81c0

export const base_url = "https://image.tmdb.org/t/p/original";

export const requests = {
  fetchTrending: `${APIURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${APIURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${APIURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActions: `${APIURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedies: `${APIURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `${APIURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `${APIURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${APIURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// https://api.themoviedb.org/3/movie/{movie_id}/videos
