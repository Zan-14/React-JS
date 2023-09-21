*Routers
- Check Folder routers inside src folder
- Check this link:
https://reactrouter.com/en/main

1. Setup:
    1. Create the project (this case is using vite)
    2. Install the react-router with:
        npm install react-router-dom localforage match-sorter sort-by
    3. Create a routers folder inside src folder
    4. Create the provider by:
        a. Open main.jsx
        b. Wrap <App /> with <BrowserRouter> like this:
            <BrowserRouter>
                <App />
            </BrowserRouter>
        c.
    5. Create index.jsx in the routers folder
        > and create a standard FC (Functional Component)
    6. Copy this syntax: (the content inside may be different because of the location of the route, and the opening element)

        import { Route, Routes } from "react-router-dom";

        const Routers = () => {
        return (
            <Routes>
            <Route
                path="/"
                element={
                <h1 className="text-center font-bold text-xl bg-gray-300">
                    Homepage
                </h1>
                }
            />
            <Route
                path="/contact"
                element={
                <h1 className="text-center font-bold text-xl bg-blue-400">
                    Article I Page
                </h1>
                }
            />
            </Routes>
        );
        };

        export default Routers;

    7. Create a component (pages folder) inside the components folder.
    8. Inside pages folder, create the pages like home-page and contact-page.
    9. Create a template with typing rafce (feature from ES7 + React extension)
    10. Create the component, then if you want to link the page to the other page, do this:
        1. import link from react-router-dom:
            import { Link } from "react-router-dom";
        2. type:
            <Link to="/">Go to Homepage</Link> this is just the example
        3. Make sure the to="" is the same with path="" in index.jsx file

    11. If you are done with creating other pages, don't forget to link the landing page or homepage into App.jsx file by importing:
        import Routers from "./routers";

    12. Put <Routers /> in return and the homepage/ default page with "/" path will show up. 

    13. If you have some element inside App other than <Routers />, the element will not change even though you have moved to the other page.


    

2. What is React Router DOM?
    - React router is a way to navigate or move between end points, example:
        - We have an App or web, There are multiple pages in the App. We need to connect between the pages (login, landing page, profile page, etc)
        - We can create a multiple pages inside the App.jsx only. That is needed because that file will only generate a single HTML page. That's why router is important.

3. Study Case: Authentication with login
    a. Create 2 new files inside router, which are private-route.jsx and protected-route.jsx (public-route)
        Note:
        - Private route: After log in
            example: user can click the details and buy the product after login
        - Public route: Without login
            example: user can only see the homepage that show some information about the product