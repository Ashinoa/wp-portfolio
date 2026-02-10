const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".popup-close");

document.addEventListener("click", (e) => {
    const img = e.target.closest(".popup-image");
    if (!img) return;

    popupImg.src = img.src;
    popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    popupImg.src = "";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.add("hidden");
        popupImg.src = "";
    }
});
