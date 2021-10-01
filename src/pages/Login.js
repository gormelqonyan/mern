import {Authentication, Input} from "components";

export default function Login () {
    return (
        <Authentication title={"login"} onSubmit={(data) => console.log(data)}>
            <Input type="text" name={"login"} placeholder={"Login"}/>
            <Input type="text" name={"password"} placeholder={"Password"}/>
            <button>Submit</button>
        </Authentication>
    )
}