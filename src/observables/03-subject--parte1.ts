import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
    next: next => console.log('nextttt: ', next),
    error: error => console.log('errorrrr: ', error),
    complete: () => console.log('complete!')
};

const intervalo$ = new Observable<number>( subscriber => {
    let count = 0;
    
    const interval = setInterval( () => {
        
        // subscriber.next( Math.random() );
        var date = new Date(Date.now()).getTime(); // some mock date
        subscriber.next( date );
        
    }, 5000);
    
    return () => {
        clearInterval(interval);
    }
    
});

// problema a solucionar por el SUBJECT
// const sub1 = intervalo$.subscribe( next => console.log('1......', next) );
// const sub2 = intervalo$.subscribe( next => console.log('2......', next) );
// asi...cada sub recibe un RANDOM diferente


// se resuelve subscribiendote a SUBJECT...en vez de al INTERVALO
const subject$ = new Subject();
intervalo$.subscribe( subject$ );
// asi sub1 y sub2 ....reciben el mismo valor
const sub1 = subject$.subscribe( next => console.log('1......', next) );
const sub2 = subject$.subscribe( next => console.log('2......', next) );

// EXPLICACION
// la linea 35 re-lanza el intervalo de la linea 9 (1 sola vez)...y 'fija' su valor
// y las lineas 37 y 38...lllaman al SUBJECT (con su valor 'fijo')
//....si 37 y 38 llamasen a INTERVALO lo re-llamarian 2 VECES...y recibirian 2 VALORES...sincronamente

