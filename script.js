const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const prioritySelect = document.getElementById('priority');

function createTask(taskText, priority) {
  const li = document.createElement('li');
  li.classList.add(priority); // Add priority class for color

  const span = document.createElement('span');
  span.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.classList.add('task-btn', 'complete-btn');
  completeBtn.addEventListener('click', () => li.classList.toggle('completed'));

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add('task-btn', 'delete-btn');
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

addBtn.addEventListener('click', () => {
  const task = input.value.trim();
  const priority = prioritySelect.value;
  if (task) {
    createTask(task, priority);
    input.value = '';
    prioritySelect.value = 'low';
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addBtn.click();
});
