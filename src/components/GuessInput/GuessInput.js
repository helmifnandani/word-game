import React from "react";

function GuessInput({ handleSubmitGuess, isFinish }) {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) {
      alert("Please enter exactly 5 characters");
      return;
    }
    handleSubmitGuess(guess);
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        disabled={isFinish}
      />
    </form>
  );
}

export default GuessInput;
