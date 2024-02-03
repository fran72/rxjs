import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput , orderList );


// HELPERS
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    console.log(usuarios);
    
    orderList.innerHTML = '';
    
    for ( let usuario of usuarios ) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        
        img.src = usuario.avatar_url;
        
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'ver pagina';
        anchor.target = '_blank';
        
        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );
        
        orderList.append( li );
        
    }
    
}



// STREAMS
const input$ = fromEvent<KeyboardEvent >( textInput, 'keyup' );


/// MergeMap super bien explicado
// input$.pipe(
//     debounceTime(500),
//     mergeMap( (resp: any) => ajax.getJSON(`https://api.github.com/users?q=${resp.target['value']}`) ),
// ).subscribe( (res: any) => mostrarUsuarios(res) );


// seria el equivalente a:
// input$.pipe(
//     debounceTime(500),
//     map( (resp: any) => ajax.getJSON(`https://api.github.com/users?q=${resp.target['value']}`) ),
//     mergeAll(),
// ).subscribe( (res: any) => mostrarUsuarios(res) );



input$.pipe(
    debounceTime(500),
    mergeMap( (resp: any) => ajax.getJSON(`https://api.github.com/users?q=${resp.target['value']}`) ),
);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map( x => x.target['value']),
    tap( value => console.log('value......', value) ),
    mergeMap(texto => ajax.getJSON(url + texto) ),
)
.subscribe( console.log );

    
    
    
    