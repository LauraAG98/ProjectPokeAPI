import { NamedAPIResourceInterface } from "./namedAPIResouce.interface";
import { NameInterface } from "./NameInterface.interface";


//Estructura de datos que clasifica los pokemones por su color
export interface ColorsInterface {
    id: number,
    name: string,
    names: NameInterface[],
    pokemon_species: NamedAPIResourceInterface[]
}