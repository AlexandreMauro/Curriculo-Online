//Slider-experiencia
let Items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active =0;
function loadShow(){
    Items.forEach(item => item.classList.remove("active"));
    Items[active].classList.add("active");

    let stt = 0;
    Items[active].style.transform = `none`;
    Items[active].style.zIndex = 1;
    Items[active].style.filter = 'none';
    Items[active].style.opacity = 1;
    

    for(var i = active + 1 ; i < Items.length; i++ )
    {
        stt++;
        Items[i].style.transform = `translateX(${160*stt}px) scale(${1 - 0.1*stt}) perspective(16px)`;
        Items[i].style.zIndex = -stt;
        Items[i].style.filter = 'blur(1px) brightness(0.8)';
        Items[i].style.opacity = 0.95;
        Items[i].style.boxShadow ="0 15px 35px rgba(0,0,0,0.4)";

    }
    stt = 0;
    for(var i = active -1 ; i >= 0; i--)
    {
        stt++;
        Items[i].style.transform = `translateX(${-160*stt}px) scale(${1 - 0.1*stt}) perspective(16px)`;
        Items[i].style.zIndex = -stt;
        Items[i].style.filter = 'blur(1px) brightness(0.8)';
        Items[i].style.opacity = 0.96;
        Items[i].style.boxShadow ="0 15px 35px rgba(0,0,0,0.4)";
    }
}
loadShow();
next.onclick = function(){
    active = active + 1  < Items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1   >= 0 ? active - 1 :active;
    loadShow();
}




//Animação Skills
function animarSkills(){

let secao = document.querySelector("#habilidades");
let posicao = secao.getBoundingClientRect().top;
let alturaTela = window.innerHeight;

if(posicao < alturaTela - 100){

document.querySelectorAll(".progresso").forEach(barra => {

barra.style.width = barra.classList.contains("html") ? "90%" :
barra.classList.contains("css") ? "85%" :
barra.classList.contains("js") ? "70%" :
barra.classList.contains("python") ? "60%" : "50%";

});

}

}

window.addEventListener("scroll", animarSkills);