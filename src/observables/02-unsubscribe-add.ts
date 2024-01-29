import { Observable, Observer } from "rxjs";

const observer: Observer<number> = {
    next: next => console.log('nextttt: ', next),
    error: error => console.log('errorrrr: ', error),
    complete: () => console.log('ccccccc: ')
};

const intervalo$: Observable<number> = new Observable( subscriber => {
    let count = 0;
    
    const interval = setInterval( () => {
        count++;
        subscriber.next(count);
        if (count === 6) subscriber.complete();
    }, 1000);
    
    return () => {
        clearInterval(interval);
        console.log('clearingggg......');
    }
    
});

const sub = intervalo$.subscribe( observer );

const sub1 = intervalo$.subscribe( );
const sub2 = intervalo$.subscribe( );
const sub3 = intervalo$.subscribe( );

// opcional añadirlos en 1 solo...
  sub1.add(sub2);
  sub1.add(sub3);

setTimeout( () => {
    sub1.unsubscribe();
    // sub2.unsubscribe();
    // sub3.unsubscribe();
    
    console.log('eliminado......');
}, 3000);





// const sub2 = intervalo$.subscribe( {
//     next: next => console.log('next-2: ', next),
//     error: error => console.log('error-2: ', error),
//     complete: () => console.log('complete 2......')
// } );

// const sub3 = intervalo$.subscribe( {
//     next: next => console.log('next-3: ', next),
//     error: error => console.log('error-3: ', error),
//     complete: () => {
//         console.log('complete 3......');
//         sub3.unsubscribe();
//     }
// } );

// setTimeout( () => {
//     sub2.unsubscribe();
// }, 3000);