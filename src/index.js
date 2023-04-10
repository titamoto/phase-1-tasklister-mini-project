document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById('create-task-form');
  submit.addEventListener('submit', (e) => { 
  e.preventDefault();
  handleToDo(e.target['new-task-description'].value);
});
});

function handleToDo(todo) {
  const li = document.createElement('li');
  li.textContent = todo;
  document.getElementById('tasks').appendChild(li);
}