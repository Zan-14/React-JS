//when using state, don't forget to import React from "react"
import React from "react";

function SumButtons() {
  const [sum, setSum] = React.useState(0);
  function sumClick() {
    setSum(sum + 1);
  }
  return (
    <button
      onClick={sumClick}
      className="p-2 bg-black text-white border-yellow-500 border-2"
    >
      + ({sum})
    </button>
  );
}

export default SumButtons;
