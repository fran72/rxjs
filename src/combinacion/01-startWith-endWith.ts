import { catchError, endWith, from, fromEvent, interval, map, mergeMap, of, startWith, switchMap, take, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


// startWith te permite meter un ARGUMENTO antes de la primera emision del observable
// ese ARGUMENTO puede ser un VALOR...o otro OBSERVABLE ( en este caso habria que aplanarlo...con mergeMap, mergeAll, etc)


const numeros$ = from([ 1,2,3,4,5]);
// const numeros$ = of( 1,2,3,4,5 );

numeros$.pipe(
    startWith(0),
    endWith(80)
)
.subscribe( console.log )

// salida    0, 1,2,3,4,5, 80