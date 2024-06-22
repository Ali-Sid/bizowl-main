import React, { useState } from "react";

function Slider({ onChange }) {
  const [value, setValue] = useState(20);
  const [rightSideWhite, setRightSideWhite] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value < 20) {
      setRightSideWhite(true);
    } else {
      setRightSideWhite(false);
    }
    onChange(event.target.value.toString()); // Convert to string before passing up
  };

  const getText = () => {
    if (value === 20) {
      return "0 to 20+";
    } else {
      return `0 to ${value}+`;
    }
  };

  return (
    <div className="sliderbox-container range-shadow">
      <div className="content" style={{ fontSize: "18px" }}>
        Only show company names that are
        <br />
        <strong>{getText()} characters</strong>
      </div>
      <input
        type="range"
        min="0"
        max="20"
        value={value}
        onChange={handleChange}
        className="slider"
        style={{
          background: rightSideWhite
            ? `linear-gradient(to right, blue ${value * 5}%, white ${
                value * 5
              }%, white 100%)`
            : "linear-gradient(to left, blue, blue)",
        }}
      />
    </div>
  );
}

export default Slider;
