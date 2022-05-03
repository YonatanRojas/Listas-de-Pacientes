//Agregar paciente:
var boton = document.querySelector("#adicionar-paciente");

boton.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPacientes(form);
    var pacienteTr = construirTr(paciente);

    var errores = validarPaciente(paciente);
    //validar paciente
    if (errores.length > 0) {
        exhibirMensajesError(errores);
        return;
    }

    addicionarPacienteEnLaTabla(paciente);
    form.reset();
    //form.remove(); quita el formulario

    var mensajesErrores = document.querySelector("#mensaje-errores");
    mensajesErrores.innerHTML = "";

});

function addicionarPacienteEnLaTabla(paciente) {
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
};


function capturarDatosPacientes(form){
    //camptura los datos del formulario
    var paciente = {
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calcularIMC(form.peso.value,form.altura.value)
    };
    return paciente;
};

function construirTr(paciente){
    //crea elementos para el formulario 
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
  
    //asignacion al tr de los td y de la tabla del tr
    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
};

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
};

function validarPaciente(paciente) {
    var errores = [];

    if (paciente.nombre.length == 0) {
        errores.push("El Nombre no puede estar vacio");
    };
    if (paciente.peso.length == 0) {
        errores.push("El peso no puede estar vacio");
    };
    if (paciente.altura.length == 0) {
        errores.push("La altura no puede estar vacio");
    };
    if (paciente.gordura.length == 0) {
        errores.push("El %Gordura Corporal no puede estar vacio");
    };

    if (!validarPeso(paciente.peso)) {
        errores.push("El peso es INCORRECTO");
    };

    if (!validarAltura(paciente.altura)) {
        errores.push("La altura es INCORRECTA");
    };

    return errores;
};

function exhibirMensajesError(errores){
    var ul = document.querySelector("#mensaje-errores");
    ul.innerHTML = "";


    errores.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
};