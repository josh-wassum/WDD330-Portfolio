import ls from './ls.js';
import utilities from './utilities.js';

let todoList = null;

export default class Todo{
    constructor(elementId, key){
        this.parentElement = document.getElementById(elementId);
        this.key = key;
    };

    addToDo() {
        const todoItem = utilities.qs("#new-todo").value;
        saveToDo(this.key, todoItem);
    };

    listTodos() {
        this.parentElement.innerHTML = "";
        todoList = getToDos(this.key);
        renderToDoList(todoList, this.parentElement);
    };
    static completeToDo() {
        let elements = [...document.querySelectorAll(".checkbox")]
        elements.forEach(item => {
            if (item.children.namedItem("checkbox").checked === true){
                item.setAttribute("class", "checkbox checked")
            } else{
                item.setAttribute("class", "checkbox")
            }
        })
    }

    deleteElement(deleteId) {
        const items = ls.readFromLS(this.key);
        let removed = items.filter(function(value){ 
            return value.id != deleteId;
        });
        console.log(removed);
        ls.writeToLS(this.key, JSON.stringify(removed));
    }
}

function saveToDo(key, text) {
    const todoItemObject = {
        id: Date.now(),
        text : text,
        completed : false
    };
    if(todoList === null) {
        todoList = [todoItemObject]
    } else{
        todoList.push(todoItemObject);
    }
    ls.writeToLS(key, JSON.stringify(todoList));
    utilities.qs("#new-todo").value = '';
}

function getToDos(key){
    if(todoList === null){
        let new_todo = ls.readFromLS(key);
        return new_todo;
    }
}


function renderToDoList(todoList, parent) {
    todoList.forEach(item => {
        parent.appendChild(renderOneItem(item));
    });
}

function renderOneItem(item){
    const li = document.createElement("li");
    const delBtn = document.createElement("button")
    const checkbox = document.createElement("input")
    const label = document.createElement("label")

    checkbox.setAttribute("data_id", item.id);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    li.setAttribute("class", "checkbox")
    label.setAttribute("for", "checkbox");
    label.innerText = item.text;
    delBtn.setAttribute("id", item.id);
    delBtn.innerText = "X";
    delBtn.setAttribute('class', 'delete')

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(delBtn);

    checkbox.addEventListener("click", () => {
            Todo.completeToDo();
        })
    
    return li
}