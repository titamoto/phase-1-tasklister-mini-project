document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById('create-task-form');
  submit.addEventListener('submit', (e) => { 
  e.preventDefault();
  const priorityLevel = parseInt(e.target.priority.value);
  handleToDo(e.target['new-task-description'].value, priorityLevel);
 
});
});

function handleToDo(todo, priorityLevel) {
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  li.textContent = todo + " ";
  li.style.color = getPriorityColor(priorityLevel);

  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteTask);

  document.getElementById('tasks').appendChild(li);
  li.appendChild(deleteBtn);

}

function deleteTask(e) {
  e.target.parentNode.remove();
}

function getPriorityColor(priorityLevel) {
  if (priorityLevel === 1) {
    return "red";
  } else if (priorityLevel === 2) {
    return "blue"
  }
    else { return "green" }
  }
