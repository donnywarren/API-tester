
// const name = document.querySelector(".display1");
// const role = document.querySelector(".display2");
// const school = document.querySelector(".display3");

const apiTester = async () => {

  // const response = await axios.get("https://www.potterapi.com/v1/characters/?key=$2a$10$t.iEEyOI2s6nFe/Tcvm4yOo7WZTsINYplP3LrZ5Lm81uVhnEMH.I2");

  // const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c");

  const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star+wars");


  console.log(response.data);
  // console.log(response.data[6].name);
  // console.log(response.data[6].role);
  // console.log(response.data[6].school);

  // const name = document.querySelector(".display1");
  // const role = document.querySelector(".display2");
  // const school = document.querySelector(".display3");
  // name.innerHTML = response.data[6].name;
  // role.innerHTML = response.data[6].role;
  // school.innerHTML = response.data[6].school;


  // https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=8d021868bbab84ae4f9d16fdc0645e0c&language=en-US

  // https://image.tmdb.org/t/p/w500/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg

  // <img class="profile fade lazyautosizes lazyloaded" data-sizes="auto" data-src="https://image.tmdb.org/t/p/w138_and_h175_face/5M7oN3sznp99hWYQ9sX0xheswWX.jpg" data-srcset="https://image.tmdb.org/t/p/w138_and_h175_face/5M7oN3sznp99hWYQ9sX0xheswWX.jpg 1x, https://image.tmdb.org/t/p/w276_and_h350_face/5M7oN3sznp99hWYQ9sX0xheswWX.jpg 2x" alt="Harrison Ford" sizes="138px" srcset="https://image.tmdb.org/t/p/w138_and_h175_face/5M7oN3sznp99hWYQ9sX0xheswWX.jpg 1x, https://image.tmdb.org/t/p/w276_and_h350_face/5M7oN3sznp99hWYQ9sX0xheswWX.jpg 2x" src="https://image.tmdb.org/t/p/w138_and_h175_face/5M7oN3sznp99hWYQ9sX0xheswWX.jpg"></img>

};

apiTester();