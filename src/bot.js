import React, { useState } from "react";
import "./bot.css";

const Dot = () => {
  const [position, setPosition] = useState({ x: -20, y: -20 });

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div
      className="dot"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onClick={handleClick}
    ></div>
  );
};

export default Dot;
