import {Route, Switch} from "react-router-dom";
import {router} from "./router";

export default function Routers () {
    return (
        <Switch>
            {
                router.map(({path, component, exact}) => {
                    return <Route path={path} exact={exact} component={component}/>
                })
            }
        </Switch>
    )
}