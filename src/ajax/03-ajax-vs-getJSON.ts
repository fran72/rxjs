import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1'; // con headers, put, get, etc...
// const url = 'https://api.github.com/users?per_page=5';




const manejaError = (err: AjaxError) => {
    console.log( err );
    return of({
        ok: false,
        usuarios: []
    });  // catchError debe retornar un ERROR o un nuevo OBSERVABLE para pasar al SUBSCRIBE ...aqui le envio OF 
}


// const obs$ = ajax.getJSON( url ).pipe(  catchError( manejaError )  );   // trae data, headers etc
// const obs2$ = ajax( url ).pipe(  catchError( manejaError )  );          // trae, ademas, mas cosas...como request, response, etc



const obs$ = ajax.getJSON( url );

obs$.pipe(
    catchError( manejaError ) // al poner aqui el catchError, si da error generará un nuevo observer...y pasará por el NEXT del subscribe, y no por su ERROR
).subscribe({
    next: next => console.log('nextttt: ', next),
    error: error => console.log('errorrrr: ', error),
    complete: () => console.log('complete!')
});




