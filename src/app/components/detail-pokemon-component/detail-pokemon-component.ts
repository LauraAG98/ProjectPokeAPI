import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EvolutionAndDetailInterface } from '../../models/evolutionAndDetailInterface.interface';

@Component({
  selector: 'app-detail-pokemon-component',
  imports: [],
  templateUrl: './detail-pokemon-component.html',
  styleUrl: './detail-pokemon-component.css',
})
export class DetailPokemonComponent {
  //Decorador que emite un evento al componente padre (cerrar el modal).
  @Output() closeModalEvent = new EventEmitter<void>();

  //Método que emite el evento para cerrar el modal
  closeModal() {
    this.closeModalEvent.emit();
  }

  //Variable que contiene la información del pokemon seleccionado
  @Input() pokemonModal: EvolutionAndDetailInterface | null = null;
}
