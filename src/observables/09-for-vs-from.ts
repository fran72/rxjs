import { of, from } from 'rxjs';

// of = toma argumentos y genera una secuencia
// from = array , promise , iterable , observable

const observer = {
    next: (value : any) => console.log('next......', value),
    complete: () => console.log('complete......'),
}

// const source$ = from( [1,2,3,4,5] );
// const sourceOf$ = of( ...[1,2,3,4,5] );
// const sourceFromName$ = from( 'fran' );
// const sourceOfName$ = of( 'fran' );

const sourceUrl$ = from( fetch ( 'https://api.github.com/users/klerith' ));





// sourceUrl$.subscribe( async(resp) => {
//     console.log('resp......', resp); 

//     // algunos campos se pueden acceder directamente
//     console.log('resp.ok......', resp.ok); 
    
//     // el body hay que pasarlo por JSON
//     const data = await resp.json();
//     console.log('json data......', data);
// } );






// POR ULTIMO....compara el FOR y el FROM asiii
// FUNCION GENERADORA...con astertiscoooo........................
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const miIterable = miGenerador();
// for (let id of miIterable) {
//     console.log('id......', id);
// }
from(miIterable).subscribe( observer ); // hace lo mismo que el FOR





