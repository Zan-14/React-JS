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
      <div>
        <h2 className="bg-green-800 text-white text-2xl text-center">
          Error Handling, Event Handling, Routers
        </h2>
      </div>
      <Routers />
    </>
  );
};

export default App;
