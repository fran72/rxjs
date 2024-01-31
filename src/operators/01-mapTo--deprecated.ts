import { map, fromEvent, mapTo } from 'rxjs';




/////  DEPRECATED
/////  Use map instead:     map(() => value) 




const obs$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = obs$.pipe(
    map( event => event.code ),
);

const keyupPluck$ = obs$.pipe(
    mapTo( 'target' ), // basicamente pluck te dejaBA acceder a subCampos...como this.target.baseURI
);


keyupCode$.subscribe( val =>  console.log('map......', val));
keyupPluck$.subscribe( val =>  console.log('mapTo......', val));



