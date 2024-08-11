const lista = ["JavaScript", "HTML", "CSS"];
const body = document.querySelector("body");

function addToBody(item) {
  body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(addToBody);
