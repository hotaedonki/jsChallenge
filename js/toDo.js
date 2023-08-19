const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let todos = [];
//localStorage에는 문자열만 저장되기 때문에 json~을 통해서 배열처럼 생긴 문자열로 저장
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
    const potato = event.target.parentElement; // 클릭 시 해당 요소의 부모 태그 값을 가져옴
    potato.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(potato.id)); // ID값이 string이므로 parseInt해줘야 됨
    saveTodos(); // filter후의 값을 한 번 더 저장
}

function showTodo(newTodo) {
    const potato = document.createElement("li");
    potato.id = newTodo.id; // id값도 배정해줌
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    //append는 꼭 마지막에
    potato.appendChild(span);
    potato.appendChild(button);
    toDoList.appendChild(potato);
}

function TodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //newTodoObj를 todos에 배열형식으로 저장
    todos.push(newTodoObj);
    showTodo(newTodoObj);
    saveTodos();
}


function toggleToDo() {
    const todoContainer = document.getElementById("todo-container");
    if(todoContainer.style.display === "none") {
        todoContainer.style.display = "block";
    } else {
        todoContainer.style.display = "none";
    }
}

toDoForm.addEventListener("submit", TodoSubmit);

const savedTodos = localStorage.getItem("todos");

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(showTodo); 
}
