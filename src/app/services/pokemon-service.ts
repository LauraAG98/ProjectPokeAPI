import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { PokemonInterface } from '../models/pokemonInterface.interface';
import { SpeciesInterface } from '../models/speciesInterface.interface';
import { forkJoin, map, switchMap } from 'rxjs';
import { NamedResourceListInterface } from '../models/namedResourceListInterface.interface';
import { ChainLinkInterface } from '../models/chainLinkInterface.interface';
import { EvolutionChainInterface } from '../models/evolutionChainInterface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //Se inyecta el servicio para realizar peticiones (get)
  constructor(private http: HttpClient) { }

  //Lista que obtiene los primeros 20 pokemones
  getPokemonList() {
    return this.http.get<NamedResourceListInterface>(`${environment.apiUrl}/pokemon/`)
  }

  //Petición que solicita detalles de cada pokemon
  getPokemonDetail(idOrName: string | number) {
    return this.http.get<PokemonInterface>(`${environment.apiUrl}/pokemon/${idOrName}/`)
  }

  //Petición que obtiene la especie de cada pokemon (habitat, color...)
  getPokemonSpecies(idOrName: string | number) {
    return this.http.get<SpeciesInterface>(`${environment.apiUrl}/pokemon-species/${idOrName}/`)
  };

  //Se obtiene la cadena evolutiva de cada pokemon
  getChainEvolution(url: string) {
    return this.http.get<EvolutionChainInterface>(url);
  }

  //Obtiene los nombres de una cadena evolutiva de pokemones
  private getEvolutionNames(chain: ChainLinkInterface): string[] {
    //Arreglo que guarda los nombres  
    const names: string[] = [];

    //Variable que permite recorrer la cadena evolutiva
    let current = chain;

    //Se agrega el primer nombre de la cadena
    names.push(current.species.name);

    //Se ejecuta el ciclo, siempre y cuando existan evoluciones
    while (current.evolves_to.length) {

      //Avanza al siguiente pokemon de la cadena
      current = current.evolves_to[0];

      //Agrega el nombre del pokemon al arreglo
      names.push(current.species.name)
    }

    //Devuelve todos los nombres de la evolución
    return names;
  }

  //Peticiones para obtener información de la lista de pokemones
  listPokemon() {
    return this.getPokemonList().pipe(
      //Trae la especie de cada pokemon de la lista
      switchMap((list: NamedResourceListInterface) => {
        const speciesReqs = list.results.map(pok => this.getPokemonSpecies(pok.name));
        return forkJoin(speciesReqs);
      }),
      //Se duplica por URL de cadena evolutiva
      switchMap((speciesList) => {
        const uniqueChainUrls = Array.from(
          new Set(speciesList.map(s => s.evolution_chain.url))
        );
        const chainReqs = uniqueChainUrls.map(url => this.getChainEvolution(url));
        return forkJoin(chainReqs);
      }),
      //Se trae el detalle y especie de cada evolución
      switchMap((chains) => {
        const req = chains.map(chain => {
          const evolutionNames = this.getEvolutionNames(chain.chain);
          const requests = evolutionNames.map(name =>
            this.getPokemonSpecies(name).pipe(
              switchMap((species) =>
                this.getPokemonDetail(name).pipe(
                  map(detail => ({ evolution: species, detail }))
                )
              )
            )
          );
          return forkJoin(requests).pipe(
            map(chainPokemon => ({ chainPokemon }))
          );
        });
        return forkJoin(req);
      })
    );
  }
}