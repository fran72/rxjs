import { fromEvent, tap } from 'rxjs';


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    tap( console.log ), 
);

keyup$.subscribe( console.log );




//  SE USA MUCHO PARA DEPURAR..............................
// puedes usarlo aislando ... Next o Error o Complete
// ....o varios... next + err....next + complete...
// ...o todos... next + err + complete

const keyupSubs$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    tap({
        next: next => console.log('nextttt 2: ', next),
        complete: () => console.log('complete 2!')
    }), 
)
.subscribe( x =>  console.log('x......', x) );

