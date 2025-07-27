const API_KEY = "ca5c4a06db10e1c313748abca43906ea";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};


//Animation
export const getAnimationMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`
  );
  const data = await response.json();
  return data.results;
};


// https://api.themoviedb.org/3/movie/popular?api_key=ca5c4a06db10e1c313748abca43906ea