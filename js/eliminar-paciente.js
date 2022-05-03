var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});

/* Una manera de eliminar una fila de la tabla
    pero no se eliminan las filas agregadas del script.
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove();
    });
});
*/