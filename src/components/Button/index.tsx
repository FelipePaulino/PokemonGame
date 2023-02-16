import * as S from "./styled";

interface Button {
  text?: string;
  icon?: string;
  onClick?: () => void;
}

const Button = ({ text, icon, onClick }: Button) => (
  <S.ButtonWrapper className={`${icon ? "icon" : ""}`} onClick={onClick}>
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
