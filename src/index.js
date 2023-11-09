import { createToDo } from "./create-to-do.js";
import { blankProjectLoad } from "./blank-project-load.js";
import { initialDomManipulation } from "./initial-dom-manipulation.js";

blankProjectLoad();

initialDomManipulation();

const myToDo = createToDo(
  "My To Do",
  "This is my to do list",
  "2021-01-01",
  "2021-01-01",
  "High",
  "In Progress"
);

const myToDo2 = createToDo(
  "My To Do 2",
  "This is my to do list 2",
  "2021-01-01",
  "2021-01-01",
  "High",
  "In Progress"
);

console.log(myToDo);
console.log(myToDo2);
