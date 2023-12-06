// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Specify the number of images you want (e.g., 50)
    const numberOfImages = 50;
    
    // Get the container where you want to append the images
    const imageContainer = document.getElementById("image-container");

    // Loop to create and append image elements
    for (let i = 1; i <= numberOfImages; i++) {
        const img = document.createElement("img");
        img.src = `slike/image-${i}.jpg`;
        img.alt = `Image ${i}`;
        imageContainer.appendChild(img);
    }
});