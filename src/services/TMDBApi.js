import axios from 'axios'


const API_KEY = '5e0ca358c6a85ef9a9e43b6452e61748';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
}

export const getMovieByQuery = async (query) => {
  const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data.results;
}

export const getMovieDetails = async id => {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data;
}

export const getMovieCast = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};

export const getMovieReview = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};



