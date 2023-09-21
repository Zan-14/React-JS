*REACT JS PART 3*

Topic : 
1. Component Lifecycle
2. Rendering List
3. Portals
4. Introduction to Hooks in React
5. Introduction to TypeScript


*Pro and Cons from reusable components:

1. Pro
    - Can be used as template, for example: styling format, component like buttons (including the function of the button), etc.

2. Cons
    - If the component  has same format but different data each time it is rendered, there will be many conditions stacked.
    This will create too many props on one reusable component.
    Example: Cards with different image, different color, different text/content.
Solution:
    - Its ok to create a component that only we use once event though the format is similar with other components. This will avoid too many props on a component.


*Introduction to Hooks in React
Most used Hooks:
    -useState: to create a const that can change the state
        *syntax:

        const [isActive, setIsActive] = useState(false);
        <button
            onClick={() => setIsActive(!isActive)}
            className="..."
          >
            Press to change the state of isActive
        </button>

    Note: From the syntax above, each time the button is clicked, the state of isActive changes to !isActive of the opposite of current state which is true, vice versa.
    Warning!: Don't use too many states because it can potentially cause bugs. Use State Management or Redux or useReducer instead . Learn about it more in Hooks and redux topic.


    -useEffect: To trigger algorithms (maybe a function to show something or to loop or to delete, etc) when a certain state or variable is changed.
        *syntax example for a button to increase a number on console:

        import {useEffect} from "react";

        const [count, setCount] = useState(0);
        useEffect(() => {
            console.log(count);
        }, [count]);

        *This section is below return()
        <button onClick={() => setCount(count + 1)}>Add number to console</button>

    Note: Be careful when using useEffect, because it can potentially cause a bug and crash the App if infinite render is triggered.


*Introduction to TypeScript
TypeScript in a nutshell:
They want us to define everything and create a rule to manage the input or change data. Simple example:
    
    import React from "react";
    import {FC} from "react";

    interface nameVariable {
        name: string;
    };

    const UserData: React.FC<nameVariable> = ({name}) => {
        const [test, setTest] = useState<boolean>(false);
        return <div>{name}</div>
    };

    export default UserData;

Note: FC is FunctionalComponent, so we define UserData as a functional component.

From a component above, if we want to import it to a parent component, we need to add a string data only when using name props. It will be error if we add another type of data. Also when we want to use Hooks like useState, we need to define the type of data of the state.

