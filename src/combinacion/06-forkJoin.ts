import { fromEvent, map, combineLatest, interval, of, take, delay, forkJoin } from "rxjs";


// forkJoin ( obs1$, obs2$, obs3$ )
// si 1 y 2 ya han emitido al menos 1 valor cada uno...
// cuando uno emite, la salida emite la combinacion de sus espectivos ultimos valores
// solo se dispara el complete, cuando se completan los 2
// si solo se completa 1...su ultimo valor sigue combinandose con los nuevos del 2...hasta que 2 se completa

// obs1$                 1            2                           3    |complete
// obs2$                     a               b      c    d                e     f    g      |complete
// obs3$                     a               b      c    d                e     f    g      |complete
                                                                     
// SALIDA...                 1a       2a     2b    2c    2d       3d      3e    3f   3g     |complete

// IMPORTANTE.....forkJoin siempre te aplana los observables...no necesitas mergeAll ni nada asi


const numeros$  = of(1,2,3,4);
const interval$ = interval(1000).pipe( take(3) );
const letras$   = of('a','b','c').pipe( delay(3500) );

// forkJoin( [ numeros$, interval$, letras$ ] )
// .subscribe( res => {
//     console.log('numeros......', res[0]);
//     console.log('interval......', res[1]);
//     console.log('letras......', res[2]);
// } );



forkJoin( { numeros$, interval$, letras$ } )
.subscribe( res => {
    console.log('numeros......', res.numeros$);
    console.log('interval......', res.interval$);
    console.log('letras......', res.letras$);
} );

// forkJoin( { num: numeros$, int: interval$, let:letras$ } )
// .subscribe( res => {
//     console.log('numeros......' , res.num);
//     console.log('interval......', res.int);
//     console.log('letras......'  , res.let);
// } );

