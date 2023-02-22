const key = "78828dca7949b70ca50313e4d49660d1";

const requests = {
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
  fetchLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}`,
};

export default requests;
