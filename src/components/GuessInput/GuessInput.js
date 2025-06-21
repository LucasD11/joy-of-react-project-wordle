import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessInput({ guesses, setGuesses, answer }) {
  const [guess, setGuess] = React.useState("");

  const [win, setWin] = React.useState(false);
  const lose = guesses.length >= 6;

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          // TODO: Handle the guess submission
          console.log(`Submitted guess: ${guess}`);
          setGuesses([...guesses, guess]);
          if (
            checkGuess(guess, answer).every(
              (status) => status["status"] === "correct"
            )
          ) {
            setWin(true);
          }
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
          minLength={5}
          maxLength={5}
          pattern={"[a-zA-Z]{5}"}
          disabled={win || lose}
        />
      </form>
      {win && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      )}
      {lose && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GuessInput;
