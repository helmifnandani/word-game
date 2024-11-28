import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ guesses, handleReset }) {
  return (
    <Banner status={"happy"} handleReset={handleReset}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {guesses} guess{guesses > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
