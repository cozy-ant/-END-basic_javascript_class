const clock = document.querySelector("h2#clock");


function getClock() { 
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const secondes = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours} : ${minutes} : ${secondes}`;
}
getClock();
setInterval(getClock, 1000);

// setTimeout(sayHello, 5000);