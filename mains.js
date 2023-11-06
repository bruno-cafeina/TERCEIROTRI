function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');

let contador = 0;
//Estrutura de repetição - Enquanto
 for(contador <listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const iAudio = `#som_${instrumento}`;
    console.log(iAudio);

    tecla.onclick = function(){
        tocaSom(iAudio);
    };
    tecla.onkeydown = function(evento){
        console.log(evento.code) ;
    if (evento.code === 'Enter') 
     tecla.classList.add('ativa');
   }
   if (evento.code === 'Space'){
     tecla.classList.add('ativa');
   }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
  }
 }
