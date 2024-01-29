import { Observable } from "rxjs";


const obs$ = new Observable<string>( subs => {
    
    subs.next('sh');
    subs.next('sfffdd');
    
    // const a = undefined;
    // a.name = 'fran';
    
    subs.complete();
    
    subs.next('post'); // no se emite...ya hizo complete
    
});




obs$.subscribe({
    next: next => console.log('valueeee: ', next),
    error: error => console.log('errorrrr: ', error),
    complete: () => console.log('completeeeee')
});
