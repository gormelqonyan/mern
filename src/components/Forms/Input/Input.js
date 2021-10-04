import "./input.scss"

export const Input = ({ register = () => {}, name, watch, ...rest }) => {
    return (
        <input {...register(name)} {...rest} className={"input"}/>
    )
}