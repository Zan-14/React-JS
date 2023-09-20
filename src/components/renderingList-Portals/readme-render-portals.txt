*Rendering List and Portals

*Remember about array and object in javascript

example of array of objects data:
  const data = [
    {
      name: "Zan",
      fullName: "Fauzan Jumdinhar",
      favoriteFood: "Fries",
    },
    {
      name: "Sel",
      fullName: "Sel Sela",
      favoriteFood: "Noodle",
    },
    {
      name: "Jo",
      fullName: "Josh Macdave",
      favoriteFood: "Curry",
    },
  ];

-To render this data, we could use (type below the const data):
return (
    <div>
        {data.map(())}
    </div>;
)

>Note: 
    1. Map is an array prototype to loop data
    2. Inside array method map, we could use up to 3 parameters. The most used is the name of the const, example: 
    data.map((data) => {
        return <></>
    })