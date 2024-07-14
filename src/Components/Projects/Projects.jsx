import { Tabs, Tab, Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import { CardHeader, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { LuLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://ashrafulislambackend.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    // console.log(projects[0].projectImgs[0]);
    return (
        <div className="flex w-full flex-col max-w-screen-xl mx-auto py-10">
            <h1 className="text-4xl font-extrabold text-center mb-6">My Projects</h1>
            <Tabs aria-label="Options" className="mx-auto mb-4">
                <Tab key="React" title="React" >
                    <Card className="rounded-md">
                        <CardBody className="bg-[#0d948915]">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 px-2">
                                {
                                    projects.map(project => <Card isHoverable={true} key={project._id} className="py-4">
                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                            <p className="text-tiny uppercase font-bold">{project.projectTitle}</p>
                                            <small className="text-default-500">{project.projectDescription.slice(0, 100)}.. <Link href='/projectdetails' className="text-[14px]">See Details</Link></small>
                                            {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
                                        </CardHeader>
                                        <CardBody className="overflow-visible py-2">
                                            <Image
                                                isHoverable={true}
                                                isBlurred={true}
                                                alt="Card background"
                                                className="object-cover rounded-xl h-[125px] w-[400px]"
                                                src={`${project.projectImg ? project.projectImg : project.projectImgs}`}
                                                // width={270}
                                                
                                            />
                                        </CardBody>
                                        <CardFooter className="text-small justify-between ">
                                            <Link href={project.githubClient} className="text-[f8f8f8] text-[16px] gap-1">Client <FaGithub /></Link>
                                            <Link href={project.githubServer} className="text-[f8f8f8] text-[16px] gap-1">Server <FaGithub /></Link>
                                            <Link href={project.liveLink} className="text-[f8f8f8] text-[16px] gap-1">Live <LuLink /></Link>
                                        </CardFooter>
                                    </Card>)
                                }
                            </div>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="MERN Stack" title="MERN">
                    <Card>
                        <CardBody>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="Backend" title="Backend">
                    <Card>
                        <CardBody>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Projects;
