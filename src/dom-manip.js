import { blankProjectLoad } from "./blank-project-load.js";

// Simplified DOM manipulation using modern JavaScript features

export const displayTheForm = () => {
  document.getElementById("add-todo-form").style.display = "";
};

export const addItemToCheckList = () => {
  const addItem = document.getElementById("add-to-checklist").value;

  if (addItem !== "") {
    const ul = document.querySelector(".todo-ul");
    const li = document.createElement("li");
    li.className = "form-li";
    li.textContent = addItem;
    const span = document.createElement("span");
    span.className = "remove-checklist-item";
    span.textContent = "\u00D7";
    li.appendChild(span);
    ul.appendChild(li);
    document.getElementById("add-to-checklist").value = "";

    document.querySelectorAll(".form-li").forEach((checkListItem) => {
      checkListItem.addEventListener("click", () => checkListItem.remove());
    });
  }
};

export const clearForm = () => {
  document.querySelectorAll(".form-li").forEach((li) => li.remove());
  document.getElementById("add-todo").reset();
};

export const displayToDo = () => {
  const { Title, Description, DueDate, Priority, CheckList } = localStorage;
  if (!Title || !Description || !DueDate || !Priority) return;

  document.querySelectorAll(".card").forEach((div) => div.remove());

  const card = document.createElement("div");
  card.classList.add("card");
  document.querySelector(".projects").appendChild(card);

  const deleteToDoButton = document.createElement("button");
  deleteToDoButton.classList.add("remove-todo-button");
  deleteToDoButton.textContent = "Delete/Complete ToDo";
  card.appendChild(deleteToDoButton);
  deleteToDoButton.addEventListener("click", () => {
    card.remove();
    localStorage.clear();
  });

  const displayArray = { Title, Description, DueDate, Priority };
  Object.entries(displayArray).forEach(([key, value]) => {
    const para = document.createElement("p");
    para.textContent = `${key}: ${value}`;
    card.appendChild(para);
  });

  const CheckListLabel = document.createElement("p");
  CheckListLabel.textContent = "CheckList Items (Click item when completed):";
  const ul = document.createElement("ul");
  CheckListLabel.classList.add("check-list-label");
  card.appendChild(ul);
  ul.appendChild(CheckListLabel);

  if (CheckList) {
    CheckList.split(",").forEach((item) => {
      const li = document.createElement("li");
      li.className = "display-li";
      li.textContent = item;
      li.addEventListener("click", () => {
        li.classList.toggle("done");
        localStorage.setItem(
          li.textContent,
          li.classList.contains("done") ? "true" : "false"
        );
      });
      ul.appendChild(li);
    });
  }

  window.onload = () => {
    document.querySelectorAll(".display-li").forEach((li) => {
      if (localStorage.getItem(li.textContent) === "true") {
        liNode.classList.add("done");
      }
    });
  };
};
