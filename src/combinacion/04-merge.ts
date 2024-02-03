import { interval, concat, take, of, fromEvent, map, merge } from "rxjs";


// merge ( obs1$, obs2$ )
// la salida emite los valores del 1 y 2...combinados
// solo se dispara el complete, cuando se completan los 2


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyup$.pipe(map(x => x.type)),
    click$.pipe(map(x => x.type)),
).subscribe( console.log )













