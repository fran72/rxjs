import { debounceTime, fromEvent } from 'rxjs';

// ES COMO UN RETARDO EN LA EMISION DEL DATO
// debounceTime(1000)...hace que se emitan valores ....despues de 1 segundo... DESDE EL PRIMER CLICK
// y si clicas a los 400ms y a los 800ms...al llegar a 1000, se emite solo el de los 800ms

// grafico si disparas 5 veces....de A a E
//  0seg                1 seg                       2seg                       3seg
//   A               B              C          D                 E                         // emitidos
//   A                    B                           D                         E          // recibidos

// en este caso significa que desde que clico la primera vez, se activa el segundo
// ...y al pasar ese segundo coge el ultimo click



const click$ = fromEvent<PointerEvent>(document, 'click')
.pipe(debounceTime(1000))
.subscribe(val => {
    console.log('val X......',  val.clientX);
    console.log('val Y......',  val.clientY);
});


// NOTA....se usa mucho para los INPUTs
// ....si escribes HOLA...no lanza https por cada letra...solo al 1s de que paras de escribir

// NOTA 2....si escribes COKE....borras E....y escribes E......lanzarias 2 veces el http de 'COKE'
// si al debounceTime le concatenas un distinctUntilChange...al pasar el 1s solo vuelve a hacer http si es distinto de 'COKE'
