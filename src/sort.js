let taskObjArr = [];


document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById('create-task-form');
  submit.addEventListener('submit', (e) => { 
  e.preventDefault();
  const task = e.target[0].value;
  const priorityLevel = parseInt(e.target.priority.value);

  const taskObj = {task, priorityLevel};
  taskObjArr.push(taskObj);
  sortTasks();

handleToDo();
 
});
});

document.getElementById("sort-tasks").addEventListener("change", sortTasks);

function handleToDo() {
  const ul = document.getElementById("tasks")
  ul.innerHTML = "";

  taskObjArr.forEach((task) => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    li.textContent = task.task + " ";
    li.style.color = getPriorityColor(task.priorityLevel);

    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", (e) => deleteTask(e, task));
    document.getElementById('tasks').appendChild(li);
    li.appendChild(deleteBtn);
  })
}

function deleteTask(e, task) {
  taskObjArr = taskObjArr.filter(el => el.task !== task.task)
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

  function sortTasks() {
    const sortTasksSelect = document.getElementById("sort-tasks")
    if (sortTasksSelect.value === "h-l") {
      taskObjArr.sort((a,b) => a.priorityLevel - b.priorityLevel)
    } else {
      taskObjArr.sort((a,b) => b.priorityLevel - a.priorityLevel)
    }
    handleToDo();
  }