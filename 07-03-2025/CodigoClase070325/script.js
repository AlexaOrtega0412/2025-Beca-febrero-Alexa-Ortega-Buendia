const box = document.querySelector('.box');

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        box.style.top = `${box.styles.top ?? 0 + 10}`;
    }
});