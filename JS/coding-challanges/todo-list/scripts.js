const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-button');
const toDoList = document.getElementById('todo-list');

addTodoButton.setAttribute('disabled', true);

addTodoButton.addEventListener('click', () => {
  const newTodo = document.createElement('li')

  const removeButton = document.createElement('button');
  removeButton.className = 'delete-button';
  removeButton.innerText = 'X';
  
  removeButton.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  })

  const toDoHeading = document.createElement('h2');
  toDoHeading.textContent = todoInput.value;

  newTodo.appendChild(toDoHeading);
  newTodo.appendChild(removeButton);

  toDoList.appendChild(newTodo);
  todoInput.value = '';
  addTodoButton.setAttribute('disabled', true);
})

todoInput.addEventListener('input', function (event) {
  addTodoButton.disabled = event.target.value.length === 0;
})