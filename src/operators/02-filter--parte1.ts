import { range, filter, of, from } from 'rxjs';

const obs$ = range( 1, 10);

const obsfiltered$ = obs$.pipe(
    filter( value => value > 5 )
);


obs$.subscribe( val =>  console.log('normal......', val));
obsfiltered$.subscribe( val =>  console.log('with filter......', val));


        ////// IMPORTANTE........ te deja usar index tambien
        ////   filter( ( value, i ) => {
        //////     console.log( 'index....', i );
        //////     return value > 5;
        ////// })




// aplicado a objetos.....................
interface Personaje {
    tipo: string,
    nombre: string
}
const personajes: Personaje[] = [
    { tipo: 'heroe', nombre: 'batman' },
    { tipo: 'heroe', nombre: 'robin' },
    { tipo: 'villano', nombre: 'joker' },
];

const pers$ = from(personajes).pipe( filter (value => value.tipo == 'heroe'));
// const pers$ = of(...personajes).pipe( filter (value => value.tipo == 'heroe'));
pers$.subscribe( val =>  console.log('tipo......', val));