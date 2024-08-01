import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import TitleAnimation from "../Shared/TitleAnimation/TitleAnimation";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://portfolio-backend-0y27.onrender.com/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const filterProjects = (category) => {
    if (category === 'All') return projects;
    return projects.filter((project) => project.categories === category);
  };

  return (
    <div className="flex w-full flex-col max-w-screen-xl mx-auto py-10">
      <h1 className="text-4xl font-extrabold text-center mb-6"><TitleAnimation text={'My Projects'}/></h1>
      <Tabs aria-label="Project Categories" className="mx-auto mb-4">
        <Tab key="All" title="All">
          <ProjectCard projects={filterProjects("All")} />
        </Tab>
        <Tab key="React" title="React">
          <ProjectCard projects={filterProjects("react")} />
        </Tab>
        <Tab key="MERN Stack" title="MERN">
          <ProjectCard projects={filterProjects("mern")} />
        </Tab>
        <Tab key="Backend" title="Backend">
          <ProjectCard projects={filterProjects("backend")} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
