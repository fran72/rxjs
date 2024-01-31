import { filter, from, fromEvent, map, tap } from 'rxjs';


// FILTER -- parte 2.....................


// interface Personaje { tipo: string, nombre: string }

// const personajes: Personaje[] = [
//     { tipo: 'heroe', nombre: 'batman' },
//     { tipo: 'heroe', nombre: 'robin' },
//     { tipo: 'villano', nombre: 'joker' },
// ];

// const pers$ = from(personajes)
//     .pipe( filter (value => value.tipo == 'heroe'))
//     .subscribe( val =>  console.log('tipo......', val));
    

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( event => event.code ),
    filter( key => key === 'Enter'),
);

keyup$.subscribe( console.log );