const tel1 = document.getElementById("tel1");
pop = 1;

function opna(){
    if(pop % 2 == 1){
        tel1.classList.remove("telasubir");
        tel1.classList.add("telasubiron");
    }
    else{
        tel1.classList.remove("telasubiron")
        tel1.classList.add("telasubir")
    }
    pop++;
}



function abrirSiteComDelay() {
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000); 
}

function mstoque(){
    var msctoque = document.getElementById("msctoque");

    msctoque.play();
}