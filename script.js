// En el archivo script.js, selecciona el h2 del nombre del usuario y el párrafo de la ocupación dentro de la perfil-card.
// Añade un evento de clic al perfil-card completo.
// Cuando se haga clic en la tarjeta:
// Si el nombre actual masculino, que se cambia el nombre a fememino
// Si la ocupación esta en masculino, que se cambia el nombre a femenino.
// Puedes usar una variable booleana para llevar el control del estado.
// Usa alert() para indicarle al usuario que se hicieron los cambios.

function cambioDeGenero() {
    var nombre = document.querySelector(".perfil-card h2");
    var ocupacion = document.querySelector(".perfil-card p");
    var imagen = document.querySelector(".perfil-card img");
    var esMasculino = true;

    if (nombre.textContent === "Sergio Ontiveros") {
        imagen.src = "img/usuarioM.png";
        nombre.textContent = "Sergia Ontiveros";
        ocupacion.textContent = "Licenciada en Sistemas Computacionales";
        esMasculino = false;
        alert("El nombre y la ocupacion han sido cambaidos a femeino...");
    }
    else {
        imagen.src = "img/usuarioH.png";
        nombre.textContent = "Sergio Ontiveros";
        ocupacion.textContent = "Licennciado en Sistemas Computacionales";
        esMasculino = true;
        alert("El nombre y la ocupacion han sido cambaidos a masculino...");
    }
}
