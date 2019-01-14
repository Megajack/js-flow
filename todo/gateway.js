window.todoApp.saveData = function(tasks) {
    window.localStorage.setItem('counter', tasks.length);
    window.localStorage.setItem('tasks', tasks);
    console.log(typeof window.localStorage.getItem('tasks'));
}

window.todoApp.unsetData = function(task) {
    console.log(task)
}

window.todoApp.fetchData = function() {
    return window.localStorage.getItem('tasks');
}