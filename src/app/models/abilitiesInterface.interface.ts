import { NamedAPIResourceInterface } from "./namedAPIResouce.interface";

//Interface que contiene estructura de las habilidades 
export interface AbilitiesInterface {
    is_hidden: boolean,
    slot: number,
    ability: NamedAPIResourceInterface
}