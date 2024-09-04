//your code here
document.getElementById('addTodoBtn').addEventListener('click', function() {
    const input = document.getElementById('newTodoInput');
    const todoText = input.value.trim(); // Remove any leading/trailing whitespace

    if (todoText !== '') {
        const todoList = document.getElementById('todoList');
        const newTodo = document.createElement('li');
        newTodo.textContent = todoText;
        todoList.appendChild(newTodo);

        input.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid todo item.');
    }
});

