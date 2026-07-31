import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { GroupEvolutionInterface } from '../models/groupEvolutionInterface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //Se inyecta el servicio para realizar peticiones (get)
  constructor(private http: HttpClient) { }

  //Peticiones para obtener información de la lista de pokemones
  listPokemon() {
  return this.http.get<GroupEvolutionInterface[]>(`${environment.apiUrl}/pokemon`);
}
}