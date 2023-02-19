import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movies.map((movieItem) => {
          return (
            <>
              <ul>{movieItem.title}</ul>
              <li>{movieItem.genres}</li>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
