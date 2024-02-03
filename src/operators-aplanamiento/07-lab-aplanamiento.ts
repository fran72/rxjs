import { catchError, fromEvent, interval, map, mergeMap, of, switchMap, take, tap } from "rxjs";
import { ajax } from "rxjs/ajax";



// Helper
const peticionHTTPLogin = ( userPass ) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    map( resp => resp.response['token']),
    catchError( err => of('no-token')) // para hacer if(no-token)....para gestionar el error...el login fue fallido
) ;



const form         = document.createElement('form');
const inputEmail   = document.createElement('input');
const inputPass    = document.createElement('input');
const submitButton = document.createElement('button');



// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitButton.innerHTML = 'Ingresar'

form.append( inputEmail, inputPass, submitButton );

document.querySelector('body').append( form );




const submitForm$ = fromEvent( form, 'submit' )
.pipe(
    tap( ev => ev.preventDefault() ),
    map( ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value,
    })),
    tap( console.log ),
    // mergeMap( (userPass) => peticionHTTPLogin(userPass) )
    mergeMap( peticionHTTPLogin )
);

submitForm$.subscribe( console.log )
