//when using state, don't forget to import React from "react"
import React from "react";

// This file will tell how to make some components inside a single parent component/file and we can export them individually.

//This is how to export components inside a parent component individually
//Min button component
export const MinButtons = () => {
  const [min, setMin] = React.useState(0);
  const minClick = () => {
    setMin(min - 1);
  };

  return (
    <button
      onClick={minClick}
      className="p-2 bg-black text-white border-red-500 border-2"
    >
      {min} number
    </button>
  );
};

// Reset button component
export const ResetButtons = () => {
  const [reset, setReset] = React.useState(5);
  const resetClick = () => {
    setReset(0);
  };

  return (
    <button
      onClick={resetClick}
      className="p-2 bg-black text-white border-red-500 border-2"
    >
      {reset}
    </button>
  );
};

//this is the main component and we use export default to export the parent component file
const LikeButtons = () => {
  const [likes, setLikes] = React.useState(0);
  function sumClick() {
    setLikes(likes + 1);
  }
  return (
    <button
      onClick={sumClick}
      className="p-2 bg-black text-white border-yellow-500 border-2"
    >
      {likes} likes
    </button>
  );
};

export default LikeButtons;
