*REACT JS PART 3*

Topic : 
0. The Purpose of using Vite in React
1. Routers
2. How to use (fetch) JSON files in React
3. Implementing fetch in Authentication feature(login)
4. Event Handling 
5. Error Handling 


0. The Purpose of using Vite in React
    a. Actually, we can use Next.js or  Gatsby.js, or other Production-grade React framework.
    b. Vite is one of started pack library for React. Also can be used in Vue.
        - Vite using esbuild, not webpack like CRA.

        Other example of started pack library is Create React App (CRA). The reason CRA is not used anymore is because it is deprecated or not maintained anymore.
            Behind the scene, CRA use webpack

    c. Vite is recommended and faster than CRA because:
        - it will compile into one file only so that the change inside the file or folder will be adjusted just the targeted file only, not the whole project file. CRA will check all the files in the project even though the change is just a little inside a specific file or folder.

    d. Using vite when LEARNING is recommended, but when it comes to production development, Next.js is better for now. Why is that?
        - Vite is new, so the ecosystem is still unstable even though the starting file size is smaller than using Next.js for example.
        - Regarding point C. Compiling all the file in the project is recommended when we want to check all the errors in the project. Using vite will hide the errors in the specific file or folder when we are not opening it. It will confuse the developer sometimes.

1. Routers
    - Check Folder routers inside src folder
    - Check this link:
    https://reactrouter.com/en/main

2. How to use (fetch) JSON files in React
    *Open readme-fetch-json.txt in the components folder to get the details.

        a. Remember fetch() method. 
            What is it?
                - fetch() method in JavaScript is used to request data from a server
        b. This fetch() will be related to API (Application Programming Interface)
        c. visit https://dummyjson.com/docs/products to get dummy json file.

3. Implementing fetch in Authentication feature(login)
    visit: https://dummyjson.com/docs/auth
    Condition:

        - We want to add a login feature in the application, and after that the users will be redirected to the homepage
        - The user will have unique token
        - The user cannot go back to login page after successful login (by changing the URL for example) before click log out button

    *Open routers folder to get the details.    

4. Event Handling
    - Every event or interaction that happen in the web like click, right-click, scroll, double-click, block, hover, submit, zoom-in/out, etc. That's why in JavaScript, there is addEventListener to create the effect of the interaction.
    - Open login-page.jsx and read / follow number 3, Creating login feature is also applying event handle like onSubmit in form element.
    - Open event on MDN to know list of Event listening

5. Error handling
    - Related to how to handle the data by using:
        a. Nullish operator,
        b. AND logic,
        c. Ternary operator,
        d. Optional chaining operator,
            - This operator is used to prevent the App crash or error.
            - Usually happen when we want to call a data from array or function but the data actually doesn't exist.

*Random Question:
    1. How to do Microservices in React?
        - React is not the way to handle Microservices
        - There is a term called Micro Frontends, which is a few frameworks that work together to handle some Apps (Micro Apps)
        visit this to know the explanation in image
        https://www.google.com/search?sca_esv=567469796&rlz=1C1CHZN_enID968ID968&sxsrf=AM9HkKlYGhYzzqBZGwnX2VKEJMMR-HntRQ:1695352063466&q=micro+frontend&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwiC_YvMnr2BAxXUfGwGHY82DzEQ0pQJegQIDBAB&biw=958&bih=961&dpr=1