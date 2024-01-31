import { range, map, tap } from 'rxjs';


const observer = {
    next: (value : any) => console.log('next......', value),
    complete: () => console.log('complete......'),
}

const obs$ = range(1,5).pipe(
    map(x => x * 10 ),
    tap((x) => console.log('hola......',x))
);

obs$.subscribe( observer );




//.......................OJO...esto no funcionaria !!!!!!!!!!!!!!!!!

// const obs$ = range(1,5);

// obs$.pipe(
//     map(x => x * 10 ),
//     tap((x) => console.log('hola......',x))
// );

// obs$.subscribe ( observer );


// ..............................ESTO SIIII !!!!!!!!!!!!!!!!!
// const obs$ = range(1,5);

// const h = obs$.pipe(
//     map(x => x * 10 ),
//     tap((x) => console.log('hola......',x))
// );

// h.subscribe ( observer );