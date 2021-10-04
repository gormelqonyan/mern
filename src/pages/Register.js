import {Authentication, Input, Button, Upload} from "components";

export default function Register () {
    return (
        <Authentication title={"Sign Up"} onSubmit={(data) => console.log(data)}>
            <Upload name={"upload-image"} />
            <Input type="text" name={"login"} placeholder={"Login"}/>
            <Input type="text" name={"password"} placeholder={"Password"}/>
            <Input type="text" name={"re-password"} placeholder={"Repeat Password"}/>
            <Button title={"Sign Up"} />
            <Button title={"Have account ?"} to={"/login"} />
        </Authentication>
    )
}