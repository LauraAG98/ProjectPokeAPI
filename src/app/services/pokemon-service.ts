import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //Se inyecta el servicio para realizar peticiones (get)
  constructor (private httpCliente: HttpClient) {}

  
}
