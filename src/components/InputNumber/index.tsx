import React, { useEffect, useState } from "react";
import chevron from "../../assets/images/chevronDownBlack.png";
import { Data } from "../../types/pokemon";
import * as S from "./styled";
import shield from "../../assets/images/shield.png";
import speed from "../../assets/images/speed.png";
import sword from "../../assets/images/sword.png";

interface InputNumberProps {
  className?: string;
  label: string;
  placeholder: string;
  name: string;
  suffix?: string;
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  invalidated: boolean;
  icon?: boolean;
}

export default function InputNumber({
  className,
  label,
  placeholder,
  name,
  suffix,
  data,
  setData,
  invalidated,
  icon,
}: InputNumberProps) {
  const [alert, setAlert] = useState(false);
  const [number, setNumber] = useState<string | number>("");

  useEffect(() => {
    if (invalidated && data[name] === 0) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [invalidated]);

  const handleIncrease = () => {
    setNumber(+number + 1);
  };

  const handleDecrease = () => {
    setNumber(+number - 1);
  };

  useEffect(() => {
    setData({ ...data, [name]: number });
  }, [number]);

  useEffect(() => {
    if (number > 0) {
      setAlert(false);
    }
  }, [number]);

  const iconValue = (label: any) => {
    if (label === "defesa" || label === "defesa-especial") {
      return shield;
    } else if (label === "ataque" || label === "ataque-especial") {
      return sword;
    } else {
      return speed;
    }
  };

  return (
    <S.InputNumberWrapper className={className}>
      {label && (
        <S.BoxTextIcon>
          {icon && <S.Icon src={iconValue(label)} />}
          <S.Label>{label}</S.Label>
        </S.BoxTextIcon>
      )}

      <S.InputContent>
        <S.Input
          value={number === "" ? "" : ("0" + data[name]).slice(-3)}
          type="number"
          placeholder={placeholder}
          name={name}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setNumber(e.currentTarget.value);
          }}
        />

        {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

        <S.InputActions>
          <S.Arrow
            src={chevron}
            className="increase"
            alt="Mais"
            onClick={() => handleIncrease()}
          />
          <S.Arrow
            src={chevron}
            className="decrease"
            alt="Menos"
            onClick={() => handleDecrease()}
          />
        </S.InputActions>
      </S.InputContent>
      {alert && <S.Alert>Este campo é obrigatório</S.Alert>}
    </S.InputNumberWrapper>
  );
}
