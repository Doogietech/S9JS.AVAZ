// Para el ejercicio de hoy considerar lo siguiente:
 
//     **PROYECTO**
 
//     Crear una pagina web que tenga las siguientes secciones:
//     Lista de empleados, formulario de registro, data empleado (navegables entre ellas)



 
//              ***********FORMULARIO DE REGISTRO:
//     En el formulario de registro se debe poder ingresar los siguientes campos:
//         nombre
//         apellido
//         correo
//         cargo
 
//     El formulario debe contener las validaciones correspondientes para cada campo:
 
//     Nombre>  debe tener de dos caracteres a 14 caracteres
//     Apellido>  debe tener de dos caracteres a 14 caracteres
//     Correo>  las validaciones correspondientes(minimo @ y .). ******************No se puede ingresar el mismo correo para dos usuarios diferentes.**************
//     Cargo> Los cargos deben ser Jefe, Analista, Programador, Soporte y Asistente.
 
//     Cuando se cumplan las validaciones y se haga el submit de la informacion, se debe crear una instancia de la clase Empleado, esta clase debe incluir:
//     atributos: codigo, nombre, apellido, correo, cargo (el codigo es autogenerado y no debe repetirse)
//     operaciones: sueldoBruto(), sueldoNeto().





//                 ******* LISTA DE EMPLEADOS:
//     En la seccion de lista de empleados se debe crear una tabla con todos los empleados existentes:
 
//     columnas: codigo, nombre, apellido, correo, sueldobruto, sueldoneto, dataempleado(link).
 
//     Las columnas deben contener el feature de ordenarse de menor a mayor o de mayor a menor haciendo click en los encabezados.
//     OJO: si se ha hecho click en un encabezado debe aparecer un icono de una flecha apuntando hacia arriba o hacia abajo segun como se haya organizado la columna. (si es de mas alto a mas bajo, la flecha debe apuntar hacia abajo)
 
        


//        ************* DATA EMPLEADO:
 
//     En esta seccion se debe ver la informacion registrada por el empleado a manera de un profile del empleado con elementos del tipo input pero que no sean modificables. En la parte inferior del profile deben existir dos botones: "editar" y "guardar". Al hacer click en el icono de editar, los inputs deben volverse modificables y permitir que se cambie la informacion seleccionada. Luego se puede guardar la informacion en el mismo objeto haciendo click en el boton "guardar"
 
//     ********
//     let sueldos = {
//         jefe: 5000,
//         analista: 4000,
//         programador: 3000,
//         soporte: 2000,
//         asistente: 1500,
//     }
 
//     sueldoBruto() segun el cargo debe consultar el objeto sueldos y retornar el sueldo que corresponde al cargo del empleado.
 
//     sueldoNeto() el 80% del sueldoBruto.


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

inputs.forEach((input) => {
	input.addEventListener('keyup', validar);
	input.addEventListener('blur', validar);
});
function validar(e) {
    e.preventDefault()

    let name = document.getElementById("name").value
    let expNombre = /^([a-zA-ZÀ-ÿ\s]){1,14}$/;
    const dom_last_name = document.getElementById("name")
    if (expName.test(name) && name !== "") {
        domName.setAttribute("class", "form-control is-valid")
    } else {
        domName.setAttribute("class", "form-control is-invalid")
    }
}
    
    let apellido = document.getElementById("apellido").value
    let expApellido = /^([a-zA-ZÀ-ÿ\s]){1,14}$/;
    const domApellido = document.getElementById("apellido")
    if (expApellido.test(apellido) && apellido !== "") {
        domApellido.setAttribute("class", "form-control is-valid")
    } else {
        domApellido.setAttribute("class", "form-control is-invalid")
    }

   

    let email = document.getElementById("email").value
    let exp_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const dom_email = document.getElementById("email")
    if (exp_email.test(email)) {
        dom_email.setAttribute("class", "form-control is-valid")
    } else {
        dom_email.setAttribute("class", "form-control is-invalid")
    }
    

