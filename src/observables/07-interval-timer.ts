import { interval, timer } from 'rxjs';


const interval$ = interval( 1000 );   // como  setInterval()
const timer$    = timer( 3000 );      // como  setTimeOut()
const timerWithDelay$    = timer( 2000, 3000 );      // desde el seg 2, repite cada 3 segs


// util para hacer CRON...push notifications
const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);
const timerEn5$    = timer( hoyEn5 );

// interval
// console.log('inicio......');
// interval$.subscribe( {
//     next: next => console.log('next interval: ', next),
//     complete: () => console.log('complete interval!')
// } );
// console.log('fin......');




// timer

timerEn5$.subscribe( {
    next: next => console.log('next timer: ', next),
    complete: () => console.log('complete timer!')
} ); 

// timer$.subscribe( {
//     next: next => console.log('next timer: ', next),
//     complete: () => console.log('complete timer!')
// } ); 

// timerWithDelay$.subscribe( {
//     next: next => console.log('next timer: ', next),
//     complete: () => console.log('complete timer!')
// } ); 
