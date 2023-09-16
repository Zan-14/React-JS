const CountButton = ({ text, onCLick }) => {
  return (
    <button
      onClick={onCLick}
      className="p-4 bg-black text-white border-2 border-green-600 font-bold"
    >
      {text}
    </button>
  );
};
// FAILED!!!!
export default CountButton;
