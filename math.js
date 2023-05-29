const price= document.querySelector('#price')
const discount= document.querySelector('#discount')

const boton= document.querySelector('#boton')
const resultado= document.querySelector('#resultado')


boton.addEventListener('click',calculo)

function calculo(){
 const pric =Number(price.value);
 const disco =Number(discount.value);
 if(!pric || !disco){
    resultado.innerText='Por favor llena los campos correspondientes';
    return;
 }

  if (disco > 100) {
    resultado.innerText = 'AjÃ¡, ya quisieras, no te vamos dar plata, PAGA!';
    return;
  }
 const total=(pric*(disco/100));

 resultado.innerText='El precio neto es de L.'+ total;
}
