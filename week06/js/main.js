import Todo from './Todos.js';


const todos = new Todo('todo-wrapper', 'task');


window.addEventListener("load", () => {
    todos.listTodos();

    const delBtns = document.querySelectorAll(".delete");
    delBtns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const deleteId = event.target.id;
            todos.deleteElement(deleteId);
            todos.listTodos();
    });
});
});

document.querySelector("#new-item").addEventListener("click", () => {
    todos.addToDo()
});


