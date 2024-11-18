var menu = document.querySelector(".menu");
var sandwish = document.querySelector(".sandwish");
var mask = document.querySelector(".mask");
sandwish.addEventListener("click", function(){
    sandwish.classList.toggle("active");
    if(!menu.classList.contains("desce")){
        menu.classList.add("desce");
        menu.classList.remove("sobe");
        mask.classList.add("ativa");
        mask.classList.remove("desativa");
    }else{
        menu.classList.add("sobe");
        menu.classList.remove("desce");
        mask.classList.remove("ativa");
        mask.classList.add("desativa");
    }
})


