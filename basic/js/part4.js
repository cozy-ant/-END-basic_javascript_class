// loginButton.addEventListener("click", () => {
//   const userName = loginInput.value;
//   if (!userName) {
//     console.log('write your name')
//   }else{
//     console.log("hello ", userName)
//   }
  
// })
// form 내부의 input은 엔터 등의 행위로 submit된다.
// loginButton.addEventListener("click", () => {
//   const userName = loginInput.value;
//   console.log(userName)
// })
//preventDefault 로 새로고침 막기 a태그에서도 사용
// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // const userName = loginInput.value;
//   console.log(loginInput.value);
// })
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const title = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

localStorage.clear()

const showText = (userName) => {
  title.textContent = `Hello ${userName}`;
  loginForm.classList.add(HIDDEN_CLASSNAME)  
}

const onLoginSubmit = (event) => {
  event.preventDefault();
  const userName = loginInput.value;

  localStorage.setItem(USERNAME_KEY, userName);
  
  title.classList.remove(HIDDEN_CLASSNAME)

  showText(userName);
  
  console.log(userName)
};

const getStorageKey = localStorage.getItem(USERNAME_KEY);

if (getStorageKey === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  showText(getStorageKey);
}
