import { range, map, tap, fromEvent, pluck } from 'rxjs';





/////  DEPRECATED
/////  Use map and optional chaining instead :
/////  pluck('foo', 'bar') .....is map(x => x?.foo?.bar)






const obs$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = obs$.pipe(
    map( event => event.code ),
);

const keyupPluck$ = obs$.pipe(
    pluck( 'target', 'baseURI' ), // basicamente pluck te dejaBA acceder a subCampos...como this.target.baseURI
);


keyupCode$.subscribe( val =>  console.log('map......', val));
keyupPluck$.subscribe( val =>  console.log('pluck......', val));



