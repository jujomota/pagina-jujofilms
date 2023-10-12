document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        mensaje.classList.add('hidden');

        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('contrasena').value;

        if (usuario === "Tezka" && contrasena === "47155555") {
            window.location.href = "tezka.html";
        } else if (usuario === "Sneikder" && contrasena === "snk2052") {
            window.location.href = "sneikder.html";
        } else if (usuario === "meh" && contrasena === "papasconfrijoles624") {
            window.location.href = "meh.html";
        } else if (usuario === "Skit" && contrasena === "23202797") {
            window.location.href = "skit.html";
        } else if (usuario === "elias016" && contrasena === "elirv335") {
            window.location.href = "elias016.html";
        } else if (usuario === "Fredav2022" && contrasena === "Freddyjuega7") {
            window.location.href = "fredav2022.html";
        } else if (usuario === "Rama128" && contrasena === "pironga3") {
            window.location.href = "rama128.html";
        } else if (usuario === "ArlyMaker" && contrasena === "Arlyen01") {
            window.location.href = "arlymaker.html";
        } else if (usuario === "Sleonar2" && contrasena === "Val123#$") {
            window.location.href = "sleonar2.html";
        } else if (usuario === "Mg28" && contrasena === "darklight") {
            window.location.href = "mg28.html";
        } else if (usuario === "josejuan" && contrasena === "Jose3535") {
            window.location.href = "josejuan.html";
        } else if (usuario === "Yu4343" && contrasena === "jhonps43") {
            window.location.href = "yu4343.html";
        } else if (usuario === "jujofilms" && contrasena === "@Molina2009") {
            window.location.href = "jujofilms.html";
        }  else {
            alert("Usuario o contraseña incorrecta, si olvido su contraseña contactenos");
        }

    });
});
