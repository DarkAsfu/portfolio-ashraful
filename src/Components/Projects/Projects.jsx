import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
// import placeholderData from "../../Hooks/data"; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling
  // console.log(placeholderData);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://portfolio-backend-0y27.onrender.com/projects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setProjects(data); // Use API data if available, otherwise fallback to local data
      } catch (error) {
        console.error("Error fetching projects:", error);
        // setProjects(placeholderData); // Fallback to local data on error
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filterProjects = (category) => {
    const filtered = category === 'All' ? projects : projects.filter((project) => project.categories === category);
    return [...filtered].reverse(); // Show latest projects first
  };


  return (
    <div className="flex w-full flex-col max-w-screen-xl mx-auto py-10" data-aos="fade-up">
      <h1 className="text-4xl font-extrabold text-center mb-6">My Projects</h1>
      
      {loading ? (
        <div className="">
          
        </div>
      ) : error ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <p className="text-red-600 text-lg mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-[#0D9488] text-white px-6 py-2 rounded-lg hover:bg-[#0a7a6b] transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Projects;
