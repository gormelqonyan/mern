import {getStorage} from "helpers/utils";
import Login from "pages/Login";
import Register from "pages/Register";
import Redirect from "pages/Redirect";

const loginRouter = [
    {
        path: "/login",
        Component:  Login,
        exact: true
    },
    {
        path: "/signup",
        Component: Register,
        exact: true
    },
    {
        path: "*",
        Component: Redirect,
        exact: true
    },
]

const homeRouter = [
    {
        path: "/",
        exact: true,
        Component: Login
    },
    {
        path: "*",
        Component: Login,
        exact: true
    }
]

export const router = getStorage("token") ? homeRouter : loginRouter

