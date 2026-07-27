import { AbilitiesInterface } from "./abilitiesInterface.interface";
import { SpritesInterface } from "./sprites.interface";

//Interface que contiene información específica de un pokemon
export interface PokemonInterface {
    id: number,
    name: string,
    height: number,
    weight: number,
    abilities: AbilitiesInterface[],
    sprites: SpritesInterface
}