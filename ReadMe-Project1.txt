PROJECT 1 : TIC-TAC-TOE Game App

Main materials/Tutorial:
1. Official React Website:
react.dev/learn/tutorial-tic-tac-toe

2. youtube: (48:00)
https://www.youtube.com/watch?v=RVH_5L5Lsp0&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=2

Step by step in general:
0. Preparation
    - React + Vite + Tailwind installation and configuration
1. Creating the game board
    a. Create a component of a square
    b. Import the square component into the board component (9x)
    c. Create a state in the square component when button is clicked, X letter will fill the square.
2. Adding the other player
    - using Lifting state up concept
    explanation: We need to make the board component know about the state or condition of each square, whether it is filled or not. Because by default, the board doesn't know about the state or condition of the child components.
    - Before, the square will be filled with X only. We need to create a turn for second player with O letter to fill the square.
3. Determine the winner
4. Adding "time travel" feature (game timeline / history)
5. Refactor the code


*Lesson learned from this PROJECT
1. Lifting state up concept
2. Immutability state (important)
    Benefits:
    - Clone an existing data and modified it without changing the original data
    - Immutability avoids the need to re render all of the child components inside a parent component when there is a data change, even though some data inside the child component isn't change. This will increase the performance of the App.



// const App = () => {
//   return (
//     <>
//       {/* template header */}
//       <h1 className="bg-black text-white text-3xl text-center">
//         Learn React JS (Tic Tac Toe Game)
//       </h1>
//     </>
//   );
// };

// export default App;