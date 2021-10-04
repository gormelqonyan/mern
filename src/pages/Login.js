import {Authentication, Button, Input} from "components";

export default function Login () {
    return (
        <Authentication title={"login"} onSubmit={(data) => console.log(data)}>
            <Input type="text" name={"login"} placeholder={"Login"}/>
            <Input type="text" name={"password"} placeholder={"Password"}/>
            <Button title={"Submit"} />
            <Button title={"Create new Account"} to={"/signup"} />
        </Authentication>
    )
}