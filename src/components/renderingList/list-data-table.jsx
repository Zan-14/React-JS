/* eslint-disable react/prop-types */

// regarding prop validation / prop type, the goal is to define what type of data are the props inside a functional component. The example here is id and name.
// Basically, vite want to know what type of data is id and name. The simple answer is number for id and strng for name. But There are a way to type that here/ syntax.
// If you don't want to validate that, just turn off that with eslint
const TableData = ({ id, name }) => {
  return (
    <tr>
      <td className="border-2 border-black">{id}</td>
      <td className="border-2 border-black">{name}</td>
    </tr>
  );
};

export default TableData;
