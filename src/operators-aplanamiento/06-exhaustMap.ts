import { fromEvent, interval, switchMap, take } from "rxjs";
import { ajax } from "rxjs/ajax";


// exhaustMap...ignora los nuevos observables...hasta que el que esta activo se completa
// en ese momento vuelve a admitir nuevas suscripciones


// obs$                 1               2                           3    |complete
//                      |                                           |
// interval-1           1.........2..........3....|complete         |
//                                                                  |
// interval-2    este lo ignora........porque el 1 sigue emitiendo, cuando se dispara el 2   
//                                                                  |                   
// interval-3                                                       R.......T.......Y  
//                                                                            
// SALIDA...            1         2          3                      R       T       Y 





const click$ = fromEvent<KeyboardEvent >( document, 'click' );
const interval$ = interval( 1000 ).pipe( take(3) );

click$.pipe(
    switchMap( () => interval$ ),
).subscribe( console.log )
