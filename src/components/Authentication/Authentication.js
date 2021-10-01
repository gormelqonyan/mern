import {Card, Form} from "components"

export const Authentication = ({children, title, onSubmit}) => {
    return (
        <div className={"authentication-form"}>
            <Card title={title}>
                <Form onSubmit={onSubmit}>
                    {children}
                </Form>
            </Card>
        </div>
    )
}