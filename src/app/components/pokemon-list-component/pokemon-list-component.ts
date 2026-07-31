import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { GroupEvolutionInterface } from '../../models/groupEvolutionInterface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list-component',
  imports: [FormsModule],
  templateUrl: './pokemon-list-component.html',
  styleUrl: './pokemon-list-component.css',
})
export class PokemonListComponent {
  //Variable que contiene los pokemones
  pokemonList: GroupEvolutionInterface[] = [];

  //Variables que se modifican segun la selección del usuario
  color: string = '';
  habitat: string = '';

  //Se inyecta el servicio que realiza las peticiones
  constructor(private pokemonSer: PokemonService) { }

  //Método que obtiene la evolución de los personajes
  loadPokemon() {
    console.log('se esta ejecutando');
    this.pokemonSer.listPokemon().subscribe((res) => {
      this.pokemonList = res;
    })
  }

  ngOnInit() {
    this.loadPokemon();
    console.log('se esta ejecutando');
  }

  //Reinicia el selector
  cleanSelector() {
    this.color = '';
    this.habitat = '';
  }

  //Filtra información dependiendo de la opción seleccionada
  getFilter() {
    if (this.color !== '') {
      return this.pokemonList.filter(group => {
        return group.chainPokemons.some(p => p.evolution.color.name === this.color)
      })
    } else if (this.habitat !== '') {
      return this.pokemonList.filter(group => {
        return group.chainPokemons.some(p => p.evolution.habitat?.name === this.habitat)
      })
    } else {
      return this.pokemonList;
    }
  }
}