let NumeroSecreto = 0;
let Intentos = 1;
let ListaNumerosSorteado = [];
let NumerosMAximo = 10;


function AsignarTextoElemento ( elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento (){
    let NumeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);

    if (NumeroDeUsuario === NumeroSecreto) {
        AsignarTextoElemento('p' , `Acertaste el numero secreto en ${Intentos} ${(Intentos == 1) ? ' vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
            if (NumeroDeUsuario > NumeroSecreto){
                AsignarTextoElemento ('p', 'El numero es menor')
            } else {
            AsignarTextoElemento ('p', 'El numero es mayor')
            }
        } Intentos ++;
        LimpiarCaja();

    return;
}


function LimpiarCaja(){
   document.querySelector('#ValorUsuario').value= '';
    
}

function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor (Math.random()*NumerosMAximo)+1;
   
// preguntar interno si sorteamos todos los numeros
    if (ListaNumerosSorteado.length == NumerosMAximo){

        AsignarTextoElemento('p', 'Ya se sortearon los numeros posibles')
    } else{

        if (ListaNumerosSorteado.includes(NumeroGenerado)){
            return GenerarNumeroSecreto();
        }else{
            ListaNumerosSorteado.push(NumeroGenerado);
            return NumeroGenerado;
      
          }
    }
    
}

function ConceptosIniciales(){
    AsignarTextoElemento('h1','Juego del numero secretito');
    AsignarTextoElemento('p',`Indica el numero del a al  ${NumerosMAximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;



}

function ReiniciarJuego(){
    // limpiar caja
    LimpiarCaja ();
    // mensajes iniciales
    ConceptosIniciales();
    
    document.querySelector('#reiniciar').setAttribute('disabled','true')


}
 ConceptosIniciales();