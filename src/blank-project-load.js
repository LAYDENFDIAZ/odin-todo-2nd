// Factory function to create a new project array list

export const blankProjectLoad = () => {
  console.log("blankProjectLoad");
  let projectArray = [];

  console.log(projectArray);
  let projectTitle = "Default Project";
  projectArray.push({ projectTitle });
  console.log(projectArray);
  return { projectArray, projectTitle };
};
