const loginForm = document.querySelector(".login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

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