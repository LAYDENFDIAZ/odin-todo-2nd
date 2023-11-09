import { blankProjectLoad } from "./blank-project-load";

export function initialDomManipulation() {
  const contentDiv = document.querySelector(".content");
  const header = document.createElement("h1");
  header.textContent = "To Do List";
  contentDiv.appendChild(header);

  // Dom manipulation for the default project load
  const projectsInfoDiv = document.createElement("div");
  projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
  contentDiv.appendChild(projectsInfoDiv);
}
