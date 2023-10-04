/* eslint-disable react/prop-types */
const Categories = ({ title, onClickCategory, activeCategory }) => {
  return (
    <>
      <div
        //adding onClick event to trigger data filter by category, the value is the onClickCategory props
        onClick={() => onClickCategory(title)}
        // How to make the category change the style when clicked or choosed
        className={`${
          activeCategory == title ? "bg-blue-600" : "bg-gray-700"
        } flex items-center justify-center min-w-fit text-white py-3 px-2 rounded-lg cursor-pointer hover:bg-blue-600`}
      >
        {title}
      </div>
    </>
  );
};

export default Categories;
