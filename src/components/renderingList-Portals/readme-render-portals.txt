*Rendering List and Portals

*Remember about array and object including the methods and prototypes in javascript
*Using key prop to render data list (a few way to do it)
*Remember separate operator in JavaScript. This will help to short the code if you want to render all of the props from components

*Open renderingList-Portals folder

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

*Regarding array prototypes in React
- This prototype will loop the data to get the result. The problem is that if we stack the prototype, for example:
    - We will  filter, then slice, then shift and then map the array. Each time prototype is applied, react will looping all the data from zero, so 4 prototypes will make react re render/ loop this array 4 times until the data show up.
    - This is not recommended and will reduce the App performance.
Solution: 
    - Try to minimize the quantity of prototype used in the components.
    - Try to sort or do data selection from the start, before entering the components, for example: create a conditions for the data like foreach before the return() so that the data is already sorted
    - Or hope that the backend developer can sort the data first before sending the data to the frontend developer.