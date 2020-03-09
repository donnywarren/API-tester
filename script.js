
// const title = document.querySelector(".display1");
// const overview = document.querySelector(".display2");
// const posterUrl = document.querySelector(".display3");
// const movieId = document.querySelector(".display4");



const apiTester = async () => {


  // const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c");

  const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star+wars");

  // console.log(response.data);

  const title = document.querySelector(".display1");
  const overview = document.querySelector(".display2");
  const posterUrl = document.querySelector(".display3");
  const movieId = document.querySelector(".display4");
  title.innerHTML += response.data.results[5].title;
  overview.innerHTML += response.data.results[5].overview;
  posterUrl.innerHTML += response.data.results[5].poster_path;
  movieId.innerHTML += response.data.results[5].id;


  // https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US

  // https://image.tmdb.org/t/p/w500/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg

  const response2 = await axios.get("https://swapi.co/api/starships/");

  console.log(response2.data);

};

apiTester();

