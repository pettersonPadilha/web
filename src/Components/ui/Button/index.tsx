import {Container} from "./styles";
import {ReactNode,ButtonHTMLAttributes} from "react";
import {ImSpinner9} from "react-icons/im";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?:boolean,
    children:ReactNode,
}

export default function Button({loading, children, ...rest}:ButtonProps) {
    return(
        <Container> 
            <button className="button" disabled={loading} {...rest}>
                {loading ? (<ImSpinner9 color="#fff" size={16 }/>) : (<a className="buttonText">{children}</a>)}
                
            </button>
        </Container>
    );
}