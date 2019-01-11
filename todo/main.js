const app = {
  tasks: [],
  addTask: function(incomeTask) {
    if (app.tasks.indexOf(incomeTask) < 0) {
      app.tasks.push(incomeTask);
      app.renderTasks();
    }
  },
  deleteTask: function(task) {
    let indOf = app.tasks.indexOf(task);
    if (indOf >= 0) {
      app.tasks.splice(indOf, 1);
      app.renderTasks();
    }
  },
  handleClick: function(e) {
    e.preventDefault();
    const val = document.querySelector('#enter').value;

    if (val.length) {
      app.addTask(val);
    }

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

    list.querySelector('li').addEventListener('click', function(arg) {
      var task = arg.target.innerText;
      app.deleteTask(task);
    });
  }
}

document.addEventListener("DOMContentLoaded", app.init);
