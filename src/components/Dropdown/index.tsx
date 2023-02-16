import React, { useEffect, useState } from "react";
import chevron from "../../assets/images/chevronDownBlack.png";
import { Data } from "../../types/pokemon";
import { Option } from "../../utills/options";
import * as S from "./styled";

interface DropdownPageProps{
  label?: string,
  options: Array<Option>, 
  data: Data, 
  name: string, 
  setData: React.Dispatch<React.SetStateAction<Data>>, 
  invalidated: boolean
}

export default function DropdownPage ({ label, options, data, name, setData, invalidated }: DropdownPageProps) {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (invalidated && data?.type1 === "") {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [invalidated, data]);

  return (
  <S.DropdownWrapper>
    {label && <S.Label>{label}</S.Label>}

    <S.DropdownContent>
      <S.Select onChange={(e)=> {        
        setData({...data, [name]: e.target.value });
        if (e.target.value.length > 0) {
          setAlert(false)
        } else {
          setAlert(true)
        }
        }}>
        <S.DropdownOption value="">Selecione o(s) tipo(s)</S.DropdownOption>
        {options &&
          options.map((option:Option, index:number) => (
            <S.DropdownOption key={index} value={option.value} >
              {option.text}
            </S.DropdownOption>
          ))}
      </S.Select>
      <S.DropdownIcon src={chevron} alt="Chevron" />
    </S.DropdownContent>
    {alert && (
        <S.Alert>Este campo é obrigatório! Selecione ao menos um tipo</S.Alert>
      )}
  </S.DropdownWrapper>
  )
};


