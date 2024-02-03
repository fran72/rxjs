import { interval, concat, take, of } from "rxjs";


// concat ( obs1$, obs2$, obs3$ )
// la salida emite los valores del 1 hasta que se completa...y pasa a emitir los del 2, hasta que se completa...etc
// es la funcion concat...no el operador (obsoleto)
// tampoco es concatMap ( no obsoleto )


const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1,2,3,4],
    of(1)
).subscribe( console.log )













