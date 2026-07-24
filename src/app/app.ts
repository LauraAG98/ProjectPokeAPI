import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorComponent } from './components/selector-component/selector-component';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SelectorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectPokeAPI');
}
