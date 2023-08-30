import axios from 'axios';

const API_KEY = '8055d38de66a1b3925ebb8f70d56898e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchPopular = async page => {
  const response = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return response;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response;
};

export const fetchMovieByDetails = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);

  return response.data;
};

export const fetchMovieCasts = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`, params);
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`, params);
  return response.data;
};
