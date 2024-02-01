import { fromEvent, interval, skip, takeUntil } from 'rxjs';

// takeUntil...es hasta que el otro observable se dispara por primera vez (en este caso el click)

const interval$ = interval( 1000 );
const click$ = fromEvent<MouseEvent>( document, 'click').pipe(
    skip(1)  // esto se saltaria el primer click...y solo completaria en el segundo click
)


interval$.pipe(
    takeUntil( click$ )   // asi sacas el clientX de lo que te llega del MAP
).subscribe({
    next: next => console.log('nextttt: ', next),
    complete: () => console.log('complete!')
});







/// SERIA LO MISMO QUE ESTOOO.........................

// click$.pipe(
//     takeWhile( x => {
//         const { clientX } = x;  // DESESTRUCTURACION de un OBJETO
//         return clientX <= 219;  // unque pongas el =, el ultimo valor no lo emite...SOLO lo completa
//     })
// ).subscribe({
//     next: next => console.log('nextttt: ', next),
//     complete: () => console.log('complete!')
// });






