import "./style/main.scss"

import Routers from "./routers"
import { Layout } from "./components";

export default function App () {
    return(
        <Layout>
            <Routers/>
        </Layout>
    )
}