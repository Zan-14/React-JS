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


3. Implementing fetch in Authentication feature(login)
    visit: https://dummyjson.com/docs/auth

    Condition:
    - We want to add a login feature in the application, and after that the users will be redirected to the homepage
    - The user will have unique token
    - The user cannot go back to login page after successful login (by changing the URL for example) before click log out button

*Study Case: Authentication with login
    a. Create 2 new files inside router, which are private-route.jsx and protected-route.jsx (public-route)
        Note:
        - Private route: After log in (or need credential or permission first)
            example: user can click the details and buy the product after login
        - Public route or protected route: Without login / public
            example: 
            1. Login page (before the user is logged in)
            2. User can only see the homepage that show some information about the product
    
    b. Create login-page.jsx inside the pages folder
    c. Inside the file, type rafce and create the routing inside index.jsx

    d. Create a <form onSubmit={}> with input username, password, and a button with type="submit" inside it.
        note: onSubmit={} value will be added later.

    e. Create useNavigate above return()
        const navigate = useNavigate();
            note: import useNavigate from react-router-dom

    f. Create arrow function for handleSubmit
        *Inside it, add:
            - e.preventDefault();
            - const formData = new FormData(e.target)
            - const {username, password} = Object.fromEntries(formData);
            - fetch the authentication code from dummyjson.com > Auth > Login and get token
                > Edit:
                    - username
                    - password
                    - delete // optional line
                    - replace:
                        .then(res => res.json())
                        .then(console.log);
                        to:
                        .then(async res => {
                            if (res.status === 400)
                                return alert("Enter the correct username and password");
                            return navigate("/");
                        });
    
    g. Add handleSubmit into the form:
        <form onSubmit={handleSubmit}>

*Settings for private route and protected route (Start from 1:34:45)
    >Condition:
        - path="/" or home-page and path="/details/:id or product-detail-page are only accessible when the user is logged in (private route)
        - the user cannot go back to the login page after login by changing the URL to /login.
        - The user cannot access home-page and product-detail-page without login event though they type the URL (adding "/" or "/details/:id). Typing the URL without login will direct the user to a new blank page with text "Unauthorized 401" and a button to direct the user to login-page again.
    
    >Private Route (until 1:53:10):
        a. Open private-route.jsx and create the template (type rafc) (create the file if doesn't exist)
            - Open index.jsx and wrap home-page and product-detail-page inside the private-route.jsx
            syntax:
            <Route path="/" element={<PrivateRoute />}>
                <Route index element={<Homepage />} />
                <Route path="/details/:id" element={<ProductDetailsPage />} />
            </Route>

        b. Create a folder named utils and a file auth.js inside the folder
        c. install js-cookie on terminal:
            npm i js-cookie
        d. Add this inside auth.js:
            - import Cookies from "js-cookie";
            - get and set the cookies.
            Syntax:
                import Cookies from "js-cookie";

                const auth = {
                    isAuthenticated () {
                        return Cookies.get('token');
                    }, 
                    storeAuthCredential: (token) => {
                        return Cookies.set("token", token);
                    },
                };

                export default auth;
        
        e. Open login-page.jsx and do:
            - import auth from "../../utils/auth";
            - await response json in const token; (below if)
            - put auth.storeAuthCredential(token);
            Syntax:
                .then(async res => {
                    if (res.status === 400)
                        return alert("Enter the correct username and password");
                    const { token } = await res.json();
                    auth.storeAuthCredential(token);
                    return navigate("/");
                });
            note: this section using asynchronous javascript (async / await function)

        f. Open private-route.jsx and do:
            - import auth from "../../utils/auth";
            - import UnauthorizedPage
            - import { Outlet } from "react-router-dom";
            - Call the auth with if / conditional rendering
            - Create a condition when auth.isAuthenticated() is true, open "/" and if it's false, open a new page (unauthorized-page.jsx). Create the page inside pages folder if the page is not exist yet.
            Syntax:
                import { Outlet } from "react-router-dom";
                import { UnauthorizedPage } from "../components/pages/unauthorized-page";
                import auth from "../utils/auth";

                export const PrivateRoute = () => {
                    if (auth.isAuthenticated()) 
                        return <Outlet />;

                    return <UnauthorizedPage />;
                };
        g. Open unauthorized-page.jsx, create the template, and add link to the login-page.jsx
            syntax:
                import { Link } from "react-router-dom";

                export const UnauthorizedPage = () => {
                    return (
                        <div>
                        <h1 className="py-5 text-3xl font-bold text-center">ACCESS DENIED</h1>
                        <h1 className="py-5 text-2xl font-bold text-center">401</h1>
                        <div className="flex justify-center items-center">
                            <Link to={"/login"}>
                            <button className="bg-yellow-300 px-5 py-2 rounded-xl font-semibold hover:bg-blue-300">
                                Login
                            </button>
                            </Link>
                        </div>
                        </div>
                    );
                };
                Note: don't mind the className, It's just for styling purposes

        f. Create a logout utils inside auth.js
            - Open auth.js
            - Below storeAuthCredential add logout function that will remove cookies and redirected to login page.
            syntax:
                logout () {
                    Cookies.remove("token");
                    window.location.href = "/login";
                }
        g. Create a button in homepage to logout
            syntax:
                <button
                    onClick={() => auth.logout()}
                    className="bg-slate-200 rounded-lg px-3 py-2 "
                >
                    Logout
                </button>
            note: import auth from auth.js first

        Note: At this point, the first page that user will be shown is unauthorized-page.
            - User can login and get the token. Then the user will be directed to the home-page. 
            - User can click logout button in the homepage and remove the token.
                Also will be directed to the login-page 
            - User who hasn't loggged in yet can't access home-page(even when they try to change the URL).
            - User can still go to login-page (by typing the URL) after successful login. This will be fix in the protected route.
    
    >Protected route
        a. Open protected-route.jsx and create the template
        b. Same with private-route, we use if / conditional rendering but inside the if is the opposite of private-route. The return also different from private-route, because we want the user who has logged in cannot access login-page. 
            Syntax:
                import { Navigate, Outlet } from "react-router-dom";
                import auth from "../utils/auth";

                export const ProtectedRoute = () => {
                // the opposite of the private route by addint ! before auth
                    if (!auth.isAuthenticated()) return <Outlet />;

                    return <PrivateRoute />;
                    // or
                    return <Navigate to="/" />;
                };
            Note: If PrivateRoute is used, import the page first. If Navigate is used, import navigate first.

        c. Setup the protected router in Index.jsx
            - Wrap login page inside protected route
            syntax:
                <Route path="/" element={<ProtectedRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>

    *DONE

*Why using js-cookie or Cookies?
    - Server can read cookies
    - Expired time also can be implemented (user will lost the token after certain amout of time)
    - The other way is to use session, so when the user close the page, they must login again.

*Manipulate the URL
    If we want to manipulate the URL when searching or clicking product detail, we can use params (watch Session 23 React JS Part 3 => 1:57:00 )