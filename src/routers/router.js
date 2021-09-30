import {getStorage} from "../helpers/utils";
import Login from "../pages/Login";

const loginRouter = [
    {
        path: "/login",
        component: () => <Login/>,
        exact: true
    },
    {
        path: "/registration",
        component: () => <div>Registration page</div>,
        exact: true
    },
    {
        path: "*",
        component: () => <div>Redirect page</div>,
        exact: true
    },
]

const homeRouter = [
    {
        path: "/",
        exact: true,
        component: () => <div>Home page</div>
    },
    {
        path: "*",
        component: () => <div>Page Not Found</div>,
        exact: true
    }
]

export const router = getStorage("token") ? homeRouter : loginRouter

