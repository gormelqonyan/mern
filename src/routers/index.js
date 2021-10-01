import {Route, Switch} from "react-router-dom";
import {router} from "./router";

export default function Routers () {
    return (
        <Switch>
            {
                router.map(({path, Component, exact}, index) => {
                    return <Route path={path} exact={exact} component={() => <Component/>} key={`route-${index}`}/>
                })
            }
        </Switch>
    )
}