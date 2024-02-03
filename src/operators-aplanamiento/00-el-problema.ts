import { debounceTime, fromEvent, map, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput , orderList );


// STREAMS
const input$ = fromEvent<KeyboardEvent >( textInput, 'keyup' );


// los operadores de aplanamiento evitan este tipo de codigos confusos
input$.pipe(
    map( (resp ) => {
        const value = resp.target['value'];
        return ajax.getJSON(`https://api.github.com/users/${value}`);
    }),
    debounceTime(500)
).subscribe( resp => 
    resp.pipe(
        tap(x => console.log('se va liando la cosaaaa'))
    )
    .subscribe ( console.log) );













