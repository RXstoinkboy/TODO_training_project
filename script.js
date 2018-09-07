// search bar animation triggered after click
(() => {

    let searchButton = document.getElementById('search-loop');
    let searchBar = document.querySelector('.search-bar');
    let submitButton = document.querySelector('.todo-submit-button');
    let todoList = document.querySelector('.todo-list-tasks');
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // create new task on the list
    function addTask(text) {

        // todo element
        let todo = document.createElement('div');
        todo.classList.add('todo-task');

        // todo element main body with a tasks
        let todoFirstLine = document.createElement('div');
        todoFirstLine.classList.add('todo-task-first-line');

        let todoCheckIcon = document.createElement('i');
        todoCheckIcon.innerHTML = '<i class=\"far fa-check-circle\"></i>';
        todoCheckIcon.setAttribute('id', 'checkIcon');

        let todoTask = document.createElement('div');
        todoTask.classList.add('todo-task-task');
        todoTask.innerText = text;

        let todoDelete = document.createElement('i');
        todoDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
        todoDelete.setAttribute('id', 'deleteIcon');

        // build todo element's first line
        todoFirstLine.appendChild(todoCheckIcon);
        todoFirstLine.appendChild(todoTask);
        todoFirstLine.appendChild(todoDelete);

        // todo date bar
        let date = new Date();
        let todoDate = document.createElement('div');
        todoDate.innerHTML = `${daysOfWeek[date.getDay()]}, ${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        todoDate.classList.add('todo-task-date');

        // append all parts in todo element
        todo.appendChild(todoFirstLine);
        todo.appendChild(todoDate);


        // append todo element in todoList
        todoList.appendChild(todo);
    };
    document.addEventListener('DOMContentLoaded', function() {

        // search bar activate
        searchButton.addEventListener('click', function(e) {
            searchBar.classList.toggle("active");
            console.log('wyszukiwanie włączone');
        });

        // submit new task
        submitButton.addEventListener("click", function(e) {
            e.preventDefault();
            console.log('klikam');
            let text = document.querySelector('textarea');
            if (text.value !== "") {
                addTask(text.value);
                text.value = "";
            }
        });

        // delete task
        todoList.addEventListener('click', function(e) {
            if (e.target.closest('#deleteIcon') !== null) {
                e.target.closest('.todo-task').remove();
                console.log('zadanie usunięte');
            }
        });

        // toggle check box for a task
        todoList.addEventListener('click', function(e) {
            if (e.target.className === 'far fa-check-circle') {
                e.target.closest('div').classList.toggle('taskDone');
                e.target.closest('.todo-task').classList.toggle('check');
            };

        });

        // search function
        searchBar.addEventListener('input', function() {
            let value = document.querySelector('input').value;
            let elements = todoList.querySelectorAll('.todo-task');
            [].forEach.call(elements, function(e) {
                let text = e.querySelector('.todo-task-task').innerText;
                if (text.indexOf(value) !== -1) {
                    e.style.setProperty('display', '');

                } else {
                    e.style.setProperty('display', 'none');
                }
            })

        });

    });

})();