import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    // console.log(projects[0].projectImgs[0]);
    return (
        <div className="flex w-full flex-col max-w-screen-xl mx-auto py-10">
            <h1 className="text-4xl font-extrabold text-center mb-6">My Projects</h1>
            <Tabs aria-label="Options" className="mx-auto mb-4">
                <Tab key="React" title="React" >
                    <ProjectCard projects={projects} />
                </Tab>
                <Tab key="MERN Stack" title="MERN">
                    <ProjectCard projects={projects} />
                </Tab>
                <Tab key="Backend" title="Backend">
                    <ProjectCard projects={projects} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Projects;
