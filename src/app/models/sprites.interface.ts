//Datos que contienen la URL de la imagen de cada pokemon
//Se usa '| null' porque puede que la API no contenga algunas imágenes
export interface SpritesInterface {
    front_default: string | null,
    front_shiny: string | null,
    back_default: string | null,
    back_shiny: string | null
}