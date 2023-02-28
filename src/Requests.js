const key = "78828dca7949b70ca50313e4d49660d1";

const requests = [
  {
    title: "Upcoming",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    image: "poster_path",
  },
  {
    title: "Top Rated",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    image: "backdrop_path",
  },
  {
    title: "Now Playing",
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    image: "backdrop_path",
  },
  {
    title: "Popular TV",
    url: `https://api.themoviedb.org/3/tv/popular?api_key=${key}`,
    image: "backdrop_path",
  },
  {
    title: "Top Rated TV",
    url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`,
    image: "backdrop_path",
  },
  {
    title: "TV Airing Today",
    url: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}`,
    image: "backdrop_path",
  },
  {
    title: "Horror",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    image: "backdrop_path",
  },
  {
    title: "Fantasy",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=14`,
    image: "backdrop_path",
  },
  {
    title: "Western",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=37`,
    image: "backdrop_path",
  },
];

export default requests;
