const toDoForm = document.querySelector(".to-do__form");
const toDoInput = document.querySelector(".to-do__input");
const toDoList = document.querySelector(".to-do__list");

let todos = [];

function setToDo(event) {
    event.preventDefault();

    todos.push(toDoInput.value);

    window.localStorage.setItem("todos", todos);
    
    printToDo();
}

function printToDo() {

    let storedtodos = window.localStorage.getItem("todos");// 여기서 문자열이 됨.

    let splittodos = storedtodos.split(",");
    // <ul> 내부에 <li> 을 추가해서 보여주는 형식.
    Array.from(splittodos).forEach(element => { 
        let item = document.createElement("li");
        let btn = document.createElement("button");
        
        btn.setAttribute("class", "to-do__remove");

        let itemContent = document.createTextNode(element);
        let btnContent = document.createTextNode("✖️");
    
        btn.appendChild(btnContent);
        item.appendChild(itemContent);
        item.appendChild(btn);

        toDoList.appendChild(item);
    });
}

function deleteToDo(event) {
    // 버튼 click이 일어나면 remove
    console.log(event.target.parentElement);
    
}

if (window.localStorage.getItem("todos") !== null){
    printToDo();

    const toDoBtn = document.querySelectorAll(".to-do__remove"); // Node"List" 반환.

    toDoBtn.forEach(element => {
        element.addEventListener("click", deleteToDo);
    });

} else {
    ;
}

toDoForm.addEventListener("submit", setToDo);