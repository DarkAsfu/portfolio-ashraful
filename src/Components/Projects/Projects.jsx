import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import placeholderData from "../../Hooks/data"; // Your placeholder data

const Projects = () => {
  const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect( () => {
    setProjects(placeholderData)
  }, [])
  // const [error, setError] = useState(null); // State for error handling
  // console.log(placeholderData);
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await fetch('https://portfolio-backend-0y27.onrender.com/projects');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       setProjects(data.length > 0 ? data : placeholderData); // Use API data if available, otherwise fallback to local data
  //     } catch (error) {
  //       console.error("Error fetching projects:", error);
  //       setProjects(placeholderData); // Fallback to local data on error
  //       setError("");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  const filterProjects = (category) => {
    if (category === 'All') return projects;
    return projects.filter((project) => project.categories === category);
  };


  return (
    <div className="flex w-full flex-col max-w-screen-xl mx-auto py-10" data-aos="fade-up">
      <h1 className="text-4xl font-extrabold text-center mb-6">My Projects</h1>
      {/* {error && <div>{error}</div>} Display error message if API fails */}
      <Tabs aria-label="Project Categories" className="mb-4 px-4 md:mx-auto">
        <Tab key="All" title="All">
          <ProjectCard projects={filterProjects("All")} />
        </Tab>
        <Tab key="MERN" title="MERN">
          <ProjectCard projects={filterProjects("mern")} />
        </Tab>
        <Tab key="React" title="React">
          <ProjectCard projects={filterProjects("react")} />
        </Tab>
        <Tab key="Js Dom" title="Js Dom">
          <ProjectCard projects={filterProjects("dom")} />
        </Tab>
        <Tab key="NextJs" title="NextJs">
          <ProjectCard projects={filterProjects("nextjs")} />
        </Tab>
        {/* Uncomment or add additional tabs as needed */}
      </Tabs>
    </div>
  );
};

export default Projects;
