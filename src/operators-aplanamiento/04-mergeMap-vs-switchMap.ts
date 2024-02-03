import { fromEvent, interval, map, mergeAll, mergeMap, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";






const click$ = fromEvent<KeyboardEvent >( document, 'click' );
const interval$ = interval( 1000 );

click$.pipe(
    // mergeMap( () => interval$ ),   // infinitos intervalos, uno por cada click
    switchMap( () => interval$ ),     // solo el ultimo intervalo, del ultimo click
);
