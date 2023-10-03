import Routers from "./routers";

// the other way to type a function. So below is similar to function App() {}
const App = () => {
  return (
    <>
      <div>
        <h1 className="bg-black text-white text-3xl text-center">
          Learn React JS
        </h1>
      </div>
      <Routers />
    </>
  );
};

export default App;
