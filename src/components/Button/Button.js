import {Link} from "react-router-dom";
import "./button.scss"

export const Button = ({title, to}) => {

    if (to) {
        return (
            <div className={"button-link"}>
                <Link to={to}>{title}</Link>
            </div>
        )
    }

    return (
        <button className={"button"}>
            {title}
        </button>
    )
}