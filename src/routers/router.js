import {getStorage} from "helpers/utils";
import Login from "pages/Login";
import Register from "../pages/Register";

const loginRouter = [
    {
        path: "/login",
        Component:  Login,
        exact: true
    },
    {
        path: "/registration",
        Component: Register,
        exact: true
    },
    {
        path: "*",
        Component: Login,
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

