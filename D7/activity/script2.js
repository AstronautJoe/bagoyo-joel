// Cleaned Up my first working attempt after showing it to ChatGPT
const form = document.getElementById('task-form');
const taskList = document.querySelector('div.task-list');
const task = document.querySelector('input.task-input');

form.addEventListener('submit', submitTask);

function addTask() {
  const taskRow = document.createElement('div');
  taskRow.setAttribute('class', 'task-row');

  const taskParagraph = document.createElement('p');
  taskParagraph.setAttribute('class', 'task-paragraph');
  taskParagraph.textContent = `${task.value}`;
  taskRow.appendChild(taskParagraph);

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete-button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.addEventListener('click', deleteTask);
  taskRow.appendChild(deleteButton);

  taskList.appendChild(taskRow);
}

function submitTask(event) {
  event.preventDefault();
  addTask();
  task.value = '';
}

function deleteTask() {
  this.parentNode.remove();
}

// Raw first working attempt was given to chatGPT and produced the solution below
// Cache frequently used elements
// const form = document.getElementById('task-form');
// const taskInput = document.querySelector('.task-input');
// const taskList = document.querySelector('.task-list');

// // Add event listener for form submission
// form.addEventListener('submit', handleSubmit);

// // Handle form submission
// function handleSubmit(event) {
//   event.preventDefault();

//   const taskText = taskInput.value.trim();
//   if (!taskText) return; // Avoid adding empty tasks

//   addTask(taskText);
//   taskInput.value = ''; // Clear input
// }

// // Create and append a task row
// function addTask(taskText) {
//   const taskRow = document.createElement('div');
//   taskRow.classList.add('task-row');

//   taskRow.innerHTML = `
//     <p class="task-paragraph">${taskText}</p>
//     <button class="delete-button">Delete</button>
//   `;

//   taskList.appendChild(taskRow);
// }

// // Handle delete through event delegation
// taskList.addEventListener('click', (event) => {
//   if (event.target.classList.contains('delete-button')) {
//     event.target.closest('.task-row').remove();
//   }
// });
