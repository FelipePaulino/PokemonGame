import * as S from "./styled";

interface TopicsProps {
  label: string;
}

export default function TitleTopics({ label }: TopicsProps) {
  return (
    <S.Container>
      <S.Line />
      <S.Topics>{label}</S.Topics>
      <S.Line />
    </S.Container>
  );
}
