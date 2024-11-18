function lnks(lnk){
    window.location = lnk;
}


async function obterCidadeAtual(la,lo){
    const cidade = document.getElementById("cidade");
    const lat = document.getElementById("la");
    const lon = document.getElementById("lo");
    var dadoscid = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${la}&lon=${lo}`).then( resposta2 => resposta2.json() );
    console.log(dadoscid.address.city);
    cidade.value=dadoscid.address.city;
    lat.value = la;
    lon.value = lo;
    
}

const getGeolocation = () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            obterCidadeAtual(position.coords.latitude,position.coords.longitude);
        })

    }
}


// function sair(){
//     setInterval(() => {
//         waitScreen.style.left="-9999px";
//       }, 3500);
      
// }

// setTimeout(sair);
// sair();


setTimeout(function(){
const waitScreen = document.querySelector(".waitScreen");
waitScreen.classList.add("out");
},3000)