// ANIMASI SCROLL
const faders = document.querySelectorAll(".fade");

const scrollObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

faders.forEach(fade => {
    scrollObserver.observe(fade);
});

// POPUP
function tampilkanPesan() {
    document.getElementById("popup").style.display = "flex";
}

function tutupPopup() {
    document.getElementById("popup").style.display = "none";
}
