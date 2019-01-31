window.todoApp.saveData = function(tasks) {
  window.localStorage.setItem('counter', tasks.length);
  window.localStorage.setItem('tasks', tasks);
  console.log(typeof window.localStorage.getItem('tasks'));
}

// window.todoApp.unsetData = function(task) {
//   console.log(task)
// }

window.todoApp.fetchData = function() {
  const data = window.localStorage.getItem('tasks');
  if (data) {
    return data.split(',')
  }
}
