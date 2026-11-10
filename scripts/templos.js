// Ano atual
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

// Última modificação
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Última Modificação: ${document.lastModified}`;

// Menu hambúrguer
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    menuButton.textContent =
        navigation.classList.contains("open") ? "✖" : "☰";
});