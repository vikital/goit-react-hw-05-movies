import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzdjNzAzMzE2OWM1MTQ4ODU0MjE1MDI4OTA0ZWEyMiIsInN1YiI6IjY0Yzg2MTZhZDUxOTFmMDBjNTI5ZDBiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zPAcbwfeynBk1Czf2dg0JsrBbdjZ_1mOtBljgFQ7DHw',
  },
};
export const fetchTrendingMovies = async () => {
  const response = await axios.get('trending/all/day?language=en-US', options);
  return response;
};
export const fetchSearchMovies = async (query, page = 1) => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    options
  );
  return response;
};
export const fetchAbautMovies = async movieId => {
  const response = await axios.get(`movie/${movieId}?language=en-US`, options);
  return response;
};
export const fetchActorMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?language=en-US`,
    options
  );
  return response;
};
export const fetchReviewsMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return response;
};