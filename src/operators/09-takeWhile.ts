import { takeWhile, fromEvent, map } from 'rxjs';



const click$ = fromEvent<MouseEvent>( document, 'click')


click$.pipe(
    map( ({clientX, clientY }) => ({clientX, clientY })),  //  otra forma de DESESTRUCTURACION de un OBJETO
    takeWhile( ({ clientX }) =>  clientX <= 219, true )   // asi sacas el clientX de lo que te llega del MAP
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






