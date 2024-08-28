import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        border: 0px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .form-login{
        width: 30vw;
        height: 70vh;
        background-color: #9b4e4e;
        border-radius: 12px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .form-register{
        width: 30vw;
        height: 70vh;
        background-color: #555555;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .input-default{
        width: 250px;
        height: 30px;
        border-radius: 12px;
        border: none;
        box-sizing: border-box;
        padding: 0px 15px;
        font-size: large;
    }

    .btn-login{
        padding: 10px;
        width: auto;
        border-radius: 12px;
        border: 1px solid black;
        font-size: x-large;
    }
    .btn-login:hover{
        cursor: pointer;
        background-color: #dbdbdb;
    }

    .btn-register{
        padding: 10px;
        width: 150px;
        border-radius: 12px;
        border: 1px solid black;
        font-size: x-large;
    }
    .btn-register:hover{
        cursor: pointer;
        background-color: #dbdbdb;
    }

    .overlap{
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 999;
        top: 0;
        display: grid;
        place-items: center;
        background-color: #6c5c5c81;
    }

    .button-inside-render{
        background:none;
    }

    .button-inside-render:hover{
        cursor: pointer;
    }
`

export default GlobalStyled