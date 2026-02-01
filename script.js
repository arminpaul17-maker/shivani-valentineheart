const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalScreen = document.getElementById("finalScreen");
const mainScreen = document.querySelector(".center");

yesBtn.addEventListener("click", () => {
    mainScreen.classList.add("hidden");
    finalScreen.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
