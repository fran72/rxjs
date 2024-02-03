import { fromEvent, interval, switchMap, take } from "rxjs";
import { ajax } from "rxjs/ajax";


// concatMap...pone en COLA los observables...cuando uno se completa empieza a emitir el siguiente
// ejecuta las subscripciones de manera SECUENCIAL (por lo demas es parecido al switchMap)


// obs$                 1               2                           3    |complete
//                      |               |                           |
// interval-1           1.........2..........3....|complete         |
//                                                 |                |
// interval-2                                      A...........B.............C.|complete
//                                                                              |
// interval-3                                                                   R.......T.......Y     |complete
//                                                                            
// SALIDA...            1         2          3     A           B             C  R       T       Y     |complete    ...Y AL COMPLETAR PPAL Y DERIVADOS, SE COMPLETA LA SALIDA





const click$ = fromEvent<KeyboardEvent >( document, 'click' );
const interval$ = interval( 1000 ).pipe( take(3) );

click$.pipe(
    switchMap( () => interval$ ),
).subscribe( console.log )

// en este ejemplo, si clicas 3 veces muy rapido, la salida seria : 012 012 012