import { sampleTime, fromEvent, asyncScheduler, pluck, map } from 'rxjs';

// sampleTime cada X tiempo emite el valor del ultimo click
// si pones 1000ms...y vas clicando...cada 1seg va a sacar el ultimo click
// si en un periodo de 1seg a otro seg no clicas, no emite nada

// cada segundo saca lo ultimo recibido...si existe




const click$ = fromEvent<MouseEvent>(document, 'click')
.pipe(
    sampleTime(1000),
    map(({ x, y }) => ({ x,y })),  // ojo si este lo pongo antes de sampleTime, consume mas memoria (se dispararia por cada click)
    )
.subscribe( console.log );





