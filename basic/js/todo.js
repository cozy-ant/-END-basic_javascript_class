const form = document.querySelector(".input-wrap");
const input = document.querySelector(".input");
const lists = document.querySelector(".list-wrap");

let arr = [];
const KEY = "list";

function deleteTodo(e) {
  const data = JSON.parse(localStorage.getItem(KEY))
  const list = e.target.parentElement;
  arr = data.filter(v => v.id !== parseInt(list.id));
  list.remove();
  saveLocal();
}

function addTodo(props) {
  const { data, id } = props
  const li = document.createElement("li");
  li.id = id;
  const span = document.createElement("span");
  span.innerText = data;

  const button = document.createElement("button");
  button.innerText = "X"

  li.appendChild(span);
  li.appendChild(button);
  lists.appendChild(li);

  button.addEventListener("click", deleteTodo)
}

const item = JSON.parse(localStorage.getItem(KEY));
if (item) {
  item.forEach(v => {
    arr.push(v)
    addTodo(v);
  })
}

function handleSubmit(e) {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    data: input.value
  };
  arr.push(todo);
  input.value = '';
  addTodo(todo);
  saveLocal();
}

function saveLocal() {
  localStorage.setItem(KEY, JSON.stringify(arr))
}

form.addEventListener("submit", handleSubmit)