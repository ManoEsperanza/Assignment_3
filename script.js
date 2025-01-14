document.addEventListener("DOMContentLoaded", function() {
    // all the code heredocument.addEventListener('DOMContentLoaded', function() {
}

  function main() {  
    let todos = []; 
    const addTodoButton = document.querySelector("#addTodo");
	 addTodoButton.addEventListener('click'), function() {
      const taskNameInput = document.querySelector("#taskName")
      const taskName = taskNameInput.value;

      const taskUrgencySelect = document.querySelector("#taskUrgency");
      const taskUrgency = taskUrgencySelect.value;
     }

      if (taskName) {
        addTodo(todos, taskName, taskUrgency);
        renderTodos(todos);
        taskNameInput.value =
    addTodo(todos, "Walk the dog", 5);
    addTodo(todos, "Clean the room", 3);
    addTodo(todos, "Pay the bill", 2); 
  }

  main();
});
  
function renderTodos(todos) {
    const todoList = document.querySelector("#todoList");
    todoList.innerHTML = '';
    for (let todo of todos) { 
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
                ${todo.name} <span class="badge bg-primary">${todo.urgency}</span>
                   <button class="btn edit-btn btn-success btn-sm">Edit</button> 
                    <button class="btn delete-btn btn-danger btn-sm">Delete</button>             
            `;
      todoList.appendChild(li);
      li.querySelector(".edit-btn").addEventListener('click', function() {
        alert("Editing todo :" + todo.name)
        li.querySelector(".edit-btn").addEventListener('click', function() {
            const newName = prompt("Enter the new task name: ", todo.name);
            const newUrgency = prompt("Enter the new urgency:", todo.urgency);
            modifyTask(todos, todo.id, newName, newUrgency);
            renderTodos(todos);
      })
    }
  }
    li.querySelector(".delete-btn").addEventListener('click', function() {
    const confirmation = confirm("Do you want to delete the task: " + todo.name + "?");
    if (confirmation) {
        deleteTask(todos, todo.id);
        renderTodos(todos);
    }
});