import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGJjZTEwODU2OWM1NTc2MTMyZTYwNGI0OTA2ZDNmMSIsInN1YiI6IjY0ZDhhNTdkMzcxMDk3MDBmZmI2MzQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fLpq1XBnQxDq_sQissmui4D8gPxzIXxp2x2nQGeTK88',
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
