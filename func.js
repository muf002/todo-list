const getTodos = function() {
    const todoJson = localStorage.getItem('notes');
    try {
        if (todoJson !== null) return JSON.parse(todoJson);
    } catch (e) {
        return [];
    }

};

const setTodos = function(todos) {
    localStorage.setItem('notes', JSON.stringify(todos));
};

const createDOM = function(todo) {
    const p = document.createElement('tr');
    p.className = 'notes';
    p.innerHTML = `<td><input type="checkbox"></td>
        <td><label>${todo.job}</label></td>
        <td><button class="btn btn-danger">${'X'}</button></td>
        `;
    p.firstChild.firstChild.checked = todo.completed;
    return p;
}

const publish = function(todos) {
    const todoJson = getTodos();
    document.querySelector('h2').innerHTML = '';
    let sum = 0;
    todos.forEach(todo => {
        if (todo.completed === false) sum++;
    });
    const para1 = document.querySelector('h2');
    para1.textContent = `you have ${sum} todos left`;

    document.querySelector('#todo-list').innerHTML = '';
    todos.forEach(todo => {
        const p = createDOM(todo);
        document.querySelector('#todo-list').appendChild(p);
    });
};

const alert = function(message) {
    let alert = document.createElement('div');
    alert.className = `alert alert-${message}`;
    alert.textContent = 'Todo successfully added';
    const con = document.querySelector('.container');
    const head = document.querySelector('.pt-4');
    con.insertBefore(alert, head);
    setTimeout(() => document.querySelector('.alert').remove(), 2000)
}

const filters = function() {
    let searchText = '';
};

const render = function(todos, filters) {
    const filtered = todos.filter(todo => {
        if (todo.job.toLowerCase().includes(filters.searchText.toLowerCase()))
            return todo.job.toLowerCase();
    });

    publish(filtered);
}