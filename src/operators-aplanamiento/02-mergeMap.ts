import { fromEvent, interval, mergeMap, takeUntil } from "rxjs";


// mergeMap...ejemplo:      obs$.mergeMap( (val) => interval(1000) )

// cada emision del obs$, genera un nuevo interval(1000)...y cada interval emite un valor (cada 1seg)


// obs$                 1               2                           3    |complete
//                      |               |                           |
// interval-1           1...(1seg)...2...(1seg)...3...(1seg)...4         |complete
//                                      |                           |
// interval-2                           A...(1seg)...B...(1seg)...C...(1seg)...D   |complete
//                                                                  |
// interval-3                                                       R...(1seg)...T...(1seg)...Y     |complete

// SALIDA...            1            2  A         3  B         4  C R          D T            Y     |complete    ...Y AL COMPLETAR PPAL Y DERIVADOS, SE COMPLETA LA SALIDA







// EJEMPLO CLARISIMO
//...sale en el capitulo siguiente ( '80. Mas ejemplos con mergeMap' )
    // input$.pipe(
    //     debounceTime(500),
    //     mergeMap( (resp: any) => ajax.getJSON(`https://api.github.com/users?q=${resp.target['value']}`) ),
    // ).subscribe( (res: any) => mostrarUsuarios(res) );

// .................SERIA EL EQUIVALENTE A....................................
    // input$.pipe(
    //     debounceTime(500),
    //     map( (resp: any) => ajax.getJSON(`https://api.github.com/users?q=${resp.target['value']}`) ),
    //     mergeAll(),
    // ).subscribe( (res: any) => mostrarUsuarios(res) );






    
    
    


// EJEMPLO NO MUY CLARO......porque el of() dispara las 4 letras casi juntas...y la salida es confusa....
// const letras$ = of('a', 'b' ,'c' ,'d');

// letras$.pipe(
//     mergeMap( letra => interval(1500).pipe(
//         map(i => letra + i),
//         take(3)
//     ) ),
// )
// .subscribe({
//     next: next => console.log('nextttt: ', next),
//     complete: () => console.log('complete!')
// });




// RESUMIENDO.......SIMPLE
// mousedown$.pipe(
//     mergeMap( () => interval$)  // por cada emision del mouse, disparo un interval   ...acceder al res de mouseDown es OPCIONAL
// )
// .subscribe( console.log );




// OTRO EJEMPLO....MAS CLARO

const mousedown$  = fromEvent(document, 'mousedown');
const mouseup$    = fromEvent(document, 'mouseup');
const interval$   = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
)
.subscribe({
    next: next => console.log('nextttt: ', next),
    error: error => console.log('errorrrr: ', error),
    complete: () => console.log('complete!')
});







