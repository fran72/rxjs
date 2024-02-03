import { fromEvent, map, combineLatest } from "rxjs";


// emite los resultados finales ... COMO UN ARRAY
// solo cuando todos estan complete's


// obs1$                 1            2    3    |complete
// obs2$                     a         b      c    d      |complete
// obs3$                        x   y   z         |complete
                                                                     
// SALIDA...                                               [ 3, d, z]   |complete







const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '*********';
input2.type = 'password';


document.querySelector('body').append( input1, input2 );


// Helper
const getInputStream = ( elem: HTMLElement ) => 
    fromEvent<KeyboardEvent>(elem, 'keyup')
    .pipe(
        map( x => x.target['value'] )
    );

combineLatest(
    getInputStream( input1 ),
    getInputStream( input2 ),
).subscribe( console.log );










