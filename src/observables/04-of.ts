import { of } from 'rxjs';

const obs$ = of<any>(1,2,3,4,5,6);
// const obs$ = of( [1,2], {a: 3, b: 4}, function(){}, true, Promise.resolve(true), 6);

obs$.subscribe({
    next: next => console.log('nextttt: ', next),
    error: error => console.log('errorrrr: ', error),
    complete: () => console.log('complete!')
});
