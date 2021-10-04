import React from "react"
import { useForm } from "react-hook-form"

import "./form.scss"

export const Form = ({ defaultValues, children, onSubmit }) => {
    const { handleSubmit, register, watch } = useForm({ defaultValues })
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
            {
                React.Children.map(children, (child, index) => {
                    return child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register: register,
                                key: child.props.name + index,
                                watch,
                            }
                        })
                        : child
                })
            }
        </form>
    )
}

export default Form