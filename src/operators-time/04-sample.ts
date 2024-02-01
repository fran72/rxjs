import { fromEvent, interval, sample } from 'rxjs';

// el ejemplo seria:  interval$.pipe( sample( click$ ) )
// entonces, cada vez que haces click se emite el ultimo valor emitido por el interval
// si interval no emite mas y click se repite, no se vuelve a emitir el mismo ultimo valor de interval
// cuando se completa el interval, se fini


const interval$ = interval(500);
const click$    = fromEvent<MouseEvent>(document, 'click');



interval$.pipe(
    sample(click$),
)
.subscribe( console.log );





