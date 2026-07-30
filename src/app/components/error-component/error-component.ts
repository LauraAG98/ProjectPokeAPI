import { Component } from '@angular/core';
import { ErrorService } from '../../services/error-service';

@Component({
  selector: 'app-error-component',
  imports: [],
  templateUrl: './error-component.html',
  styleUrl: './error-component.css',
})
export class ErrorComponent {

  //Se inyecta el servicio que genera el error
  constructor (public error: ErrorService) {}

}
