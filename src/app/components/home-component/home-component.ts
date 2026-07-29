import { Component } from '@angular/core';
import { Header } from '../header/header';
import { PokemonListComponent } from '../pokemon-list-component/pokemon-list-component';

@Component({
  selector: 'app-home-component',
  imports: [Header, PokemonListComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
