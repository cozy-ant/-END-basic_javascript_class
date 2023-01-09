const form = document.querySelector(".input-wrap");
const input = document.querySelector(".input");
const list = document.querySelector(".list-wrap");

function deleteTodo(e) {
  const list = e.target.parentElement;
  list.remove();
}

function addTodo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo;
  const button = document.createElement("button");
  button.innerText = "X"

  button.addEventListener("click", deleteTodo)
  li.appendChild(span);
  li.appendChild(button);
  
  list.appendChild(li);
}

function handleSubmit(e) {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  addTodo(todo);
}

form.addEventListener("submit", handleSubmit)

