import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((person) => {
        return (
          <>
            <li>{person.name}</li>
            <ul>{person.movies}</ul>
          </>
        );
      })}
    </div>
  );
}

export default Directors;
