import React from "react";
// This is how to import multiple components from a single parent component
import LikeButtons, {
  MinButtons,
  ResetButtons,
} from "./components/button/state-2";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";
import CountButton from "./components/button/number-counter/count-button";
// import CountText from "./components/button/number-counter/counter-text";

// the other way to type a function. So below is similar to function App() {}
const App = () => {
  const [counter, setCounter] = React.useState(0);
  const sum = () => {
    setCounter(counter + 1);
  };
  const min = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <div>
        <div>
          <h1 className="bg-black text-white text-3xl text-center">
            Learn React JS
          </h1>
        </div>
        {/* reusable components */}
        <Header />
        <main>
          <HeroSection />
        </main>
        {/* This is how to import multiple components from a single parent component */}
        <div className="flex justify-center py-5">
          <MinButtons />
          <LikeButtons />
          <ResetButtons />
        </div>
        {/* Assignment 1, create a number counter */}
        <div>
          <CountButton text="-" onCLick={min} />
          <CountButton text="+" onCLick={sum} />
          <CountButton text="Reset!" onCLick={reset} />
        </div>
      </div>
    </>
  );
};

export default App;
