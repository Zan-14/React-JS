import { Link } from "react-router-dom";
import {
  calculateMultiply,
  useMultipleCount,
} from "../../redux/slice/multiplySlice";
// import { useSelectCalculateMultiply } from "../../redux/reducers/multiplyReducer";
import { useDispatch } from "react-redux";
// import { multiply } from "../../redux/actions/multiply/multiplyActions";

const Part6Redux = () => {
  //old way
  // const dispatch = useDispatch();
  // const data = useSelectCalculateMultiply();

  // console.log(data);

  //  new way
  const data = useMultipleCount();
  const dispatch = useDispatch();
  console.log(data);

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
      {/* old way */}
      {/* <div>
        <div className="flex justify-center">
          <button
            // if we add 2 inside the multiply() function, that means we use payload and we must configure the multiplyReducer, change the * 2 into * payload instead
            onClick={() => dispatch(multiply(2))}
            className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300"
          >
            1. Multiply 2 with redux
          </button>
        </div>
        <div className="flex justify-center">
          <button
            // This second button will continue the previous state of the number, so button 1 and 2 is using the same data from the store, not independent.
            onClick={() => dispatch(multiply(5))}
            className="bg-blue-300 px-5 py-2 rounded-xl font-semibold hover:bg-yellow-300"
          >
            2. Multiply 5 with redux
          </button>
        </div>
        <h1 className="py-5 text-3xl font-bold text-center">
          The output is in console log
        </h1>
      </div> */}
      {/* new way */}
      <div className="flex justify-center gap-10">
        <button
          onClick={() => dispatch(calculateMultiply())}
          className="bg-red-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300"
        >
          multiply by 2 (new way)
        </button>
        {/* <button
          onClick={() => dispatch(calculateMultiply())}
          className="bg-red-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300"
        >
          multiply by 5 (new way)
        </button> */}
      </div>
      {/* This is how u show the output of the redux */}
      <h1 className="py-5 text-3xl font-bold text-center">
        The output is {data.multiplyCount}
      </h1>
    </div>
  );
};

export default Part6Redux;
