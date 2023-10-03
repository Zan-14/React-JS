*REACT JS PART 6*
Session 26 HariSenin Bootcamp (PDF and Video record)
Start from 21:15

Topic : 
1. State Management
2. Context in React (start from 37.00)
3. Redux

1. State Management
    - Concept to manage state in a component and tranform it to  a global state that can be used by other components.
    - Redux is one of the most used state management in react 
    - useContext vs Redux
        a. useContext is state management local
        b. Redux is state management global 

2. Context (start from 37.00)
    - in react projects, there are folders inside src like:
        a. contexts, used for creating context (useContext)
        b. hooks, used for save custom hooks
    -  Some of the way to use context are for authentification


3. Redux 
    - Use redux when the app is more complex, simple app doesn't always need to use redux. Use built in hooks from react like useState, useReducer, useContext, etc is enough.
    - The reason for this is redux has boilerplate that contains many folders and files that have to be initiated/created.
        Boilerplate means some codes or text/functions that can be used multiple times without changing the source code. In this example, the boilerplate will be redux folder, store.js, combinedReducer.js, actions folder, and reducer folder.
    (there are 2 ways to use redux, old way and new way)
    This section is for the old way
    - How to install
        a. install these 3 => redux, react-redux, @reduxjs/toolkit with this command line:
            npm install redux react-redux @reduxjs/toolkit

    - How to use it
        b. Create a folder inside src named "redux"
        c. Create a file named "store.js" (check inside it)
        d. Same with the pdf file, we need to use reducer.
            So, reducer is a function compilations that will be executed based on the action (slide 7)

        e. Create another file named "combinedReducer.js"
        f. Call the reducer from combinedReducer.js to store.js (check inside it to create some kind of "database" for the global state)

        g. Create a folder inside the reduc folder named "actions"
        h. inside the actions folder, create the specific action folder like for example "multiply"

        i. inside it, create 2 files, multiplyActions.js and multiplyActionTypes.js (start from 54:00)

        j. Inside multiplyActionTypes.js, we create the command like "MULTIPLY"
        k. Inside multiplyActions.js, we create a funcion with an object as return type: MULTIPLY and payload (check the file)
        l. Create a reducers folder inside the redux folder and then create a file named "multiplyReducer.js"
        m. Create the initialState inside the file and create the function with switch case to use the action that we have created (check the file)
        n. (I don't know how to type this step into text, just watch the video start from 54:00)
        o. To know the function of payload, watch the video start from 1:11:00

    - Redux the new way
        - we use the toolkit that we have installed before (@reduxjs/toolkit)
        - More simple than the old way
            a. The main difference is at the store file 
                store.js is the old way, store2.js is the new way
        - How to use it
            b. After configurating store2.js, create a new folder inside the redux named "slice"
                - What is slice for? 
                    The simple answer is that slice is to replace actions and reducers folder. So instead of creating 2 folder with different files, we just need to create a single folder named slice with the same function with the actions and reducers folder
            c. Create a new file named "multiplySlice.js" 
                We want to recreate the multiply function in the new way so we can compare between the old and new
            
