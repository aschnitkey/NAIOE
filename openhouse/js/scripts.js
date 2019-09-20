let imageMain = document.querySelector(".lounge");
let imageParking = document.querySelectorAll(".lounge")[1];

function loadImage() {
    imageMain.style.opacity = 1;
    imageParking.style.opacity = 1;
}

window.onload = loadImage;