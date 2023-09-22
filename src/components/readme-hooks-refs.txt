Topic : (last: 50.00)
1. Hooks

*Knowlege about id references in primitive data (number, string, boolean) and non primitive data (array, object, nested array / object, or both).

2. Refs and The Dom 

1. Hooks
    - React has some of the built-in Hooks that we can use. 
        check: https://react.dev/reference/react to read full documentation about hooks (Important!)
    - Type of Hooks in React:
        a. State Hooks (Most used hooks)
        b. Context Hooks
        c. Ref Hooks (will learn about these at number 2)
        d. Performance Hooks
        e. Resource Hooks
        f. Other Hooks (custom hooks)
        g. Your own Hooks (custom hooks)
    
    a. State Hooks
        - State lets a component “remember” information like user input.
            1. useState
                - Declare a state variable that you can update directly
                - Open part-4-react.jsx for the full syntax
                - Study case:
                    1. If we create a function (let's say handleClick to increase number),the last setState inside the function will be the one that show in the web because javaScript read code from top to bottom. To prevent that and still processing the previous state, we need to add (prevState) => prevState + 1 inside as setNumber parameter

                    2. Using useState when handling event 'change' or in form format when we type the information inside the input, usually the data type will be object or array or both or nested. Project example: form (with <label> or <form> element), to do list
                Note: Check the useState documentation section Updating objects and arrays in state:
                    https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state
                    - Remember about array and object methods in JavaScript
                    - Remember about Spread Operator

            2. useReducer
                Visit to see full documentation:
                    https://react.dev/reference/react/useReducer
                    to see the example of using useReducer, scroll down to "Basic useReducer examples

                - useReducer full syntax:
                    const [state, dispatch] = useReducer(reducer, initialArg, init?)
                - parameters:
                    useReducer(reducer, initialArg, init?)
                        - init? params is optional, usually just reducer and initialArg
                        - initialArg = initial state or default state

*Knowlege about id references in primitive data (number, string, boolean) and non primitive data (array, object, nested array / object, or both).
    - This knowledge is important because in real cases, manipulate the data without changing the original data is very crucial. 
        example:
            1. Primitive data type (string, number, boolean)
                const a = "zan"; const b = "zan" 
                    a === b >Output = true
                Why? Because the id reference of string with the same value is the same. This also applies to other primitive data types like number and boolean.

            2. Non Primitive data types (array, object, and the combination between them like nested, array inside object, object inside array, etc)
                const a = [1, 2, 3, 4, 5]; const b = [1, 2, 3, 4, 5]
                    a === b >Output = false
                Why? Because the id reference EACH array (or object) is different, event though the value is the same.
                - If we want to manipulate the array or object data WITHOUT changing the original data sources, we can use Spread Operator (...).
                    example:
                        This is the original data source:
                            const a = [{id: 1, name: zan}, {id: 2, name: sel}];

                        Then, we want to manipulate the data but WITHOUT changing the const a values, we can do this:
                            const b = [...a];
                        The spread operator will copy the VALUE of const a, but a and b id reference are still different.
                        
                        We may use this to make a === b ; true (same id reference)
                            const b = a
                        BUT, DON'T DO THIS, because when we manipulate const b values, const a values also change.
