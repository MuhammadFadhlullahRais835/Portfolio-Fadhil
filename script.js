console.log("tes")

// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const menuWrapper = document.querySelector(".menu-wrapper");
const bigOverlay = document.querySelector(".big-overlay");

function toggleSidebar() {
    sidebar.classList.toggle("close");
    menuWrapper.classList.toggle("close");
    // hamburger.classList.toggle("close")
    document.querySelector(".short-bio").classList.toggle("close")
    document.querySelector(".top-nav").classList.toggle("extend")
    document.querySelector(".big-overlay").classList.toggle("close")
    document.querySelector("body").classList.toggle('freeze')
    document.querySelector(".hamburger").classList.toggle("open")
}

hamburger.addEventListener('click', () => {
    toggleSidebar();
});

bigOverlay.addEventListener('click', () => {
    toggleSidebar();
})

const menus = document.querySelectorAll(".nav-menu");

menus.forEach(menu => {
    menu.addEventListener("click", () => {
        toggleSidebar()
    });

})
