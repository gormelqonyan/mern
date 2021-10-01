import "./card.scss"

export const Card = ({children, title}) => {
    return (
        <div className={"card"}>
            <h3 className={"card-title"}>{title}</h3>
            {children}
        </div>
    )
}