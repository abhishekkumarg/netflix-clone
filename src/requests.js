const API_KEY = "e37ea1c633ae23189ab44ba2d85eef66";

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with-genres=99`,
};