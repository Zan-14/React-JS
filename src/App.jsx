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
        <RenderList className="my-5" />
      </div>
    </>
  );
};

export default App;
