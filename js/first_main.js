
var btn = document.getElementById('btn_cargar_usuarios');
var loader = document.getElementById('loader');

btn.addEventListener('click', function(){
    var peticion = new XMLHttpRequest();
    // Cargamos los datos desde una url externa
    // peticion.open('GET', 'http://www.json-generator.com/api/json/get/cpKluCuxNK?indent=2');

    // Cargamos los datos desde un archivo php
    // peticion.open('GET', 'php/usuarios.php');
    peticion.open('GET', 'php/leer-datos.php');

    // Mostramos el cargador
    loader.classList.add('active');

    peticion.onload = function(){
        // cosnole.log (JSON.parse(peticion.responseText[0].nombre));
        var datos = JSON.parse(peticion.responseText);
        console.log(datos);

        // ciclo for mayor control sobre la carga de nuestros datos
        for(var i=0; i < 5; i++){
            var elemento = document.createElement('tr');
            elemento.innerHTML += ("<td>" + datos[i].id + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].nombre + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].edad + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].pais + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].correo + "</td>");
            document.getElementById('tabla').appendChild(elemento);   
        }


        // Medinte forEach, carga todo de una sola vez, poco control
        // datos.forEach(persona => {
        //     var elemento = document.createElement('tr');
        //     elemento.innerHTML += ("<td>" + persona.id + "</td>");
        //     elemento.innerHTML += ("<td>" + persona.nombre + "</td>");
        //     elemento.innerHTML += ("<td>" + persona.edad + "</td>");
        //     elemento.innerHTML += ("<td>" + persona.pais + "</td>");
        //     elemento.innerHTML += ("<td>" + persona.correo + "</td>");
        //     document.getElementById('tabla').appendChild(elemento);
        // });
    }

    peticion.onreadystatechange = function(){
        if(peticion.readyState == 4 && peticion.status == 200){
            loader.classList.remove('active');
        }
    }

    // ENviar la petion
    peticion.send();
});