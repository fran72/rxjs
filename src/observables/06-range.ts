import { asyncScheduler, of, range } from 'rxjs';



const src2$ = range( 5, 10 );  // valor inicial, num de items
// const src2$ = range( 5, 10, asyncScheduler );  // asi lo haces ASYNCRONO


src2$.subscribe({
    next: next => console.log('nextttt2: ', next),
    error: error => console.log('errorrrr2: ', error),
    complete: () => console.log('complete2!')
});
