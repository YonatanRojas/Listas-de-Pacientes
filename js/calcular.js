//CALCULA EL IMC:

//IMC = masa / altura^2
var pacientes =  document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++ ){
    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    let pesoValido = validarPeso(peso);
    let alturaValida = validarAltura(altura);

   //verdadero o falso --> verdadero
    if(!pesoValido){
    tdIMC.textContent = "Peso Incorrecto";
    pesoValido = false;
    paciente.classList.add("paciente-incorrecto");
    }

    //verdadero o falso --> verdadero
    if(!alturaValida){
    tdIMC.textContent = "Altura Incorrecta";
    alturaValida = false;
    paciente.classList.add("paciente-incorrecto");
    }

    //verdadero y verdadero --> verdadero
    //verdadero y falso --> falso
    if(pesoValido && alturaValida){
    tdIMC.textContent = calcularIMC(peso,altura); 
    }

};
//funcion enlasada a agregar.js
function calcularIMC(peso,altura){
    var imc = peso / (altura * altura);//100 / 2 * 2 = 100 / 4= 25
    return imc.toFixed(2);
}
//funciones para validar el peso y la altura
function validarPeso(peso) {
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}
function validarAltura(altura) {
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

