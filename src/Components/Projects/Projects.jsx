import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import data from "../../Hooks/data"; // Assuming this is your placeholder data

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://portfolio-backend-0y27.onrender.com/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProjects();
  }, []);

  const filterProjects = (category) => {
    if (category === 'All') return projects ? projects : data;
    return projects ? projects.filter((project) => project.categories === category) : data.filter((project) => project.categories === category);
  };

  return (
    <div className="flex w-full flex-col max-w-screen-xl mx-auto py-10" data-aos="fade-up">
      <h1 className="text-4xl font-extrabold text-center mb-6">My Projects</h1>
      <Tabs aria-label="Project Categories" className="mb-4 px-4 md:mx-auto">
        <Tab key="All" title="All">
          <ProjectCard projects={filterProjects("All")} /> {/* Use default data if loading */}
        </Tab>
        <Tab key="MERN Stack" title="MERN">
          <ProjectCard projects={filterProjects("mern")} /> {/* Use default data if loading */}
        </Tab>
        <Tab key="React" title="React">
          <ProjectCard projects={filterProjects("react")} /> {/* Use default data if loading */}
        </Tab>
        <Tab key="Js Dom" title="Js Dom">
          <ProjectCard projects={filterProjects("dom")} /> {/* Use default data if loading */}
        </Tab>
        <Tab key="Next js" title="NextJs">
          <ProjectCard projects={filterProjects("nextjs")} /> {/* Use default data if loading */}
        </Tab>
        {/* Uncomment or add additional tabs as needed */}
      </Tabs>
    </div>
  );
};

export default Projects;
