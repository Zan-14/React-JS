import { Link } from "react-router-dom";

const Part6Redux = () => {
  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center bg-gray-300">
        Part 6 React JS
      </h1>
      <h2 className="py-5 text-2xl font-bold text-center">
        State Management ; Redux
      </h2>
      <div className="flex justify-center my-5">
        <Link to={"/"}>
          <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Part6Redux;
