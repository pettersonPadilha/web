import {Container} from "../Input/styles";
import {InputHTMLAttributes, TextareaHTMLAttributes} from "react"

interface InputProps  extends InputHTMLAttributes<HTMLInputElement>{}
interface TextAreaPprops extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function Input({...rest}:InputProps) {
    return(
        <Container>
            <input className="input" {...rest}/>
        </Container> 
        
    );
}

export function TextArea({...rest}:TextAreaPprops) {
    return(
        <textarea className="input" {...rest}></textarea>
    )
}