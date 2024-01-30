import { fromEvent } from 'rxjs';



const src2$ = fromEvent<MouseEvent>( document, 'click');
const src3$ = fromEvent<MouseEvent>( document, 'mouseup');


src2$.subscribe({
    next: ({ x , y }) => console.log('nextttt2: ', x , y),
    error: error => console.log('errorrrr2: ', error),
    complete: () => console.log('complete2!')
});
src3$.subscribe({
    next: (next) => console.log('nextttt3: ', next),
    error: error => console.log('errorrrr3: ', error),
    complete: () => console.log('complete3!')
});
