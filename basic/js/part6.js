const quotes = [
  {
    title: "HELLO VERSION 1",
    author: "TEST VERSION 1",
  },
  {
    title: "HELLO VERSION 2",
    author: "TEST VERSION 2",
  },
  {
    title: "HELLO VERSION 3",
    author: "TEST VERSION 3",
  },
  {
    title: "HELLO VERSION 4",
    author: "TEST VERSION 4",
  },
  {
    title: "HELLO VERSION 5",
    author: "TEST VERSION 5",
  },
  {
    title: "HELLO VERSION 6",
    author: "TEST VERSION 6",
  },
  {
    title: "HELLO VERSION 7",
    author: "TEST VERSION 7",
  },
  {
    title: "HELLO VERSION 8",
    author: "TEST VERSION 8",
  },
  {
    title: "HELLO VERSION 9",
    author: "TEST VERSION 9",
  },
  {
    title: "HELLO VERSION 10",
    author: "TEST VERSION 10",
  },
]
const images = [
  "0.jpg", "1.jpg"
]
const quoteTitle = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor((Math.random() * quotes.length))];
const todayBackground = images[Math.floor((Math.random() * images.length))];

quoteTitle.innerHTML = todayQuotes.title;
author.innerHTML = todayQuotes.author;

const image = document.createElement('img');

image.src = `./img/${todayBackground}`;
image.style= "width:200px"
document.body.appendChild(image);