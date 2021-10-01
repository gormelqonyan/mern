import "./input.scss"

export const Input = ({ register, name, ...rest }) => {
    return (
        <input {...register(name)} {...rest} className={"input"}/>
    )
}