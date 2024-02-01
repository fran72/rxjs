import { from, distinct } from 'rxjs';


// solo se emite si NO ha sido emitido anteriorente
// como el unique de las BBDD
// y n es secuencial...si pones 1,1,2,3,3,4,5,6,1.... elimina el segundo 1...y el ultimo 1 tambien
// si distingue entre types.... 1 y '1' los ve diferentes y  no los elimina 


// ojo EN OBJETOS que tiene en cuenta la posicion
// si pones solo distinct()....2 objetos iguales ( p.ej: {id:2} ) no serian los mismos objetos (por su posicion)



   
// const interval$ = from( [1,2,3,4,4,5,6,1,7] );


// interval$.pipe(
//     distinct() // elimina el segundo 4..y el segundo 1
// ).subscribe({
//     next: next => console.log('nextttt: ', next),
//     complete: () => console.log('complete!')
// });



// tambien con campos de objetos
const interval$ = from( [ {id:1} , {id:2}  , {id:2} , {id:3} , {id:5}] );

interval$.pipe(
    distinct( e => e.id ) // elimina el segundo objeto.
).subscribe({
    next: next => console.log('nextttt: ', next),
    complete: () => console.log('complete!')
});






