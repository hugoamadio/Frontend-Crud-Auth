import { ChangeEvent } from "react";
import InputStyled from "./Styled";

interface InputDefaultProps {
  textPlaceHolder: string;
  typeInput: string;
  value: string;
  onchange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

function InputDefault({ textPlaceHolder, typeInput, value, onchange }: InputDefaultProps) {
  return (
    <InputStyled placeholder={textPlaceHolder} type={typeInput} value={value} onChange={onchange}></InputStyled>
  );
}

export default InputDefault;
