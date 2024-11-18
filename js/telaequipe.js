const btampliar = document.querySelectorAll(".btampliar");
const txtequipe = document.querySelectorAll(".txtequipe");

btampliar.forEach(function(botao, index) {
    botao.addEventListener("click", function() {
        txtequipe[index].classList.toggle("txtequipemaio");
    });
});
