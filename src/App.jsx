import Header from "./components/header/header";
import RenderList from "./components/renderingList-Portals/renderingList";

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
      </div>
    </>
  );
};

export default App;
