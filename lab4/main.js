// scripts/main.js

document.addEventListener("DOMContentLoaded", function () {
    const numberOfImages = 50;
    const imageContainer = document.getElementById("image-container");

    for (let i = 1; i <= numberOfImages; i++) {
        const img = createImageElement(`slike/image-${i}.jpg`, `Image ${i}`);
        imageContainer.appendChild(img);
    }
});