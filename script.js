
function ass(){
    var closeBtn = document.getElementById('close')
    var container = document.querySelector('.assistir')
    var btn = document.querySelector('.btn-ass')

    if(btn = container.style.display = 'flex'){
    }
    else if(closeBtn = container.style.display = 'none'){

    }
}

function closeShow(){
    var closeBtn = document.getElementById('closeBtn')
    var container = document.querySelector('.assistir')
    if(closeBtn = container.style.display = 'none'){

    }
}

const burger = document.querySelector('.burger-container')
const items = document.querySelector(".header")

burger.addEventListener("click", () =>
items.classList.toggle("active"))

var closeForm = document.querySelector('.close-form')
var log = document.querySelector('.entrar')

function closeFormShow(){
    if(closeForm = log.style.display = 'none'){
    }
}


var entrarBtn = document.querySelector('.entrar-nav')

function LiberaForm(){
    if(entrarBtn = log.style.display = 'flex'){
    }
}

function avançoFnc(){
    var conta1 = document.querySelector('.conta-log')
    var conta2 = document.querySelector('.conta-log2')
    var avanço1 = document.getElementById('avanço1')
    var titulo = document.querySelector('.titulo-form')
    if(avanço1 = conta1.style.display = 'none'){
         conta2.style.display = 'flex'
         titulo.innerHTML = 'digite a senha'
     
    }
}

function avançoFnc2(){
    var conta2 = document.querySelector('.conta-log2')
    var conta3 = document.querySelector('.conta-log3')
    var avanço2 = document.getElementById('avanço2')
    var tituloLog = document.querySelector('.titulo-log')
    if(avanço2 = conta3.style.display = 'flex'){
        conta2.style.display = 'none'
        tituloLog.style.display = 'none'
    }
}

function loader(){
    document.querySelector('.loader-mf').classList.add('fade-out')
}

function fadeOut(){
    setInterval(loader,4000)
}
window.onload = fadeOut
window.style.filter = `blur{${100}px}`