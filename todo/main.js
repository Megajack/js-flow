const app = {
  tasks: [],
  addTask: function(incomeTask) {
    app.tasks.push(incomeTask);
    app.renderTasks();
  },
  handleClick: function(e) {
    e.preventDefault();
    const val = document.querySelector('#enter').value;
    app.addTask(val);

    return false;
  },
  init: function() {
    document.querySelector('#submit').addEventListener('click', app.handleClick); // TODO: check why not 'this.'
  },
  renderTasks: function() {
    const list = document.querySelector('#tasks');
    let tasks = '';

    for (let task of app.tasks) {
      tasks += `<li class="task">${task}</li>`;
    }

    list.innerHTML = tasks;
  }
}

document.addEventListener("DOMContentLoaded", app.init);

