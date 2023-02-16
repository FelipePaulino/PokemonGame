import { useEffect, useState } from "react";
import * as S from "./styled";
import close from "../../assets/images/close.png";
import Button from "../Button";
import camera from "../../assets/images/camera.png";
import InputText from "../InputText";
import DropdownPage from "../Dropdown";
import InputNumber from "../InputNumber";
import { options } from "../../utills/options";
import { usePokemon } from "../../Provider/context";
import { Data, DataAbilities, DataUnion } from "../../types/pokemon";
import iconPlus from "../../assets/images/plus.png";
import TitleTopics from "../TitleTopics";

interface NewModal {
  setOpenCreationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewModal({ setOpenCreationModal }: NewModal) {
  const { pokemons, setPokemons } = usePokemon();
  const [selectedImage, setSelectedImage] = useState<any>();
  const [dataAbilities, setDataAbilities] = useState<DataAbilities>({
    abilities1: "",
    abilities2: "",
    abilities3: "",
    abilities4: "",
  });

  const [numberOfAbilities, setNumberOfAbilities] = useState(0);
  const [invalidated, setInvalidated] = useState(false);

  const [data, setData] = useState<Data>({
    id: 0,
    name: "",
    hp: 0,
    weight: 0,
    height: 0,
    type1: "",
    type2: "",
    abilities: [],
    defense: 0,
    attack: 0,
    specialDefense: 0,
    specialAttack: 0,
    speed: 0,
    sprites: { front_shiny: "" },
    stats: { base_stat: 0 },
  });

  const newPokemon = () => {
    if (
      data.name !== "" &&
      data.hp !== 0 &&
      data.weight !== 0 &&
      data.height !== 0 &&
      data.type1 !== "" &&
      data.abilities.length !== 0 &&
      data.defense !== 0 &&
      data.attack !== 0 &&
      data.specialDefense !== 0 &&
      data.specialAttack !== 0 &&
      data.speed !== 0
    ) {
      setPokemons([...pokemons, data]);
      setOpenCreationModal(false);
    } else {
      setInvalidated(true);
    }
  };

  const handleIncrease = () => {
    setNumberOfAbilities(+numberOfAbilities + 1);
  };

  const handleDecrease = () => {
    setNumberOfAbilities(+numberOfAbilities - 1);
  };

  const abilities = Object.values(dataAbilities);

  useEffect(() => {
    setData({ ...data, abilities: abilities as string[] });
  }, [dataAbilities]);

  useEffect(() => {
    if (selectedImage) {
      setData({
        ...data,
        sprites: { front_shiny: URL.createObjectURL(selectedImage) as any },
      });
    }
  }, [selectedImage]);

  // let photo = document.getElementById('imgPhoto');
  // let file = document.getElementById('flImage');

  // photo?.addEventListener('click', () => {
  // file?.click();
  // });

  return (
    <S.Modal>
      <S.Form>
        <S.Close onClick={() => setOpenCreationModal(false)}>
          <S.X src={close} />
        </S.Close>
        <S.ImagePokemonBox>
          <input
            type="file"
            name="flImage"
            id="flImage"
            onChange={(event: any) => {
              event.preventDefault();
              setSelectedImage(event.target.files[0]);
            }}
          />
          <S.BoxAddImage>
            {selectedImage ? (
              <img
                alt="not fount"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
            ) : (
              <>
                <S.ImagePokemon src={camera} />

                <S.IconAdd htmlFor="flImage">
                  <img src={iconPlus} />
                </S.IconAdd>
              </>
            )}
          </S.BoxAddImage>
        </S.ImagePokemonBox>
        <S.Box>
          <InputText
            label={"nome"}
            placeholder={"NOME"}
            name={"name"}
            data={data}
            invalidated={invalidated}
            setData={
              setData as unknown as React.Dispatch<
                React.SetStateAction<DataUnion>
              >
            }
          />
        </S.Box>
        <S.Box>
          <InputNumber
            label={"hp"}
            placeholder={"HP"}
            name={"hp"}
            data={data}
            invalidated={invalidated}
            setData={setData}
          />
        </S.Box>
        <S.Box>
          <InputNumber
            label={"peso"}
            placeholder={"PESO"}
            suffix={"Kg"}
            name={"weight"}
            data={data}
            invalidated={invalidated}
            setData={setData}
          />
        </S.Box>
        <S.Box>
          <InputNumber
            label={"altura"}
            placeholder={"ALTURA"}
            name={"height"}
            data={data}
            invalidated={invalidated}
            suffix={"Cm"}
            setData={setData}
          />
        </S.Box>
        <TitleTopics label={"tipo"} />
        <DropdownPage
          options={options}
          data={data}
          invalidated={invalidated}
          name={"type1"}
          setData={setData}
        />
        {data.type1 !== "" && data.type1.length > 0 && (
          <DropdownPage
            options={options}
            data={data}
            invalidated={invalidated}
            name={"type2"}
            setData={setData}
          />
        )}
        <TitleTopics label={"habilidades"} />
        <S.Box>
          <InputText
            placeholder={"HABILIDADE 1"}
            name={"abilities1"}
            data={dataAbilities}
            invalidated={invalidated}
            setData={
              setDataAbilities as unknown as React.Dispatch<
                React.SetStateAction<DataUnion>
              >
            }
          />
        </S.Box>
        {numberOfAbilities >= 1 && (
          <S.Box>
            <InputText
              placeholder={"HABILIDADE 2"}
              name={"abilities2"}
              data={dataAbilities}
              invalidated={invalidated}
              setData={
                setDataAbilities as unknown as React.Dispatch<
                  React.SetStateAction<DataUnion>
                >
              }
            />
          </S.Box>
        )}
        {numberOfAbilities >= 2 && (
          <S.Box>
            <InputText
              placeholder={"HABILIDADE 3"}
              name={"abilities3"}
              data={dataAbilities}
              invalidated={invalidated}
              setData={
                setDataAbilities as unknown as React.Dispatch<
                  React.SetStateAction<DataUnion>
                >
              }
            />
          </S.Box>
        )}
        {numberOfAbilities >= 3 && (
          <S.Box>
            <InputText
              placeholder={"HABILIDADE 4"}
              name={"abilities4"}
              data={dataAbilities}
              invalidated={invalidated}
              setData={
                setDataAbilities as unknown as React.Dispatch<
                  React.SetStateAction<DataUnion>
                >
              }
            />
          </S.Box>
        )}
        <S.IconBox>
          {numberOfAbilities > 0 && (
            <S.Icon
              onClick={handleDecrease}
              src="https://cdn-icons-png.flaticon.com/512/2740/2740679.png"
            />
          )}
          {numberOfAbilities < 3 && (
            <S.Icon
              onClick={handleIncrease}
              src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
            />
          )}
        </S.IconBox>
        <TitleTopics label={"estatísticas"} />
        <S.Box>
          <InputNumber
            label={"defesa"}
            placeholder={"00"}
            name={"defense"}
            data={data}
            invalidated={invalidated}
            setData={setData}
            icon={true}
          />
        </S.Box>
        <S.Box>
          <InputNumber
            label={"ataque"}
            placeholder={"00"}
            name={"attack"}
            data={data}
            invalidated={invalidated}
            setData={setData}
            icon={true}
          />
        </S.Box>
        <S.Box>
          <InputNumber
            label={"defesa-especial"}
            placeholder={"00"}
            name={"specialDefense"}
            data={data}
            invalidated={invalidated}
            setData={setData}
            icon={true}
          />
        </S.Box>
        <S.Box>
          <InputNumber
            label={"ataque-especial"}
            placeholder={"00"}
            name={"specialAttack"}
            data={data}
            invalidated={invalidated}
            setData={setData}
            icon={true}
          />
        </S.Box>
        <S.Box>
          <InputNumber
            label={"velocidade"}
            placeholder={"00"}
            name={"speed"}
            data={data}
            invalidated={invalidated}
            setData={setData}
            icon={true}
          />
        </S.Box>
        <S.BoxButton>
          <Button text={"Criar Pokemon"} onClick={newPokemon} />
        </S.BoxButton>
      </S.Form>
    </S.Modal>
  );
}
