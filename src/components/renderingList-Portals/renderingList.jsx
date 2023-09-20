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
    <div className="my-5 mx-5">
      <table className="border-4 border-separate border-black">
        <thead>
          <tr>
            <th className="border-2 border-black">Name</th>
            <th className="border-2 border-black">Favorite Food</th>
          </tr>
        </thead>
        <tbody>
          {data.map(data => {
            return (
              <tr key={data.id}>
                {/* we need key prop to render array data. Learn more how to use it. Using key={index} is not recommended, prefer using id from the object data*/}
                <td className="border-2 border-black">{data.name}</td>
                <td className="border-2 border-black">{data.favoriteFood}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RenderList;
