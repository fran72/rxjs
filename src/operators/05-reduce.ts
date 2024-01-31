import { interval, take, reduce, tap } from 'rxjs';



// REDUCE...accumulado + currentValue...inicio en 0....solo emite cuando COMPLETE
// reduce( (acc, curr ) => acc + curr, 0 );


const numbers = [1,2,3,4,5];


const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer, 0 );

console.log('total......', total);


interval(1000)
.pipe(
    take(3),  // el take hace el COMPLETE despues de ese numero de veces
    tap(console.log ),
    reduce( totalReducer, 5 ) // da 8...porque el take hace 0,1,2...y eso el reduce se lo suma al 5
)
.subscribe({
    next: next => console.log('nextttt: ', next),
    complete: () => console.log('complete!')
});