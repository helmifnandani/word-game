import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({ answer, handleReset }) {
  return (
    <Banner status={"sad"} handleReset={handleReset}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
