const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio built with HTML, CSS, and JS.",
      link: "#"
    },
    {
      title: "To-Do App",
      description: "A JavaScript to-do list application with local storage.",
      link: "#"
    },
    {
      title: "API Dashboard",
      description: "A dashboard fetching data from external APIs.",
      link: "#"
    }
  ];
  
  const projectList = document.getElementById("project-list");
  
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(div);
  });
  