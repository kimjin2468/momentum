const inputEl = document.querySelector("#login-form input")
const todoEl = document.querySelector("#todo-form input")

function placeholderHandler(){
  if(inputEl.placeholder !== "")
    inputEl.removeAttribute("placeholder")  
  else if(inputEl.placeholder === ""){
    inputEl.placeholder = "What is your name?";
    inputEl.value='';
  }
}

function todoHandler(){
  if(todoEl.placeholder !== "")
    todoEl.removeAttribute("placeholder")  
  else if(todoEl.placeholder === ""){
    todoEl.placeholder = "What is your main focus for today?"
    todoEl.value='';
  }
}



inputEl.addEventListener("focus" , placeholderHandler);
inputEl.addEventListener("blur", placeholderHandler);

todoEl.addEventListener("focus" , todoHandler);
todoEl.addEventListener("blur", todoHandler);