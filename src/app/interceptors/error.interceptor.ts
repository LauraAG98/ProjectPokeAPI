import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { ErrorService } from "../services/error-service";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    //Se inyecta el servicio
    const errorService = inject(ErrorService);

    //Se envía la petición y atrapa el error si llega a ocurrir 
    return next(req).pipe(
        catchError((error) => {

            //Se guarda un mensaje de error para el usuario 
            errorService.setError(`Ocurrió un error al obtener los datos`);

            //Muestra el error espeifíco en la consola
            console.log('Error: ', error.status, error.message);

            //Se envía el mensaje de error al componente que lo requiera
            return throwError(() => error);
        })
    )
}