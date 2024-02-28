   //crearemos contadores de depto.

   var it=0;
   var marketing=0;
   var sistema=0;
   var ventas=0;
   var administracion=0;
//Actualizamos los contadores en el html
document.getElementById("contadorIT").textContent ="Sistemas: "+it;
document.getElementById("contadorVentas").textContent ="Ventas: "+ventas;
document.getElementById("contadorMarketing").textContent ="Marketing: "+marketing;
document.getElementById("contadorAdministracion").textContent ="Administración: "+administracion;

function agregarEmpleado(){
 
    

    //Solicitamos a los elementos de tipo input y select, que nos dejen guardar el contenido en nuestras variables.
    var nombre = document.getElementById("inputNombre").value;
    var apellido = document.getElementById("inputApellido").value;
    var email = document.getElementById("inputEmail").value;
    var dpto = document.getElementById("selectDpto").value;
    switch (dpto){
        case "IT":
        it++;
        break;
        
        case "Marketing":
         marketing++;   
        break;
        
        case "Ventas":
        ventas++;  
        break;
        
        case "Administración":
         administracion++;   
        break;
    }

    //Ahora procedemos a guardar estos datos en un nuevo elemento li llamado nuevoEmpleado,que posteriormente agregaremos a nuestra lista.
    var nuevoEmpleado = document.createElement("li");
    nuevoEmpleado.textContent = nombre+" "+apellido;
    nuevoEmpleado.className = "list-group-item";


    //Ahora procedemos a imputar esto en nuestra listaEmpleado, para ello, tenemos q llamarla primero, posteriormente le añadimos un "hijo" del tipo li (nuevoEmpleado).
    var lista = document.getElementById("listaEmpleado");
    lista.appendChild(nuevoEmpleado);
}