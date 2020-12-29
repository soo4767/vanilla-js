
const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput=toDoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos';

let toDos = [];



function deleteToDo(event) {
    const btn = event.target;
    const li=btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo) {
        return todo.id !== parseInt(li.id);   
    });
    console.log(cleanToDos);
    toDos=cleanToDos;
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span=document.createElement("span");
    const newId=toDos.length + 1;

    delBtn.addEventListener("click",deleteToDo);

    delBtn.innerText="❌";
    span.innerHTML=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const currentToDoValue=toDoInput.value;
    saveToDos(currentToDoValue);
    paintToDo(currentToDoValue);
    toDoInput.value="";
}

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function loadToDos() {
    const loadedToDos=localStorage.getItem(TODOS_LS);

    if(loadedToDos!==null){
        const parsedToDos=JSON.parse(loadedToDos);
        parsedToDos.forEach(function(todo){
            paintToDo(todo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleToDoSubmit);
}


init();
