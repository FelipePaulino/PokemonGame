export interface PokemonType {
    speed: number
    defense: number
    hp: number
    attack: number
    specialDefense: number
    specialAttack: number
    name: string
    type2: string
    type1: string
    abilities: abilitiesArray[],   
    height: number,
    id: number,
    sprites: sprites,
    stats: statsArray[],
    types: typesArray[],
    weight: number
}
interface abilitiesArray{
    ability: {
        name: string,
        url: string
    },
}

interface sprites{
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
}

interface statsArray{
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

interface typesArray{
    slot: number,
    type: {
        name: string,
        url: string
    }
}

export interface Data {
    [name: string]: {},
    id: number,
    name: string,
    hp: number,
    weight: number,
    height: number,
    type1: string,
    type2: string,
    abilities: Array<string>,
    defense: number,
    attack: number,
    specialDefense: number,
    specialAttack: number,
    speed: number,
    sprites:{
        front_shiny:string,
    }
    stats:{base_stat:number}
  }
  
  export interface DataAbilities {
    [name: string]: {},
    abilities1: string,
    abilities2: string,
    abilities3: string,
    abilities4: string,
  }
  
  export type DataUnion = Data | DataAbilities;
  