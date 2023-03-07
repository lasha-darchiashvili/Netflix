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
    title: "Fantasy",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=14`,
    image: "backdrop_path",
  },
  {
    title: "Western",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=37`,
    image: "backdrop_path",
  },

  {
    title: "Romance",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
    image: "backdrop_path",
  },
  {
    title: "Science Fiction",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
    image: "backdrop_path",
  },
  {
    title: "Documentary",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99`,
    image: "backdrop_path",
  },
  {
    title: "Horror",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    image: "backdrop_path",
  },
];

export default requests;
