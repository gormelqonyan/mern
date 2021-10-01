import React from "react"
import { useForm } from "react-hook-form"

export const Form = ({ defaultValues, children, onSubmit }) => {
    const { handleSubmit, register } = useForm({ defaultValues })
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                React.Children.map(children, (child, index) => {

                    if (typeof child.type !== "function") {
                        return React.createElement(child.type, {
                            ...{
                                ...child.props,
                                key: index
                            }
                        })
                    }

                    return child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register: register,
                                key: child.props.name + index
                            }
                        })
                        : React.createElement(child.type, {
                            ...{
                                ...child.props,
                                key: index
                            }
                        })
                })
            }
        </form>
    )
}

export default Form