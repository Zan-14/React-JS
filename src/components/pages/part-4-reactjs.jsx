import { useState } from "react";
import { Link } from "react-router-dom";

export const Part4React = () => {
  // useState Hooks (simple example using number)
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    // //This is the simple format to run 1 change at the time, the result will be increase 1 number every click.
    //   setNumber(number + 1);

    // Multiple setState every an event was triggered

    // // if we use this format, the result will be 1, not 3 (false)
    // setNumber(number + 1);
    // setNumber(number + 1);
    // setNumber(number + 1);

    // // if we use this format, the result will be 10, not 12 (false)
    // setNumber(number + 1);
    // setNumber(number + 1);
    // setNumber(10);

    // if we use this format, the result will be 12 (correct)
    // this method will be useful if we want to process every state and not overwrite the previous state.
    setNumber(number + 1);
    setNumber(prevState => prevState + 1);
    setNumber(prevState => prevState + 10);
  };

  // useState in form with data type object
  const [person, setPerson] = useState({
    // this is object data
    name: "",
    favGame: {
      // this is object data inside object data (nested object)
      title: "",
      genre: "",
    },
  });

  //   How to change a data in object
  const handleNameChange = event => {
    setPerson({
      ...person,
      name: event.target.value,
    });
  };
  //   How to change a data in nested object
  const handleGameTitleChange = event => {
    setPerson({
      ...person,
      favGame: {
        ...person.favGame,
        title: event.target.value,
      },
    });
  };
  const handleGameGenreChange = event => {
    setPerson({
      ...person,
      favGame: {
        ...person.favGame,
        genre: event.target.value,
      },
    });
  };

  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center">Part 4 React JS</h1>
      <div className="flex justify-center">
        <Link to={"/login"}>
          <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            Login Page
          </button>
        </Link>
      </div>
      <div className="flex justify-center my-5">
        <Link to={"/usereducer"}>
          <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            useReducer Page
          </button>
        </Link>
      </div>
      <div className="flex justify-center my-5">
        <Link to={"/part-5"}>
          <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            Part 5 React JS
          </button>
        </Link>
      </div>

      {/* 1. Hooks */}
      {/* useState */}
      <div>
        {/* Example useState using onClick event */}
        <div className="my-5 py-5 bg-gray-200 flex flex-col items-center gap-2 font-bold">
          <p>Current Number is {number}</p>
          <button
            onClick={handleClick}
            className="bg-red-200 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300"
          >
            + 12
          </button>
          <button
            // Must wrap inside a function so that setNumber(0) is not called automatically and enter infinite loop
            onClick={() => setNumber(0)}
            className="bg-red-200 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300"
          >
            Reset
          </button>
        </div>
        {/* Example useState with a form  */}
        {/* Using label here to create a simple example */}
        <div className="flex flex-col gap-2 items-center my-5">
          <label>
            Name:
            <input
              value={person.name}
              onChange={handleNameChange}
              className="border border-black px-3 mx-3"
            />
          </label>
          <label>
            Favorite Game:
            <input
              value={person.favGame.title}
              onChange={handleGameTitleChange}
              className="border border-black px-3 mx-3"
            />
          </label>
          <label>
            Game Genre:
            <input
              value={person.favGame.genre}
              onChange={handleGameGenreChange}
              className="border border-black px-3 mx-3"
            />
          </label>
          <p>
            <span className="font-bold">Output:</span> I am {person.name}, my
            favorite game genre is {person.favGame.genre} called{" "}
            {person.favGame.title}.
          </p>
        </div>
      </div>
    </div>
  );
};
