import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";


// forkJoin ( obs1$, obs2$, obs3$ )


const GITHUB_API_URL = 'https://api.github.com/sers';
const GITHUB_USER = 'fran72';



// forkJoin( { url: GITHUB_API_URL, user: GITHUB_USER } )
forkJoin({ 
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ).pipe(
        catchError( err => of(err.message)),  // asi controlas los errores de forma aislada
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    ),
    
})
.pipe(
    catchError( err => of(err.message)),
)
.subscribe(  console.log  );
