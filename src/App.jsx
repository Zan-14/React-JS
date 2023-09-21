import { useEffect, useState } from "react";
import Header from "./components/header/header";
import RenderList from "./components/renderingList/renderingList";
// Import this to create portals
import { createPortal } from "react-dom";

// the other way to type a function. So below is similar to function App() {}
const App = () => {
  // type the state first
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <>
      <div>
        <div>
          <h1 className="bg-black text-white text-3xl text-center">
            Learn React JS
          </h1>
        </div>
        <Header />
        <div>
          <h2 className="bg-blue-500 text-white text-2xl text-center">
            RENDER LIST & PORTALS
          </h2>
          <h3 className="text-2xl text-center">1. Rendering list</h3>
        </div>
        <RenderList />
        <div>
          <h3 className="text-2xl text-center">2. Portals</h3>
        </div>
        {/* this button will add element outside the <div id="root"> */}
        <div className="flex justify-center my-5">
          <button
            onClick={() => setIsActive(!isActive)}
            className="px-3 py-2 bg-yellow-200 border-black border-2"
          >
            Press to add paragraph
          </button>
          {/* use ternary operator or if else statement or switch case to do conditional rendering */}
          {isActive
            ? createPortal(
                // we can add a new div / element here or a component
                <div>
                  <div className="text-center underline font-bold">
                    <p>
                      This paragraph and navbar are generated outside the div
                      root
                    </p>
                  </div>
                  <Header />
                </div>,
                document.body
              )
            : null}
        </div>
        {/* Example of how to use useEffect Hooks (*/}
        <div className="flex justify-center my-5">
          <button
            onClick={() => setCount(count + 1)}
            className="px-3 py-2 bg-green-200 border-black border-2"
          >
            Add number to console
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
