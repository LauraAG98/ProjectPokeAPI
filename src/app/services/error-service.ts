import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  //Guarda mensaje de error, inicialmente esta vacío
  errorMessage = signal<string>('');
  
  //Cambia el mensaje de error que se mostrará al usuario
  setError(message: string) {
    this.errorMessage.set(message);
  }
 
  //Limpio el mensaje de error
  clearError() {
    this.errorMessage.set('')
  }
}
