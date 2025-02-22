// header.js
document.addEventListener("scroll", function() {
    var cabecalho = document.querySelector(".cabecalho");
    if (window.scrollY > 50) { // Quando rolar mais de 50px
        cabecalho.classList.add("solid");
    } else {
        cabecalho.classList.remove("solid");
    }
});
