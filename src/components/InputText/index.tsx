import React, { useEffect, useState } from "react";
import { DataUnion } from "../../types/pokemon";
import * as S from "./styled";

interface InputText {
  className?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  data: DataUnion;
  setData: React.Dispatch<React.SetStateAction<DataUnion>>;
  invalidated: boolean;
}

export default function InputText({
  className,
  label,
  type,
  placeholder,
  name,
  data,
  setData,
  invalidated,
}: InputText) {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (
      (invalidated && data[name] === "") ||
      (invalidated && data[name] === undefined)
    ) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [invalidated]);

  return (
    <S.InputTextWrapper className={className}>
      {label && <S.Label>{label}</S.Label>}

      <S.Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          if (e.target.value.length >= 2 && name) {
            setAlert(false);
            setData({ ...data, [name]: e.target.value });
          }
        }}
      />
      {alert && <S.Alert>Este campo é obrigatório</S.Alert>}
    </S.InputTextWrapper>
  );
}
