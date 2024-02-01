import { from, distinct, distinctUntilChanged, map, distinctUntilKeyChanged } from 'rxjs';


const interval$ = from( [ {id:1} , {id:2} , {id :2} , {id:3} , {id:5}] );

interval$.pipe(
    distinctUntilChanged() // NO ELIMINA el segundo {id:2}
).subscribe({
    next: next => console.log('nextttt: ', next), // pero aqui te retorna el objeto entero....no solo el ID del MAP
    complete: () => console.log('complete!')
});


interval$.pipe(
    distinctUntilChanged( ( a, b ) => a.id !== b.id ) // ELIMINA el segundo {id:2}
).subscribe({
    next: next => console.log('nextttt: ', next), // pero aqui te retorna el objeto entero....no solo el ID del MAP
    complete: () => console.log('complete!')
});





interval$.pipe(
    distinctUntilKeyChanged( 'id' ) // ELIMINA el segundo {id:2}
).subscribe({
    next: next => console.log('nextt id: ', next), // pero aqui te retorna el objeto entero....no solo el ID del MAP
    complete: () => console.log('complete id!')
});

// si fuese   ....   from( [ {id:1} , {id:2} , {idXXX:2} , {id:3} , {id:5}] );
// distinctUntilKeyChanged( "id" )  .......  no lo eliminaria ......porque.....   id  !=  idXXX
