addEventListener("load",(listener)=>{
    let peticio_http = null;
    let content = document.getElementById("ticker");
    let b_aturar = document.getElementById("aturar");
    let b_anterior = document.getElementById("anterior");
    let b_seguent  = document.getElementById("seguent");
    let index = 0;
    let array_frases = [];

    loadContent(peticio_http, content, array_frases);
    let interval = setInterval(function (){
        loadContent(peticio_http, content,array_frases);
    },5000)
    eventListeners(b_aturar, b_anterior, b_seguent, interval, peticio_http, content, array_frases);


})

function loadContent(peticio_http, content, array_frases){
    if(window.XMLHttpRequest){
        peticio_http = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        peticio_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    peticio_http.onreadystatechange = function(){
        if(peticio_http.readyState === 4){
            if(peticio_http.status === 200){
                content.innerText = peticio_http.responseText;
                array_frases.push(peticio_http.responseText);
            }
        }
    }
    peticio_http.open('GET', 'http://localhost/servidor/generarContinguts.php', true);
    peticio_http.send(null);
}
function eventListeners(b_aturar, b_anterior, b_seguent, interval, peticio_http, content, array_frases){
    b_aturar.addEventListener("click",(e)=>{
        if(interval != false){
            clearInterval(interval);
            interval = false;
            b_aturar.value= "començar";
        }else{
            interval = setInterval(function (){
                loadContent(peticio_http, content, array_frases);
            },5000)
            b_aturar.value= "aturat";
        }
        console.log(array_frases);
    })

    b_anterior.addEventListener("click", (e)=>{

    })

    b_seguent.addEventListener("click", (e)=>{

    })

}