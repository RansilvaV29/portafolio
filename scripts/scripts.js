document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const navBar = document.querySelector("#nav-bar");
    
    menuBtn.addEventListener("click", function() {
        navBar.classList.toggle("show");
    });
});
