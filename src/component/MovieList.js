import React from "react";
const MovieList=(props)=>{
    const Favourites=props.Favourites;
    return(
        <>
        {props.movies.map((movie,index)=>(
            <div className="d-flex justify-content-center m-1 image-container siz">
                <img src={movie.Poster} alt='movie' />
                <div onClick={()=>props.handleFavClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <Favourites/>
                </div>
            </div>
        ))}
        </>
    )
}
export default MovieList;