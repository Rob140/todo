const inputField = document.querySelector(".todo-input");
const todoButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", (e) => {
  const inputvalue = inputField.value;
  const li = document.createElement("li");
  li.textContent = inputvalue;
  todoList.append(li);
  inputField.value = "";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", (e) => {
    li.remove();
  });
});
