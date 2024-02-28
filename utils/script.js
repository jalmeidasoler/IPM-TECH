//creamos contadores de depto.
   var it=0;
   var marketing=0;
   var sistema=0;
   var ventas=0;
   var administracion=0;

function agregarEmpleado(){
 
    

    //Solicitamos a los elementos de tipo input y select, que nos dejen guardar el contenido en nuestras variables.
    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let email = document.getElementById("inputEmail").value;
    let dpto = document.getElementById("selectDpto").value;
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
    //Actualizamos los contadores en el html
    document.getElementById("contadorIT").textContent ="Sistemas: "+it;
    document.getElementById("contadorVentas").textContent ="Ventas: "+ventas;
    document.getElementById("contadorMarketing").textContent ="Marketing: "+marketing;
    document.getElementById("contadorAdministracion").textContent ="Administración: "+administracion;

    //Ahora procedemos a guardar estos datos en un nuevo elemento li llamado nuevoEmpleado,que posteriormente agregaremos a nuestra lista.
    let nuevoEmpleado = document.createElement("li");
    nuevoEmpleado.textContent = nombre+" "+apellido;
    nuevoEmpleado.className = "list-group-item";


    //Ahora procedemos a imputar esto en nuestra listaEmpleado, para ello, tenemos q llamarla primero, posteriormente le añadimos un "hijo" del tipo li (nuevoEmpleado).
    let lista = document.getElementById("listaEmpleado");
    lista.appendChild(nuevoEmpleado);
}