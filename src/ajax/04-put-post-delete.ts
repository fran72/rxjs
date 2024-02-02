import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1'; // con headers, put, get, etc...
// const url = 'https://api.github.com/users?per_page=5';


ajax.post( url, {         // o .put() , .delete(), etc.....
    id: 1,
    name: 'fran',
    },
    { 
    // 'Content-Type': 'application/json',
    'mi-token': 'ABC123',
    },
).subscribe( console.log );



// OTRA FORMA..............
ajax({ 
    url: url,
    method: 'POST',    // o PUT, DELETE, etc.....
    headers: { 
    // 'Content-Type': 'application/json',
    'mi-token': 'ABC123',
    },
    body: { 
        id: 1,
        name: 'fran',
        },
    }).subscribe( console.log );
