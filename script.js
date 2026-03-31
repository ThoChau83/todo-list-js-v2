const inputText = document.getElementById("input-text");
const buttonText = document.getElementById("button-text");
const todoList = document.getElementById("todo-list");

loadData();
buttonText.addEventListener("click", () => {
  const textvalue = inputText.value;
  if (textvalue !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="status-icon"></span>
        <span class="task-content">${textvalue}</span>
        <button class="delete-btn">Xóa</button>
    `;
    todoList.appendChild(li);
    inputText.value = "";
    saveData();
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("status-icon")) {
    e.target.classList.toggle("completed");
    saveData();
  }
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}
function loadData() {
  const saveddata = localStorage.getItem("data");
  todoList.innerHTML = saveddata;
}
