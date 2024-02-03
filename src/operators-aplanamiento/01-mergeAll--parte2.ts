import { Observable, debounceTime, fromEvent, map, mergeAll, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUsersResponse } from "../interfaces/github-users.interface";
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


// los operadores de aplanamiento evitan este tipo de codigos confusos
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, Observable<GithubUser[]>>( (resp ) => {
        const value = resp.target['value'];
        return ajax.getJSON(`https://api.github.com/users?q=${value}`);
    }),
    mergeAll<Observable<GithubUser[]>>(),
).subscribe( res => mostrarUsuarios(res) );

