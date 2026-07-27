import { ChainLinkInterface } from "./chainLinkInterface.interface";
import { NamedAPIResourceInterface } from "./namedAPIResouce.interface";

//Estructura que contiene la evolución de un pokémon
export interface EvolutionChainInterface {
    id: number,
    baby_trigger_item: NamedAPIResourceInterface,
    chain: ChainLinkInterface
}