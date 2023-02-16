import * as S from "./styled";

interface ButtonProps {
  text?: string;
  icon?: string;
  onClick?: () => void;
}

const Button = ({ text, icon, onClick }: ButtonProps) => (
  <S.ButtonWrapper className={`${icon ? "icon" : ""}`} onClick={onClick}>
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
