import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movies.map((movieItem, index) => {
          return (
            <>
              <h4>Name: {movieItem.title}</h4>
              <h5>Time: {movieItem.time} </h5>
              <p>
                Genres:
                {movieItem.genres.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
