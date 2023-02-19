import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div>
            <li>{actor.name}</li>
            <ul>{actor.movies}</ul>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
