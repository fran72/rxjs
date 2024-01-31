import { fromEvent, map, tap } from 'rxjs';

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere congue enim, in facilisis nisi ornare sit amet. Vestibulum id magna non neque mollis mollis. Ut ac dignissim diam. Donec auctor laoreet tristique. Maecenas luctus eget neque nec laoreet. Praesent quis odio dictum, venenatis eros sed, tempor mi. Cras cursus varius eleifend. Nulla et vehicula sapien, in lobortis metus. Nunc feugiat metus est, in accumsan lacus tempus sed. Integer lacus sapien, faucibus sed velit in, commodo feugiat nulla.
<br>
<br>
Proin placerat tristique lorem eget porttitor. In consequat tincidunt tempus.Praesent non turpis interdum, mattis ex at, dignissim libero. Nulla sit amet euismod sem. Donec tempor mattis nunc, venenatis feugiat eros aliquam et. Praesent leo enim, cursus nec mauris a, cursus consequat eros. Suspendisse tincidunt faucibus eros at convallis. Phasellus porttitor metus eu sem cursus lobortis. Quisque efficitur dui eget blandit dictum. Curabitur quis condimentum quam, sed porta lacus. In ut venenatis lacus, dignissim efficitur odio. Sed vitae porttitor urna. Sed sem augue, sodales non velit mollis, ullamcorper imperdiet mauris. Suspendisse augue sem, dictum in efficitur sit amet, mollis ut elit. Ut sed dapibus ipsum. Cras lobortis id orci nec fringilla. Ut a fringilla leo. Vivamus eu maximus turpis.
<br>
<br>
Nam non lorem euismod, efficitur velit vitae, ullamcorper enim. Aenean hendrerit maximus mi, nec pretium risus laoreet sit amet. Quisque leo tortor, semper a vestibulum sit amet, malesuada vitae purus. Mauris imperdiet est lacinia, interdum augue sit amet, vehicula nisi. Donec facilisis, mi cursus gravida luctus, nisl arcu fermentum arcu, tincidunt laoreet eros nisl vitae mi. Aenean nisl enim, eleifend in venenatis vitae, volutpat a tellus. Quisque finibus elit ultricies nibh semper, eu malesuada metus blandit. Sed scelerisque ut ante at pretium. Curabitur laoreet ligula massa, et pulvinar mauris suscipit vel. Praesent metus purus, lacinia eu nisl vitae, pretium sollicitudin enim. Sed vel turpis non arcu tincidunt venenatis.
<br>
<br>
Cras at tortor porta, convallis arcu id, eleifend magna. Pellentesque in augue fringilla, ultrices ipsum ut, ultrices leo. Vestibulum ultrices, ex sit amet congue bibendum, velit purus lacinia ex, et bibendum mauris mauris ut justo. Donec et diam maximus, laoreet velit condimentum, venenatis nibh. Cras volutpat vulputate quam, sit amet pellentesque ipsum imperdiet eu. Sed ut mauris varius, pretium tellus eget, faucibus neque. Integer id sollicitudin erat. Proin lorem magna, malesuada id ligula id, ultrices condimentum urna. Nam at magna et ipsum vulputate maximus. Mauris eros orci, rhoncus at libero ullamcorper, tincidunt suscipit lectus. Cras tincidunt porta volutpat.
<br>
<br>
Phasellus ullamcorper eget ligula ut ultrices. Quisque auctor vestibulum ex, eu aliquam quam vehicula sit amet. Cras iaculis dui nec sapien consectetur, vel dapibus nibh malesuada. Proin bibendum, sapien at interdum porta, diam odio vulputate lacus, sed iaculis velit odio tempus dolor. Vestibulum ac finibus erat, id tincidunt sapien. Aliquam cursus dolor eget justo aliquet, id pretium nunc convallis. Integer sagittis auctor quam, tempor vehicula nunc facilisis at. Quisque eget mauris varius sem tincidunt vulputate id cursus purus. Proin eros magna, auctor vitae ultricies eget, eleifend nec eros. Donec vestibulum sapien in faucibus vehicula. Cras massa eros, pharetra iaculis nibh in, feugiat vestibulum purus. Nullam tellus nibh, congue quis rutrum in, scelerisque in erat. Nulla neque magna, aliquet non dolor quis, euismod tempus leo. Integer ac placerat quam, at egestas nisi. Cras molestie eros et risus rhoncus imperdiet.`;
texto.style.fontSize = '28px';

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);



// funcion que hace el calculo
const calcularPorcentajeScroll = ( event ) => {
    
    // desestructuraoms el objeto............
    const { clientHeight, scrollHeight, scrollTop } = event.target.scrollingElement;
    // console.log('data....', { clientHeight, scrollHeight, scrollTop });
    
    return ( scrollTop / (scrollHeight - clientHeight )) * 100;
}


// Streams
const scroll$ = fromEvent( document , 'scroll' );

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event) ),
    map( calcularPorcentajeScroll ),  // idem de linea anterior
    tap( console.log ),
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
} );

