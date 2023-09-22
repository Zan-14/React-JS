import { Link } from "react-router-dom";

export const UseReducerPage = () => {
  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center">useReducer Hook</h1>
      <div className="flex justify-center">
        <Link to={"/part-4"}>
          <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
            Part-4 / useState Page
          </button>
        </Link>
      </div>
    </div>
  );
};
