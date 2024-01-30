import { asyncScheduler } from 'rxjs';



// TIPO SET-TIME-OUT.....................................
// const saludar = () => console.log('hola mundo......!');
// const saludar2 = (name: string) => console.log('hola mundo......!', name);

// asyncScheduler.schedule( saludar(), 2000 ); .....si hicieses eso ejecutaria la funcion ahi mismo....da error
// asyncScheduler.schedule( saludar, 2000 );  // asi funciona sin parametros
// asyncScheduler.schedule( saludar2, 2000, 'Fran' ); // asi pasas parametro...solo se puede pasar 1




// TIPO SET-INTER-VAL....................................
const subs = asyncScheduler.schedule( 
    function (this, state) {  // este estado es el 450 de la linea 28
        
        console.log('state......', state);
        
        this.schedule( state + 1 , 1000);  // esta linea le añade el setInterval
    }
    , 2000, 450 ); // esta linea sin la 25....solo haria el setTimeOut

    
// VALE, este no lo veo muy claro  ......   es como que mediante el this, se llama a si mismo...para re-ejecutarse ???
// la firma simplificada:
        // (method) Scheduler.schedule<number>(     ( this, state ) => void   ,    delay  ,    state    ) : Subscription
        //  que viene de                      (this: SchedulerAction<0>, state?: 0)  => void   ,    delay  ,    state    ) : Subscription


// Asi podriamos pararlo todo
// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000);


// o podemos parar todo mediante otro asyncScheduler
asyncScheduler.schedule( () => subs.unsubscribe() , 6000 );



