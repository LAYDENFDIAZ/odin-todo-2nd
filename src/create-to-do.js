// Creating an array for Todo, if needed
let toDoArray = [];

export const createToDo = (
  title,
  description,
  dueDate,
  dateCreated,
  priority,
  status
) => {
  console.log("createToDo");
  console.log(title, description, dueDate, dateCreated, priority, status);

  toDoArray.push({
    title,
    description,
    dueDate,
    dateCreated,
    priority,
    status,
  });

  console.log(toDoArray);
  return {
    title,
    description,
    dueDate,
    dateCreated,
    priority,
    status,
  };
};
