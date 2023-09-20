import TableData from "./list-data-table";
import { v4 as uuidv4 } from "uuid";

const RenderList = () => {
  const data = [
    {
      id: 1,
      name: "Zan",
      fullName: "Fauzan Jumdinhar",
      favoriteFood: "Fries",
    },
    {
      id: 2,
      name: "Sel",
      fullName: "Sel Sela",
      favoriteFood: "Noodle",
    },
    {
      id: 3,
      name: "Jo",
      fullName: "Josh Macdave",
      favoriteFood: "Curry",
    },
  ];
  return (
    <div className="mx-5 flex flex-wrap justify-center">
      <table className="m-5 border-4 border-separate border-black">
        <thead>
          <tr>
            <th className="border-2 border-black">Name</th>
            <th className="border-2 border-black">Favorite Food</th>
          </tr>
        </thead>
        <tbody>
          {data.map(data => {
            {
              /* we need key prop to render array data. Learn more how to use it. Using key={index} is not recommended, prefer using id from the object data (backend). There is some ways to get the ID in list data (like uuidv4, crypto uuid?), but that will be another section*/
            }
            return (
              <tr key={data.id}>
                <td className="border-2 border-black">{data.name}</td>
                <td className="border-2 border-black">{data.favoriteFood}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* this the other way to render list data / array */}
      <table className="m-5 border-4 border-separate border-green-200">
        <thead>
          <tr>
            <th className="border-2 border-black">Name</th>
            <th className="border-2 border-black">Favorite Food</th>
          </tr>
        </thead>
        <tbody>
          {/* the different with the first table is here */}
          {data.map(({ favoriteFood, name }, index) => {
            // Using key={index} as key prop is not recommended, prefer using id from the object data (backend).
            return (
              <tr key={index}>
                <td className="border-2 border-black">{name}</td>
                <td className="border-2 border-black">{favoriteFood}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Array selection with array.filter and using uuidv4 as key prop*/}
      <table className="m-5 border-4 border-separate border-red-200">
        <thead>
          <tr>
            <th className="border-2 border-black">Number</th>
            <th className="border-2 border-black">Name</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* this is called piped, filter the array then map it. */}
          {/* Things to know about piping the array, the longer the pipe, more power is need to execute / the App will be slower and heavier. For example, We will  filter, then slice, then shift and then map the array. Each time prototype is applied, react will looping all the data from zero, so 4 prototypes will make react re render/ loop this array 4 times until the data show up. This is not recommended */}
          {data
            .filter(data => data.id > 1)
            .map(props => {
              // Using key prop uuidv4. Using seperate operator (...). This mean we don't need to input all the props from TableData, we just type this {...props} and add props into data.map(props), you are good to go.
              return <TableData key={uuidv4()} {...props} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RenderList;
