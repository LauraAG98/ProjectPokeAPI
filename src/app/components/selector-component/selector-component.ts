import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { GroupEvolutionInterface } from '../../models/groupEvolutionInterface';

@Component({
  selector: 'app-selector-component',
  imports: [],
  templateUrl: './selector-component.html',
  styleUrl: './selector-component.css',
})
export class SelectorComponent implements OnInit {
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