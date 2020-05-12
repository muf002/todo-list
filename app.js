let todos = getTodos();
publish(todos);

//Delete all
document.getElementById('remove-all').addEventListener('click', (e) => {
    todos.splice(0);
    setTodos(todos);
    publish(todos);
});

//filter and search
document.querySelector('#input1').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    render(todos, filters);
});

//form submission
document.querySelector('#first-form').addEventListener('submit', (e) => {
    const target = e.target;
    // e.preventDefault();
    const todo = {
        job: e.target.elements.addTodo.value,
        completed: false
    };
    alert('success');
    todos.push(todo);
    setTodos(todos);
    e.target.elements.addTodo.value = '';
    publish(todos);
});

//check-box/delete single
document.querySelector('#todo-list').addEventListener('click', (e) => {
    if (e.target.textContent === 'X') {
        const index = todos.findIndex(todo => {
            return todo.job === e.target.parentElement.previousElementSibling.lastChild.textContent;
        });
        todos.splice(index, 1);
        setTodos(todos);


    } else {
        todos.forEach(todo => {
            if (e.target.parentElement.nextElementSibling.lastChild.textContent === todo.job)
                todo.completed = !todo.completed;
        });
    };
    publish(todos);
});