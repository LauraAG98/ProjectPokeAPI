import { NamedAPIResourceInterface } from "./namedAPIResouce.interface";

//Estructura que contiene la paginacion del listado de recursos
export interface NamedResourceListInterface {
    count: number ,
    next: string | null,
    previous: string | null,
    results: NamedAPIResourceInterface[]
}