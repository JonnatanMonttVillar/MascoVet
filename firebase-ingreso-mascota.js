// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC3IXyEpyEhaxvPJUgFvdDPrhexXOnS0Uo",
    authDomain: "mascovet-c6cb1.firebaseapp.com",
    projectId: "mascovet-c6cb1"
});

var db = firebase.firestore();

var nombre_mascota = document.getElementById('nombre_mascota').value = '';
var fecha_ingreso = document.getElementById('fecha_ingreso').value = '';
var raza = document.getElementById('raza').value = '';
var sexo = document.getElementById('sexo').value = '';
var desparacitacion = document.getElementById('desparacitacion').value = '';
var esterilizacion = document.getElementById('esterilizacion').value = '';
var color = document.getElementById('color').value = '';
var modo_obtencion = document.getElementById('modo_obtencion').value = '';

// Agregar Documentos
function guardar() {

    // Datos Mascota
    var nombre_mascota = document.getElementById('nombre_mascota').value;
    var raza = document.getElementById('raza').value;
    var fecha_ingreso = document.getElementById('fecha_ingreso').value;
    var sexo = document.getElementById('sexo').value;
    var desparacitacion = document.getElementById('desparacitacion').value;
    var esterilizacion = document.getElementById('esterilizacion').value;
    var color = document.getElementById('color').value;
    var modo_obtencion = document.getElementById('modo_obtencion').value;

    db.collection("ingreso-mascota").add({
            // Datos Mascota
            nombre_mascota: nombre_mascota,
            raza: raza,
            fecha_ingreso: fecha_ingreso,
            sexo: sexo,
            desparacitacion: desparacitacion,
            esterilizacion: esterilizacion,
            color: color,
            modo_obtencion: modo_obtencion,
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            // Datos Mascota
            var nombre_mascota = document.getElementById('nombre_mascota').value = '';
            var fecha_ingreso = document.getElementById('fecha_ingreso').value = '';
            var raza = document.getElementById('raza').value = '';
            var sexo = document.getElementById('sexo').value = '';
            var desparacitacion = document.getElementById('desparacitacion').value = '';
            var esterilizacion = document.getElementById('esterilizacion').value = '';
            var color = document.getElementById('color').value = '';
            var modo_obtencion = document.getElementById('modo_obtencion').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

// Leer Documentos
var tabla = document.getElementById('tabla');
db.collection("ingreso-mascota").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML +=
            ` <tr>
          <th scope="row"> # <!-- ${doc.id} --> </th>
          <td style="font-size: 15px">${doc.data().nombre_mascota}</td>
          <td style="font-size: 15px">${doc.data().raza}</td>
          <td style="font-size: 15px">${doc.data().sexo}</td>
          <td style="font-size: 15px">${doc.data().modo_obtencion}</td>
          <td style="font-size: 15px">${doc.data().fecha_ingreso}</td>
          <td style="font-size: 15px">${doc.data().esterilizacion}</td>  
          <td style="font-size: 15px">${doc.data().color}</td>
          <td style="font-size: 15px">${doc.data().modo_obtencion}</td>

          <td> <button class="btn btn-danger" onclick="eliminar('${doc.id}')"> Eliminar </button> </td>
          <td> <button class="btn btn-warning" onclick="editar
          ('${doc.id}', '${doc.data().nombre_mascota}', '${doc.data().raza}', '${doc.data().sexo}',
          '${doc.data().modo_obtencion}', '${doc.data().fecha_ingreso}', '${doc.data().esterilizacion}', '${doc.data().color}', '${doc.data().modo_obtencion}')
          "> Editar </button></td>
  
        </tr>`
    });
});

// Borrar Documentos
function eliminar(id) {
    db.collection("ingreso-mascota").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

//Actualizar Documentos
function editar(id, nombre_mascota, raza, fecha_ingreso, sexo, desparacitacion, esterilizacion, color, modo_obtencion) {
    document.getElementById('nombre_mascota').value = nombre_mascota;
    document.getElementById('raza').value = raza;
    document.getElementById('fecha_ingreso').value = fecha_ingreso;
    document.getElementById('sexo').value = sexo;
    document.getElementById('desparacitacion').value = desparacitacion;
    document.getElementById('esterilizacion').value = esterilizacion;
    document.getElementById('color').value = color;
    document.getElementById('modo_obtencion').value = modo_obtencion;

    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function () {
        var editRef = db.collection("ingreso-mascota").doc(id);

        // Datos Mascota
        var nombre_mascota = document.getElementById('nombre_mascota').value;
        var raza = document.getElementById('raza').value;
        var fecha_ingreso = document.getElementById('fecha_ingreso').value;
        var sexo = document.getElementById('sexo').value;
        var desparacitacion = document.getElementById('desparacitacion').value;
        var esterilizacion = document.getElementById('esterilizacion').value;
        var color = document.getElementById('color').value;
        var modo_obtencion = document.getElementById('modo_obtencion').value;

        return editRef.update({
                //Datos Mascota
                nombre_mascota: nombre_mascota,
                raza: raza,
                fecha_ingreso: fecha_ingreso,
                sexo: sexo,
                desparacitacion: desparacitacion,
                esterilizacion: esterilizacion,
                color: color,
                modo_obtencion: modo_obtencion,
            })
            .then(function () {
                console.log("Document successfully updated!");
                //Devolver a boton sus valores de guardar
                boton.innerHTML = 'Guardar';
                boton.onclick = function () {
                    guardar();
                }

                // Datos Mascota
                var nombre_mascota = document.getElementById('nombre_mascota').value = '';
                var raza = document.getElementById('raza').value = '';
                var fecha_ingreso = document.getElementById('fecha_ingreso').value = '';
                var sexo = document.getElementById('sexo').value = '';
                var desparacitacion = document.getElementById('desparacitacion').value = '';
                var esterilizacion = document.getElementById('esterilizacion').value = '';
                var color = document.getElementById('color').value = '';
                var modo_obtencion = document.getElementById('modo_obtencion').value = '';

            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }

}