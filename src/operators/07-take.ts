import { of, take, tap } from 'rxjs';

// TAKE no solo para la SUBSCRIPCION...sino que TAMBIEN para el OBSERVABLE
const numeros$ = of(1,2,3,4,5).pipe(
    tap( console.log ) // este solo haria 3...por el TAKE de la linea 11
);


numeros$.pipe(
    tap( val => console.log('val......', val)),
    take(3)
).subscribe({
    next: next => console.log('nextttt: ', next),
    complete: () => console.log('complete!')
});








