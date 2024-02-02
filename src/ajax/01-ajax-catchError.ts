import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';


const url = 'https://api.github.com/users?per_page=5';


// without AJAX....................
// const manejaErrores = ( response: Response ) => {
//     if( !response.ok ) {
//         throw new Error( response.statusText );
//     }
//     return response;
// }


const atrapaError = (err: AjaxError) => {
    console.log( err );
    return of([]);  // catchError debe retornar un ERROR o un nuevo OBSERVABLE para pasar al SUBSCRIBE ...aqui le envio OF 
}

const fetchPromise = fetch(url);


// una VENTAJA de AJAX es poder cancelar la peticion, si hay una nueva peticion
ajax( url ).pipe(
    map( resp => resp.response ),
    catchError( atrapaError )
)
.subscribe( console.log );



// Without AJAX................
// fetchPromise
// .then( manejaErrores )
// .then(val => val.json())  // al pasarlo por json() devuelve otra promesa
// .then(resp => console.log('resp....', resp))
// .catch(err => console.log('err....', err)); // OJO...si los then reciben algo (aunque sea un error) el catch no llega a dispararse


