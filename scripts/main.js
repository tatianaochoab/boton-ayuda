// -----------¿NECESITAS AYUDA?------------

document.getElementById("help-button").addEventListener("mouseenter", () => {
    document.getElementById("help").innerHTML = "¿Necesitas ayuda?";
})

document.getElementById("help-button").addEventListener("mouseleave", () => {
    document.getElementById("help").innerHTML = "";
})