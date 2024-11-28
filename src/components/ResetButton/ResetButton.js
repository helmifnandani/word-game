import React from "react";

function ResetButton({ handleReset }) {
  return (
    <button className="button" onClick={handleReset}>
      Reset Game
    </button>
  );
}

export default ResetButton;
