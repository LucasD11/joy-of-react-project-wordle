import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {Array.from({ length: NUM_OF_GUESSES_ALLOWED }, (_, index) => (
        <p className="guess" key={index}>
          {Array.from({ length: 5 }, (_, subIndex) => (
            <span className="cell" key={subIndex}>
              {guesses[index] && guesses[index][subIndex]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
