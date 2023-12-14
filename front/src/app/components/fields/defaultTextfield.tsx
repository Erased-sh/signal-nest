import { TextField } from "@mui/material";
import { FC } from "react";

interface TextFieldProps{
    value:string,
    placeholder:string,
    onChange:(event:string)=>void
}



export const TextfieldDef:FC<TextFieldProps>=({value,placeholder,onChange})=>{
    return(
    <div>
        <TextField value={value} placeholder="placeholder" onChange={(e)=>{onChange(e.target.value)}}/>
    </div>)

}