import React from "react";

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          // TODO: Handle the guess submission
          console.log(`Submitted guess: ${guess}`);
          setGuesses([...guesses, guess]);
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
        />
      </form>
    </>
  );
}

export default GuessInput;
