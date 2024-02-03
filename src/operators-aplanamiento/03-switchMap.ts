import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


// swichMap es como mergeMap pero so se queda suscrito al ultimo observable...el anterior, lo completa

// cada emision del obs$, genera un nuevo interval(1000)...y cada interval emite un valor (cada 1seg)

// ademas CANCELA la PETICION ANTERIOR...en el NETWORK

// obs$                 1               2                           3    |complete
//                      |               |                           |
// interval-1           1...(1seg)...2..|complete                   |
//                                      |                           |
// interval-2                           A...(1seg)...B...(1seg)...C.|complete
//                                                                  |
// interval-3                                                       R...(1seg)...T...(1seg)...Y     |complete
//                                                                  |            |            |
// SALIDA...            1            2  A            B            C R            T            Y     |complete    ...Y AL COMPLETAR PPAL Y DERIVADOS, SE COMPLETA LA SALIDA


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput , orderList );




const input$ = fromEvent<KeyboardEvent >( textInput, 'keyup' );

input$.pipe(
    debounceTime(500),
    mergeMap( (resp: any) => ajax.getJSON(`https://api.github.com/users?q=${resp.target['value']}`) ),
);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map( x => x.target['value']),
    tap( value => console.log('value......', value) ),
    switchMap(texto => ajax.getJSON(url + texto) ),
)
.subscribe( console.log );