import "./style/main.scss"

import Routers from "./routers"
import Layout from "./components/Layout";

export default function App () {
    return(
        <Layout>
            <Routers/>
        </Layout>
    )
}