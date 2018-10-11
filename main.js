let menu = document.getElementById("menu");

menu.addEventListener("click", function() {
    this.blur();
    document.getElementById("menulist").classList.toggle("active");
});