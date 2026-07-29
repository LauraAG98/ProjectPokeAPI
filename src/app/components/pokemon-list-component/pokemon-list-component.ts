import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { GroupEvolutionInterface } from '../../models/groupEvolutionInterface';

@Component({
  selector: 'app-pokemon-list-component',
  imports: [],
  templateUrl: './pokemon-list-component.html',
  styleUrl: './pokemon-list-component.css',
})
export class PokemonListComponent {
   //Variable que contiene los pokemones
    pokemonList: GroupEvolutionInterface[] = [];
  
    //Se inyecta el servicio que realiza las peticiones
    constructor(private pokemonSer: PokemonService){}
  
    //Método que obtiene la evolución de los personajes
    loadPokemon () {
      this.pokemonSer.listPokemon().subscribe((res)=> {
        this.pokemonList = res;
      })
    }
  
    ngOnInit() {
      this.loadPokemon();
    }
}
