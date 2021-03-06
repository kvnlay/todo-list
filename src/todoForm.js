import { todoFactory, addTodo } from "./todoFactory";
import { renderTodos } from "./renderTodos";
import { isBoolean } from "util";

const todoForm = () => {
  const formContainer = document.querySelector('#new-todo')

  const form = document.createElement('form');
  form.setAttribute('id', 'new-todo-form');

  const status = document.createElement('input');
  status.setAttribute('type', 'text');
  status.setAttribute('value', 'true');
  status.classList.add('hidden');

  const title = document.createElement('input');
  title.setAttribute('placeholder', 'Title');
  title.setAttribute('type', 'text');
  title.classList.add('title', 'c', 'c1');

  const description = document.createElement('textarea');
  description.setAttribute('placeholder', 'Description');
  description.classList.add('description', 'c', 'c2');

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.classList.add('due-date', 'c', 'c3');

  const priority = document.createElement('select');
  priority.classList.add('priority', 'c', 'c4');

  const opt1 = document.createElement('option');
  opt1.setAttribute('value', 'low');
  opt1.innerHTML = 'low';

  const opt2 = document.createElement('option');
  opt2.setAttribute('value', 'medium');
  opt2.innerHTML = 'Medium';

  const opt3 = document.createElement('option');
  opt3.setAttribute('value', 'high');
  opt3.innerHTML = 'high';

  priority.appendChild(opt1);
  priority.appendChild(opt2);
  priority.appendChild(opt3);

  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'submit');
  submitButton.classList.add('submit-btn', 'c', 'c5')

  const projectId = document.createElement('input');
  projectId.setAttribute('type', 'hidden');
  projectId.setAttribute('id', 'project-id');



  form.appendChild(status);
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(projectId);
  form.appendChild(submitButton);
  formContainer.appendChild(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = todoFactory(
      status.value,
      title.value,
      description.value,
      dueDate.value,
      priority.value
    )

    const project = document.querySelector('#project-id');
    addTodo(todo, parseInt(project.value));
    renderTodos(parseInt(project.value));
  })
}

export { todoForm }