import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1'; // con headers, put, get, etc...
// const url = 'https://api.github.com/users?per_page=5';

const obs$ = ajax.getJSON( url , {  // pasamos los headers
    'Content-Type': 'application/json',
    'mi-token': 'ABC123',
});

obs$.subscribe( console.log );

