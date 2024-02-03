import { debounceTime, fromEvent, map, mergeAll, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput , orderList );


// STREAMS
const input$ = fromEvent<KeyboardEvent >( textInput, 'keyup' );


// los operadores de aplanamiento evitan este tipo de codigos confusos
input$.pipe(
    debounceTime(500),
    map( (resp ) => {
        const value = resp.target['value'];
        return ajax.getJSON(`https://api.github.com/users?q=${value}`);
    }),
    mergeAll(),  // con mergeAll te evitas el doble subscribe (1o el keyEvent...2o el ajaxGet)...los aplana
).subscribe( console.log);
// .subscribe( resp => 
//     resp.pipe(
//         tap(x => console.log('se va liando la cosaaaa'))
//     )
//     .subscribe ( console.log) );












