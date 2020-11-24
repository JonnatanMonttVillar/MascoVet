// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC3IXyEpyEhaxvPJUgFvdDPrhexXOnS0Uo",
    authDomain: "mascovet-c6cb1.firebaseapp.com",
    projectId: "mascovet-c6cb1"
});

var db = firebase.firestore();


// Agregar Documentos
function guardar() {

    // Datos Mascota
    var nombre_contacto = document.getElementById('nombre_contacto').value;
    var email_contacto = document.getElementById('email_contacto').value;
    var motivo_contacto = document.getElementById('motivo_contacto').value;

    db.collection("formulario-contacto").add({
            // Datos Mascota
            nombre_contacto: nombre_contacto,
            email_contacto: email_contacto,
            motivo_contacto: motivo_contacto,
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            // Datos Mascota
            var nombre_contacto = document.getElementById('nombre_contacto').value = '';
            var email_contacto = document.getElementById('email_contacto').value = '';
            var motivo_contacto = document.getElementById('motivo_contacto').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

// Leer Documentos
var tabla = document.getElementById('tabla');
db.collection("formulario-contacto").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML +=
        ` <tr>
          <th scope="row"> # <!-- ${doc.id} --> </th>
          <td style="font-size: 15px">${doc.data().nombre_contacto}</td>
          <td style="font-size: 15px">${doc.data().email_contacto}</td>
          <td style="font-size: 15px">${doc.data().motivo_contacto}</td>

          <td> <button class="btn btn-danger" onclick="eliminar('${doc.id}')"> Eliminar </button> </td>
        </tr>`
    });
});

// Borrar Documentos
function eliminar(id) {
    db.collection("formulario-contacto").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}
