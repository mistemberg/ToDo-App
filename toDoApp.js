//definying Elements
const form = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');
const deleteBtnTask = document.querySelectorAll('li button');
const input = document.querySelector('#task');

//adding a loop function to make the delete button to work properly
for (let btn of deleteBtnTask) {
  btn.addEventListener('click', function(event) {
    event.target.parentElement.remove();
  });
}

//adding an event to prevent the dafault seeting on the browser, 
//and to add functionality to the form submit, adding a new task to the list once the "Add" button is clicked
form.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(input.value);
  const newTask = document.createElement('li');
  const deleteBtnNewTask = document.createElement('button');
  deleteBtnNewTask.innerText = 'delete';
  deleteBtnNewTask.addEventListener('click', function(event) {
    event.target.parentElement.remove();
  });
  newTask.innerText = input.value;
  newTask.appendChild(deleteBtnNewTask);
  input.value = '';
  taskList.appendChild(newTask);

//adding the click strikethrough event to the completed task
newTask.addEventListener('click', function(event) {
  event.target.classList.toggle('completed');
  });

//Saving my to do's in localStorage
localStorage.setItem('taskList', JSON.stringify(Array.from(taskList.children).map(child => child.innerText)))});
