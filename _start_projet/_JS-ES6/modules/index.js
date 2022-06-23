import lib, {olaUniverso, nome} from './libes6.js';


document.addEventListener('DOMContentLoaded', init, false);

function init(){
    //console.log('OLA Universo....');

    let info = document.getElementById('info');

    info.innerHTML = `<p> A Utilizar o Modulo de ES5: ${libes5.dizerOla()} </p>`;
    info.innerHTML += `<p> ${olaUniverso()} </p>`;
    info.innerHTML += `<p> ${lib()} </p>`;

}

