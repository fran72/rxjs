import { first, fromEvent } from 'rxjs';

// TAKE no solo para la SUBSCRIPCION...sino que TAMBIEN COMPLETA el OBSERVABLE
const click$ = fromEvent<MouseEvent>( document, 'click')


click$.pipe(
    first( x => {
        const { clientX } = x;  // DESESTRUCTURACION de un OBJETO
        return clientX >= 219;  // asi especificas una condicion
    })
).subscribe({
    next: next => console.log('nextttt: ', next),
    complete: () => console.log('complete!')
});






