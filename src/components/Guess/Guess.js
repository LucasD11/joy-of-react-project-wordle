import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer }) {
  return (
    <div className="guess-results">
      {Array.from({ length: NUM_OF_GUESSES_ALLOWED }, (_, index) => {
        if (!guesses[index]) {
          return (
            <p className="guess" key={index}>
              {Array.from({ length: 5 }, (_, subIndex) => (
                <span className="cell" key={subIndex}>
                  {" "}
                </span>
              ))}
            </p>
          );
        }

        const guessStatus = checkGuess(guesses[index], answer);
        return (
          <p className="guess" key={index}>
            {Array.from({ length: 5 }, (_, subIndex) => (
              <span
                className={`cell ${guessStatus[subIndex]["status"]}`}
                key={subIndex}
              >
                {guessStatus[subIndex]["letter"]}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
