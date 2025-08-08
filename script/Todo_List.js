const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    
    const hmtl = `
      <div class="todo-box">${name}</div>
      <div class="todo-box">${dueDate}</div>
      <button onclick ="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;

    todoListHTML += hmtl
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector
    ('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector
    ('.js-due-date-input');
  const dueDate = dateInputElement.value

  if(name === '' || dueDate === '') return;

  todoList.push({
    name,
    dueDate
  }
  );


  inputElement.value = '';

  renderTodoList();

  saveToStrage();
}

function saveToStrage() {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}