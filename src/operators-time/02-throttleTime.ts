import { throttleTime, fromEvent, asyncScheduler, pluck, map } from 'rxjs';

// a partir del click...se activa el throttleTime durante esos 1000ms
// durante ese tiempo no deja pasar mas valores
// a partir del segundo coge el siguiente click, y se vuelve a esperar otro segundo
// hace salto de 1seg cada vez que clicas, si ya pasó el 1seg anterior



// ejemplo 1
// const click$ = fromEvent<PointerEvent>(document, 'click')
// .pipe(throttleTime(1000))
// .subscribe(val => {
//     console.log('val X......',  val.clientX);
//     console.log('val Y......',  val.clientY);
// });


// ejemplo 2 ... cuadro de busqueda...escribiendo Coca cola 
// es parecido a debounceTime
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<any>(input, 'keyup');
input$.pipe(
    map( x => x.target.value),  // si paso any a KeyboardEvent.... me dice que value no existe
    throttleTime(1000, asyncScheduler, {
        leading: true,  // el primer resultado tras el primer tecleo  (ej: la c ...de coca cola)
        trailing: true,  // el ultimo resultado tras el ultimo tecleo  (ej: coca cola)
    })
)
.subscribe( console.log )




