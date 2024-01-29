import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
    next: next => console.log('nextttt: ', next),
    error: error => console.log('errorrrr: ', error),
    complete: () => console.log('complete!')
};

const intervalo$ = new Observable<number>( subscriber => {
    let count = 0;
    
    const interval = setInterval( () => {
        var date = new Date(Date.now()).getTime();
        subscriber.next( date );
    }, 1000);
    
    return () => {
        clearInterval(interval);
    }
    
});


const subject$ = new Subject();
const mainSubscrition = intervalo$.subscribe( subject$ );

const sub1 = subject$.subscribe( next => console.log('1......', next ) );
const sub2 = subject$.subscribe( next => console.log('2......', next ) );

setInterval( () => {
    subject$.next(10);
    // subject$.subscribe( next => console.log('next subject :' , next ) );  ...INFINITE SUBSCRIPTIONS !!
    subject$.complete();
    
    mainSubscrition.unsubscribe(); // y asi ya lanzamos tambien el clearInterval
}, 5000);

