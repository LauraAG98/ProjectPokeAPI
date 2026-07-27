//Estructura de datos que contiene los detalles para que un pokemon evolucione
export interface EvolutionDetailInterface {
    min_level: number,
    is_default: boolean,
    min_steps: number,
    min_damage_taken: number
}