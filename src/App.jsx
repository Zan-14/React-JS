// This is how to import multiple components from a single parent component
import LikeButtons, {
  MinButtons,
  ResetButtons,
} from "./components/button/state-2";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";

// the other way to type a function. So below is similar to function App() {}
const App = () => {
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
      </div>
    </>
  );
};

export default App;
