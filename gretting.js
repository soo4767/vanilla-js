    
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting =document.querySelector(".js-greetings");

const USER_LS="currentUser",
SHOWING_ON="showing";

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    saveUser(currentValue);
    paintGreeting(currentValue);

}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit",handleSubmit);

}

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerHTML=`Hellow ${text}`;
}
function saveUser(text) {
    localStorage.setItem(USER_LS,text);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser===null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}


function init() {
    loadName();
}


init();