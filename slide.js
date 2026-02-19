const images = ["image1.png", "image2.png", "image3.png", "image4.png"];
let index = 0;

const img = document.querySelector(".slide");
const dots = document.querySelectorAll(".dots i");
const prev = document.querySelector(".fa-chevron-left");
const next = document.querySelector(".fa-chevron-right");

// update slider
function updateSlider() {
    img.src = images[index];

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.remove("fa-regular");
            dot.classList.add("fa-solid");
        } else {
            dot.classList.remove("fa-solid");
            dot.classList.add("fa-regular");
        }
    });
}

prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
});

next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateSlider();
});

// dot click events
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
    });
});
