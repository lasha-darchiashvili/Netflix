const key = "78828dca7949b70ca50313e4d49660d1";

const requests = {
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,

  fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
  fetchPopularTv: `https://api.themoviedb.org/3/tv/popular?api_key=${key}`,
  fetchTopRatedTv: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`,
  fetchOnAiringToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}`,
  fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  fetchFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=14`,
  fetchWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=37`,
};

export default requests;
