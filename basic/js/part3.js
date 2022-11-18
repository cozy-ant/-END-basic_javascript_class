//3.0 document 객체.
//----------------------------------
//3.1 document.getElementById()
//----------------------------------
//3.2 querySelector && querySelectorAll
// id, class 네임을 각각 들고오는 것 보다 querySelector를 사용하는게 더 효율적이고 편리
// CSS 셀렉터
//----------------------------------
//3.3 ~ 3.5 addEventListener
// const title = document.querySelector("h1");
// title.addEventListener("click", () =>  console.log("Click title") );
// title.addEventListener("mouseenter", () =>  console.log("ClickEnter title") );
// title.addEventListener("mouseleave", () =>  console.log("onMouseLeave title") );
// console.log(title);
// title.onclick = () => {
//   title.style.color = "blue";
//   console.log('Click title');
// }
// title.addEventListener("click", () => { title.style.fontSize = "18px" });
// window.addEventListener("resize", () => { document.body.style.backgroundColor = "tomato" })
// window.addEventListener("copy", () => { alert("Don't copy")});
// window.addEventListener("online", () => { alert("online") });
// window.addEventListener("offline", () => { alert("offline") });
//----------------------------------
// 3.6