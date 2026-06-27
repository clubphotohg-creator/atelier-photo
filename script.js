/* ----- MOT DE PASSE ----- */
function checkPassword() {
    const password = document.getElementById("password").value;

    // Mot de passe à modifier ici
    const correctPassword = "atelier2024";

    if (password === correctPassword) {
        window.location.href = "prive.html";
    } else {
        alert("Mot de passe incorrect.");
    }
}
