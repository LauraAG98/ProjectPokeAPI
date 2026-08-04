import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { GroupEvolutionInterface } from '../../models/groupEvolutionInterface';
import { FormsModule } from '@angular/forms';
import { DetailPokemonComponent } from '../detail-pokemon-component/detail-pokemon-component';
import { EvolutionAndDetailInterface } from '../../models/evolutionAndDetailInterface.interface';

@Component({
  selector: 'app-pokemon-list-component',
  imports: [FormsModule, DetailPokemonComponent],
  templateUrl: './pokemon-list-component.html',
  styleUrl: './pokemon-list-component.css',
})
export class PokemonListComponent {
  //Variable que contiene los pokemones
  pokemonList: GroupEvolutionInterface[] = [];
  pokemonDetailModal: EvolutionAndDetailInterface | null = null;

  //Variable que define si se muestra o no el modal con los detalles del pokemon elegido
  showModal: boolean = false;

  //Variables que se modifican segun la selección del usuario
  color: string = '';
  habitat: string = '';

  //Se inyecta el servicio que realiza las peticiones
  constructor(private pokemonSer: PokemonService) { }

  //Método que obtiene la evolución de los personajes
  loadPokemon() {
    this.pokemonSer.listPokemon().subscribe((res) => {
      this.pokemonList = res;
    })
  }

  ngOnInit() {
    this.loadPokemon();
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

  //Modal que muestra el detalle del pokemon seleccionado
  detailPokemonModal(pokemon: EvolutionAndDetailInterface) {
    console.log('pokemon seleccionado', pokemon);
    this.pokemonDetailModal = pokemon;
    this.showModal = true;
  }

  //Método que cierra el modal
  closeModal(){
    this.showModal = false;
  }
}