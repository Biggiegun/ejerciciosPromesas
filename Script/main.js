// code here!!
var nombre = prompt('Ingresa tu nombre');


let nombrePromesa = new Promise((resolve, reject)=>
{
setTimeout(function(){
resolve ("Tu nombre es: "+nombre);
}, 5000);    
})

nombrePromesa.then((resolve) => {
 let respuesta = document.querySelector('div');
 respuesta.innerHTML = resolve;
}).catch( (error) =>{
    let respuesta = document.querySelector('div');
 respuesta.innerHTML = "";
})
