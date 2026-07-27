import { EvolutionDetailInterface } from "./evolutionDetailInterface";
import { NamedAPIResourceInterface } from "./namedAPIResouce.interface";

//Estructura de la cadena evolutiva de un pokemon 
export interface ChainLinkInterface {
    is_baby: boolean,
    species: NamedAPIResourceInterface,
    evolution_details: EvolutionDetailInterface[],
    evolves_to: ChainLinkInterface[] 
}