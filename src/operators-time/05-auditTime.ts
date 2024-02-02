import { fromEvent, auditTime, map, tap } from 'rxjs';

// auditTime...cuando clicas empieza a contar el tiempo (2000ms)
// cuando acaba el tiempo, se emite el ultimo valor




const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap( val =>console.log('val......', val.x) ),
    auditTime( 2000 ),
    map( ({x}) => x)
)
.subscribe( console.log );





