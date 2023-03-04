const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const button = document.querySelector('#submit')
const input = document.querySelector('#email')
const error = document.querySelector('#error')
const pattern = document.querySelector('#pattern')

button.addEventListener('click', ()=>{
        if(re.test(input.value)){
        error.style.display = 'none';
        input.style.outline = '2px solid hsl(120, 80%, 39%)';
    }else{
        error.style.display = 'block';
        input.style.outline = '2px solid hsla(0, 100%, 63%, .7)';
    }
})

window.addEventListener('resize',()=>{
    if(window.innerWidth >= 768){
        pattern.setAttribute('src','./images/bg-curvy-desktop.svg')
    }else{
        pattern.setAttribute('src','./images/bg-curvy-mobile.svg')
    }
})