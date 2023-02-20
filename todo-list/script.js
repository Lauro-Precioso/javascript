// Select elements from the DOM
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

let todos = [];

// Create a function to render the todo list
function renderTodoList() {
  // Clear the todo list
  todoList.innerHTML = '';

  // Loop through the todos array and create a new list item for each todo
  todos.forEach((todo, index) => {
    // Create a new list item
    const todoItem = document.createElement('li');

    // Create a span element to display the todo text
    const todoText = document.createElement('span');
    todoText.innerText = todo.text;
    todoText.className = 'todo-text';

    // Create an input element to edit the todo text
    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.value = todo.text;
    todoInput.className = 'edit-todo-input';

    // Create a button element to edit the todo
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'edit-todo-button';

    // Create a button element to save the edited todo text
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.className = 'save-todo-button';

    // Create a button element to cancel the edited todo text
    const cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.className = 'cancel-todo-button';

    // Create a button element to delete the todo
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-todo-button';

    // Add event listeners to the elements
    todoText.addEventListener('click', () => {
      todoItem.classList.add('editing');
      todoInput.focus();
    });

    editButton.addEventListener('click', function () {
      // seleciona o elemento de texto e o campo de edição da tarefa atual
      const todoText = this.parentNode.querySelector('.todo-text');
      const editTodoInput = this.parentNode.querySelector('.edit-todo-input');
      const saveTodoButton = this.parentNode.querySelector('.save-todo-button');
      const cancelTodoButton = this.parentNode.querySelector('.cancel-todo-button');
    
      // exibe o campo de edição e oculta o elemento de texto
      editTodoInput.style.display = 'inline-block';
      todoText.style.display = 'none';
      saveTodoButton.style.display = 'inline-block';
      cancelTodoButton.style.display = 'inline-block';
    });

    saveButton.addEventListener('click', () => {
      const newTodoText = todoInput.value.trim();

      if (newTodoText) {
        todos[index].text = newTodoText;
        renderTodoList();
      }
    });

    cancelButton.addEventListener('click', function () {
      // seleciona o elemento de texto e o campo de edição da tarefa atual
      const todoText = this.parentNode.querySelector('.todo-text');
      const editTodoInput = this.parentNode.querySelector('.edit-todo-input');
      const saveTodoButton = this.parentNode.querySelector('.save-todo-button');
      const cancelTodoButton = this.parentNode.querySelector('.cancel-todo-button');
  
      // restaura o texto original da tarefa e oculta o campo de edição
      editTodoInput.value = todoText.innerText;
      editTodoInput.style.display = 'none';
      saveTodoButton.style.display = 'none';
      cancelTodoButton.style.display = 'none';
      todoText.style.display = 'inline-block';
    });

    deleteButton.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodoList();
    });

    // Add the elements to the list item
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoInput);
    todoItem.appendChild(editButton);
    todoItem.appendChild(saveButton);
    todoItem.appendChild(cancelButton);
    todoItem.appendChild(deleteButton);

    // Add the list item to the todo list
    todoList.appendChild(todoItem);
  });
}

// Create a function to add a new todo
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText) {
    todos.push({ text: todoText });
    renderTodoList();
    todoInput.value = '';
  }
}

// Add event listeners to the elements
addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

// Render the initial todo list
renderTodoList();