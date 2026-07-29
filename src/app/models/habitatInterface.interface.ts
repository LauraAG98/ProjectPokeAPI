import { NamedAPIResourceInterface } from "./namedAPIResouce.interface";
import { NameInterface } from "./nameInterface.interface";

//Estructura que contiene información sobre el habitat de cada pokemon
export interface HabitatInterface {
    id: number,
    name: string,
    names: NameInterface[],
    pokemon_species: NamedAPIResourceInterface []
}