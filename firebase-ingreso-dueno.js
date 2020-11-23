// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC3IXyEpyEhaxvPJUgFvdDPrhexXOnS0Uo",
    authDomain: "mascovet-c6cb1.firebaseapp.com",
    projectId: "mascovet-c6cb1"
});

var db = firebase.firestore();

var nombre_dueno = document.getElementById('nombre_dueno').value = '';
var telefono_dueno = document.getElementById('telefono_dueno').value = '';
var correo_dueno = document.getElementById('correo_dueno').value = '';
var direccion_dueno = document.getElementById('direccion_dueno').value = '';
var nombre_mascota = document.getElementById('nombre_mascota').value = '';

// Agregar Documentos
function guardar() {

    // Datos Mascota
    var nombre_dueno = document.getElementById('nombre_dueno').value;
    var telefono_dueno = document.getElementById('telefono_dueno').value;
    var correo_dueno = document.getElementById('correo_dueno').value;
    var direccion_dueno = document.getElementById('direccion_dueno').value;
    var nombre_mascota = document.getElementById('nombre_mascota').value;

nombre_mascota
    db.collection("ingreso-dueno").add({
            // Datos Mascota
            nombre_dueno: nombre_dueno,
            telefono_dueno: telefono_dueno,
            correo_dueno: correo_dueno,
            direccion_dueno: direccion_dueno,
            nombre_mascota: nombre_mascota
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            // Datos Mascota
            var nombre_dueno = document.getElementById('nombre_dueno').value = '';
            var telefono_dueno = document.getElementById('telefono_dueno').value = '';
            var correo_dueno = document.getElementById('correo_dueno').value = '';
            var direccion_dueno = document.getElementById('direccion_dueno').value = '';
            var nombre_mascota = document.getElementById('nombre_mascota').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

// Leer Documentos
var tabla = document.getElementById('tabla');
db.collection("ingreso-dueno").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML +=
            ` <tr>
          <th scope="row"> # <!-- ${doc.id} --> </th>
          <td style="font-size: 15px">${doc.data().nombre_dueno}</td>
          <td style="font-size: 15px">${doc.data().telefono_dueno}</td>
          <td style="font-size: 15px">${doc.data().correo_dueno}</td>
          <td style="font-size: 15px">${doc.data().direccion_dueno}</td>
          <td style="font-size: 15px">${doc.data().nombre_mascota}</td>

          <td> <button class="btn btn-danger" onclick="eliminar('${doc.id}')"> Eliminar </button> </td>
          <td> <button class="btn btn-warning" onclick="editar
          ('${doc.id}', '${doc.data().nombre_dueno}', '${doc.data().telefono_dueno}', '${doc.data().correo_dueno}','${doc.data().direccion_dueno}', '${doc.data().nombre_mascota}')
          "> Editar </button></td>
  
        </tr>`
    });
});

// Borrar Documentos
function eliminar(id) {
    db.collection("ingreso-dueno").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

//Actualizar Documentos
function editar(id, nombre_dueno, telefono_dueno, correo_dueno, direccion_dueno, nombre_mascota) {
    document.getElementById('nombre_dueno').value = nombre_dueno;
    document.getElementById('telefono_dueno').value = telefono_dueno;
    document.getElementById('correo_dueno').value = correo_dueno;
    document.getElementById('direccion_dueno').value = direccion_dueno;
    document.getElementById('nombre_mascota').value = nombre_mascota;

    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function () {
        var editRef = db.collection("ingreso-dueno").doc(id);

        // Datos Mascota
        var nombre_dueno = document.getElementById('nombre_dueno').value;
        var telefono_dueno = document.getElementById('telefono_dueno').value;
        var correo_dueno = document.getElementById('correo_dueno').value;
        var direccion_dueno = document.getElementById('direccion_dueno').value;
        var nombre_mascota = document.getElementById('nombre_mascota').value;

        return editRef.update({
                //Datos Mascota
                nombre_dueno: nombre_dueno,
                telefono_dueno: telefono_dueno,
                correo_dueno: correo_dueno,
                direccion_dueno: direccion_dueno,
                nombre_mascota: nombre_mascota
            })
            .then(function () {
                console.log("Document successfully updated!");
                //Devolver a boton sus valores de guardar
                boton.innerHTML = 'Guardar';
                boton.onclick = function () {
                    guardar();
                }

                // Datos Mascota
                var nombre_dueno = document.getElementById('nombre_dueno').value = '';
                var telefono_dueno = document.getElementById('telefono_dueno').value = '';
                var correo_dueno = document.getElementById('correo_dueno').value = '';
                var direccion_dueno = document.getElementById('direccion_dueno').value = '';
                var nombre_mascota = document.getElementById('nombre_mascota').value = '';

            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }

}