window.addEventListener("load",function(){
    ejecutarGet();
 var btn = $("btn");
 btn.addEventListener("click",agregarPersona);
   
});

function ejecutarGet() {
    var cuerpo=$("tcuerpo");
    
    var peticionHTTP = new XMLHttpRequest();
    peticionHTTP.onreadystatechange = function(){
    
    if(peticionHTTP.readyState == 4 && peticionHTTP.status == 200){
        var listasPersonas=JSON.parse(peticionHTTP.responseText);

            for (var i = 0; i < listasPersonas.length; i++) {
                var fila = document.createElement("tr");
                var obj = listasPersonas[i];
                var column = Object.keys(obj);
                //ocultar el id
                 //ocultar = obj.id;
                 
                for (var j = 0; j < column.length; j++) {
                    var celda = document.createElement("td");
                    var texto = document.createTextNode(obj[column[j]]);
                    celda.appendChild(texto);
                    fila.appendChild(celda);
                    
                }
                var celda = document.createElement("td");
                var link = document.createElement("a");
                link.setAttribute("href","#");
                link.addEventListener("click",borrar);
                //ocultar.setAttribute("",);
                var texto= document.createElement("borrar");
                var textoLink=document.createTextNode("borrar");
                var ancla = document.createElement("a");
                ancla.setAttribute("href","#");
                celda.appendChild(textoLink);


                var tdAccion =document.createElement("td");
                fila.appendChild(tdAccion);
                var ancla = document.createElement("a");
                tdAccion.appendChild(ancla);
                ancla.setAttribute("href","#");
        
                var textoLink=document.createTextNode("borrar");
                ancla.appendChild(textoLink);
                ancla.addEventListener("click",borrar);
    
                cuerpo.appendChild(fila);
            }        
    }
}
 peticionHTTP.open("GET","http://localhost:3000/materias",true);
 peticionHTTP.send();   
}

    function agregarPersona() {
        var txtmate=$("txtmateria");
        var txtcu=$("txtcuatri");
        var txtfec=$("txtFecha");
        var txtTurno=document.getElementsByName("turno");
       if(txtTurno.value==true){
        alert($('input:radio[name=turno]:checked').val())
        }
        
        if(txtmate.value==""){
            txtmate.className="conError";
            return;
        }else{
            txtmate.className="sinError";
        }
        if(txtcu.value==""){
            txtcu.className="conError";
            return;
        }else{
            txtcu.className="sinError";
        }
        
        var cuerpo = $("tcuerpo");
        
        var fila=document.createElement("tr");
        cuerpo.appendChild(fila);
        var tdmateria = document.createElement("td");
        fila.appendChild(tdmateria);
        var textomateria = document.createTextNode(txtmate.value);
        tdmateria.appendChild(textomateria);
        
        var tdcuatri = document.createElement("td");
        fila.appendChild(tdcuatri);
        var textocuatri = document.createTextNode(txtcu.value);
        tdcuatri.appendChild(textocuatri);

        var tdfecha = document.createElement("td");
        fila.appendChild(tdfecha);
        var textofecha = document.createTextNode(txtfec.value);
        tdfecha.appendChild(textofecha);

        var tdTurno = document.createElement("td");
        fila.appendChild(tdTurno);
        var textoturno = document.createTextNode(txtTurno.value);
        tdTurno.appendChild(textoturno);


        var tdAccion =document.createElement("td");
        fila.appendChild(tdAccion);
        var ancla = document.createElement("a");
        tdAccion.appendChild(ancla);
        

        var textoLink=document.createTextNode("borrar");
        
        ancla.appendChild(textoLink);
        ancla.addEventListener("click",borrar);

        
        limpiar();
    }
    function modificar() {
        var cuerpo=$("tcuerpo");

     var peticionHTTP = new XMLHttpRequest();
    peticionHTTP.onreadystatechange = function(){
    //console.log(peticionHTTP.responseText);
    if(peticionHTTP.readyState == 4 && peticionHTTP.status == 200){
        var listasPersonas=JSON.parse(peticionHTTP.responseText);
        for (var i = 0; i < column.length; i++) {
            var celda = document.createElement("td");
            var texto = document.createTextNode(obj[column[i]]);
        }
    }

    }
    //$("#spinner").appendChild("<img src='./img/3oEjI6SIIHBdRxXI40.gif'>");
    peticionHTTP.open("POST","http://localhost:3000/editar",true);//por default async es true.
    peticionHTTP.setRequestHeader("content-type","application/json");
    /*var yo = {nombre:"$('txtNombre')",apellido:"$('txtApellido')",sexo:"$('sexo')",fecha:"$('txtFecha')"};
        var stringYo =JSON.stringify(yo);
        peticionHTTP.send(stringYo);*/
        
    }

    function editar(id) {

        var listasPersonas=JSON.parse(peticionHTTP.response);

            for (var i = 0; i < listasPersonas.length; i++) {
               // var fila = document.createElement("tr");
                var obj = listasPersonas[i].id;
                console.log(obj);
                //var column = Object.keys(obj);
            }
        var txtnomb=$("txtNombre").value;
        var txtape=$("txtApellido").value;
        var txtfec=$("txtFecha").value;
        var fila = filaAEditar;
        data = {
            "nombre": txtnomb,
            "apellido": txtape,
            "fecha": txtfec,
            "id": fila.id,
            "active": true
        };
    }

function $(id) {
    return document.getElementById(id);
    
}

function limpiar() {
   $("txtmateria").value="";
    $("txtcuatri").value="";
    $("txtFecha").value="";
}

    function borrar(event) {
        
        var elemento = event.target;
        
        $("tcuerpo").removeChild(elemento.parentNode.parentNode);
        
    }
