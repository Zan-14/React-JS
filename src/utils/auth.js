// auth = authentication
import Cookies from "js-cookie";

const auth = {
    // Login will give a token
    isAuthenticated () {
        return Cookies.get('token');
    }, 
    storeAuthCredential: (token) => {
        return Cookies.set("token", token);
    },
    // create logout function and remove the token
    logout () {
        Cookies.remove("token");
        window.location.href = "/login";
    }
};

export default auth;