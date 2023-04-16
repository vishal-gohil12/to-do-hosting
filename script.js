const input = document.getElementById("input-task");
const listContainer = document.getElementById("list-task");

const addTodotask = () => {
  if (input.value == "") {
    alert("Please enter your task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("check");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showtask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showtask();
