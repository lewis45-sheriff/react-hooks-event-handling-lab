// Keypad.js
import React from "react";

const Keypad = () => {
  return (
    <input
      type="password"
      onChange={() => console.log("Entering password...")}
      aria-label="password-input"
    />
  );
};

export default Keypad;
