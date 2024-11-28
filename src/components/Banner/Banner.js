import React from "react";
import ResetButton from "../ResetButton/ResetButton";

function Banner({ status, children, handleReset }) {
  return (
    <div>
      <div className={`${status} banner`}>
        {children}
        <ResetButton handleReset={handleReset} />
      </div>
    </div>
  );
}

export default Banner;
