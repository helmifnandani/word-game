import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answerFirstLoad = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answerFirstLoad });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [isFinish, setIsFinish] = React.useState(false);
  const [isWin, setIsWin] = React.useState(false);
  const [answer, setAnswer] = React.useState(answerFirstLoad);

  const handleSubmitGuess = (guess) => {
    const guessObj = {
      value: guess,
      id: `${guess}-${Math.random()}`,
    };
    const nextGuesses = [...guessResults, guessObj];
    setGuessResults(nextGuesses);
    if (guess.toUpperCase() === answer) {
      setIsFinish(true);
      setIsWin(true);
    } else if (
      nextGuesses.length >= NUM_OF_GUESSES_ALLOWED &&
      guess.toUpperCase() !== answer
    ) {
      setIsFinish(true);
      setIsWin(false);
    }
  };

  const handleReset = () => {
    setIsFinish(false);
    setIsWin(false);
    setGuessResults([]);
    setAnswer(sample(WORDS));
  };
  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isFinish={isFinish}
        setIsFinish={setIsFinish}
      />
      {isFinish && isWin && (
        <WonBanner guesses={guessResults.length} handleReset={handleReset} />
      )}
      {isFinish && !isWin && (
        <LostBanner answer={answer} handleReset={handleReset} />
      )}
    </>
  );
}

export default Game;
