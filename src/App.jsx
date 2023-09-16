/* eslint-disable react/prop-types */
import { useState } from "react";

// 3. adding X after click on the board
function Square({ value, onSquareClick }) {
  return (
    // 1. individual block on the board
    <button
      onClick={onSquareClick}
      className="w-16 h-16 bg-black border-4 border-white text-3xl font-bold text-white"
    >
      {value}
    </button>
  );
}

// Winner rules
function determineWinner(squares) {
  const rules = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < rules.length; i++) {
    const [a, b, c] = rules[i];

    if (squares[a] == squares[b] && squares[b] == squares[c]) {
      return squares[a];
    }
  }
  return false;
}

// Board component
const Board = () => {
  // 4. create a state with an array of 9 and the default values is null
  const [squares, setSquares] = useState(Array(9).fill(null));
  // create a taking turn between player x and player o
  const [xIsNext, setXIsNext] = useState(true);
  function afterClick(i) {
    // Prevent the filled square to change the value
    if (squares[i] || determineWinner(squares)) return;
    // clone the array data from no.4 or const square
    const nextSquares = squares.slice();
    // Use ternary operator to replace the if statement and create a turn
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = determineWinner(squares);
  let status = "";
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ` + (xIsNext ? "X" : "O");
  }

  return (
    <>
      {/* tic-tac-toe */}
      <div className="flex flex-col place-items-center mt-10">
        {/* Game Condition */}
        <div className="text-xl font-bold">{status}</div>
        {/* 2. Board */}
        <div className="flex flex-wrap w-48 h-48 mt-4">
          <Square value={squares[0]} onSquareClick={() => afterClick(0)} />
          <Square value={squares[1]} onSquareClick={() => afterClick(1)} />
          <Square value={squares[2]} onSquareClick={() => afterClick(2)} />
          <Square value={squares[3]} onSquareClick={() => afterClick(3)} />
          <Square value={squares[4]} onSquareClick={() => afterClick(4)} />
          <Square value={squares[5]} onSquareClick={() => afterClick(5)} />
          <Square value={squares[6]} onSquareClick={() => afterClick(6)} />
          <Square value={squares[7]} onSquareClick={() => afterClick(7)} />
          <Square value={squares[8]} onSquareClick={() => afterClick(8)} />
        </div>
      </div>
    </>
  );
};
export default Board;
