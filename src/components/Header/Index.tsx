import { useContext } from "react";
import ButtonDefault from "../ButtonDefault/Index";
import HeaderStyled from "./Styled"
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { UserContext } from "../../contexts/UserContext";

interface HeaderProps{
    newStudent: () => void;
}

function Header({newStudent}: HeaderProps){

    const userContext = useContext(UserContext)

    function handleClickNew(){
        newStudent()
    }

    function handleClickLogout(){
        userContext?.logout()
    }

    return(
        <HeaderStyled>
            <AddReactionIcon fontSize="large"/>
            <div style={{display: 'flex', gap: "80px"}}>
                <ButtonDefault onClickFunction={handleClickNew}>Novo Cadastro</ButtonDefault>
                <ButtonDefault onClickFunction={handleClickLogout}>Sair</ButtonDefault>
            </div>
        </HeaderStyled>
    )
}

export default Header