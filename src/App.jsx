import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";

function App() {
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
        <HeroSection />
      </div>
    </>
  );
}

export default App;
