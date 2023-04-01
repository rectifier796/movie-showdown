import React, { useEffect, useState } from "react";
import MovieList from "./component/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./component/Heading";
import Search from "./component/Search";
import Favourites from "./component/Favourites";
import RemoveFavourites from "./component/RemoveFavourites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("avengers");
  const [Fav, setFav] = useState([]);

  const getMovie = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ad3831f1`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovie(searchValue);
  }, [searchValue]);

  useEffect(()=>{
    const movieFav=JSON.parse(localStorage.getItem('Favourite-movie'));
    setFav(movieFav);
  },[]);

  const saveToLocalStorage=(items)=>{
    localStorage.setItem('Favourite-movie',JSON.stringify(items));
  }

  const addToFavourite = (movie) => {
    const newFav = [...Fav, movie];
    setFav(newFav);
    saveToLocalStorage(newFav);
  };
  const removeFav = (movie) => {
    const newFav = Fav.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFav(newFav);
    saveToLocalStorage(newFav);
  };

  return (
    <>
      <div class="container-fluid sty">
        <div class="row d-flex align-items-center mt-4 mb-4 fixed">
          <Heading heading="Movies" />
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div class="row row-cols-auto scr">
          <MovieList
            movies={movies}
            handleFavClick={addToFavourite}
            Favourites={Favourites}
          />
        </div>
        <div class="row d-flex align-items-center mt-4 mb-4 fixed">
          <Heading heading="Favourites" />
        </div>
        <div class="row row-cols-auto">
          <MovieList
            movies={Fav}
            handleFavClick={removeFav}
            Favourites={RemoveFavourites}
          />
        </div>
      </div>
    </>
  );
};

export default App;
