import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((person) => {
        return (
          <>
            <h4>Name:{person.name}</h4>
            <p>
              Movies:
              {person.movies.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </p>
          </>
        );
      })}
    </div>
  );
}

export default Directors;
