import {useState, useEffect} from "react";
import imagePlaceholder from "assets/image-placeholder.jpg"

import "./upload.scss"
import {useForm} from "react-hook-form";

export const Upload = ({register, name, watch, ...rest}) => {
    const [file, setFile] = useState("")

    const fileLoad = (file, cb) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            cb(reader.result)
        }, false)
        reader.readAsDataURL(file)
    }

    useEffect(() => {
        if (watch(name) && watch(name).length) {
            fileLoad(watch(name)[0], setFile)
        }
    }, [watch(name)])

    return (
        <label htmlFor={`upload-${name}`} className={"upload"}>
            <img src={file || imagePlaceholder}/>
            <input id={`upload-${name}`} type="file" {...register(name)} {...rest}/>
        </label>
    )
}