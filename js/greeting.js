const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const h1El = document.querySelector('#greeting')
const userNameFromLocal = localStorage.getItem("username");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = 'username'

function paintGreetings(){
  const getName = localStorage.getItem("username")
  h1El.innerText = `Hello ${getName}`
  h1El.classList.remove(HIDDEN_CLASSNAME)
}

function onLoginSubmit(event){
  event.preventDefault();    
  localStorage.setItem(USERNAME_KEY , loginInput.value)
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings() 
}


if(userNameFromLocal === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);  
  loginForm.addEventListener('submit' , onLoginSubmit)
}
else{
  paintGreetings()
}






