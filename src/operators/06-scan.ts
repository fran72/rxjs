import { from, map, reduce, scan } from 'rxjs';

// scan es lo mismo que reduce...pero va emitiendo los valores (no se espera al COMPLETE)
// de hecho el COMPLETE no hace nada, porque ya se ha emitido el ultimo valor
// podria ser la BASE del patron REDUX



const numeros = [1,2,3,4,5];

const totalAcumulador = ( acc , val ) =>  acc + val;



from(numeros).pipe(
    reduce( totalAcumulador, 0 )
).subscribe( console.log );

from(numeros).pipe(
    scan( totalAcumulador, 0 )
).subscribe( console.log );


// REDUX
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'fran', autenticado: false, token: null },
    { id: 'fran', autenticado: true, token: 'ABC' },
    { id: 'fran', autenticado: true, token: 'ABC123' },
]

const state$ = from( user ).pipe(
    scan<Usuario>( ( acc, curr ) => { 
        return { ...acc, ...curr , edad: 33 } // DO DOES...asi el primero no tiene edad
    } )
);

const id$ = state$.pipe(
    map( state => state )
);

id$.subscribe( console.log );