import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div>
            <h4>Name:{actor.name}</h4>
            <p>
              Movies:
              {actor.movies.map((movie) => {
                return <li>{movie}</li>;
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
