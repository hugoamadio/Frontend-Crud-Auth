import { ReactNode } from "react"
import ButtonDefaultStyled from "./Styled"

interface ButtonDefaultProps{
    children: ReactNode
    onClickFunction?: () => void;
}

function ButtonDefault({children, onClickFunction}: ButtonDefaultProps){
    return(
        <ButtonDefaultStyled onClick={onClickFunction}>{children}</ButtonDefaultStyled>
    )
}

export default ButtonDefault