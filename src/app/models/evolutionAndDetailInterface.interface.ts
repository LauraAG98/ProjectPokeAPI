import { PokemonInterface } from "./pokemonInterface.interface";
import { SpeciesInterface } from "./speciesInterface.interface";

//Contiene evolución y detalles de un Pokemon
export interface EvolutionAndDetailInterface {
    evolution: SpeciesInterface,
    detail: PokemonInterface
}