/*For our menu and Hamburger Menu dropdown*/
function toggleMenu() {
    const icon = document.querySelector(".menu-links");
    const menu = document.querySelector(".hamburger-icon");
    icon.classList.toggle("open");
    menu.classList.toggle("open");
}