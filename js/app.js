
let home = document.querySelector('.home');
let i = document.querySelector('i')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')

i.onclick = function(){
  home.classList.toggle("dark")
  body.classList.toggle("dark")
  h1.classList.toggle("h1")
  if(home.classList.contains("dark")){
    i.classList.remove('fa-solid')
    i.classList.add('fa-regular')
    h1.innerText = "Dark Theme"
  }else{
    i.classList.add('fa-solid')
    i.classList.remove('fa-regular')
    h1.innerText = "Light Theme"
  }
    
}