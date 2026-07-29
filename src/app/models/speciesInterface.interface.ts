import { NamedAPIResourceInterface } from "./namedAPIResouce.interface";

//Estructura que guarda información de los pokemones
export interface SpeciesInterface {
    id: number,
    name: string, 
    habitat: NamedAPIResourceInterface,
    color: NamedAPIResourceInterface,
    evolution_chain: NamedAPIResourceInterface
}