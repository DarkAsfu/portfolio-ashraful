import { Card, CardBody, CardFooter, CardHeader, Image, Link } from '@nextui-org/react';
import { FaGithub } from 'react-icons/fa6';
import { LuLink } from 'react-icons/lu';

const ProjectCard = (params) => {
    const projects = params.projects;
    return (
        // <></>
        <Card className="rounded-md" id='projects'>
            <CardBody className="bg-[#0d948915]">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 px-2">
                    {
                        projects.length == 0 ? <p>No project added yet</p> :
                            projects.length > 0 ? projects.map(project => <Card isHoverable={true} key={project._id} className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">{project.projectTitle}</p>
                                    <small className="text-default-500">{project.projectDescription.slice(0, 100)}.. <Link href={`project/${project.projectTitle}`} className="text-[14px]">See Details</Link></small>
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
                                <CardFooter className="text-small justify-between">
                                    {
                                        project.githubClient &&
                                        <Link href={project.githubClient} className="text-[f8f8f8] text-[16px] gap-1 hover:bg-[#0D9488] px-2 py-1 text-[#0D9488] hover:text-[#fff] rounded-full transition-all">Client <FaGithub /></Link>
                                    }
                                    {
                                        project.githubServer &&
                                        <Link href={project.githubServer} className="text-[f8f8f8] text-[16px] gap-1 hover:bg-[#0D9488] px-2 py-1 text-[#0D9488] hover:text-[#fff] rounded-full transition-all">Server <FaGithub /></Link>
                                    }
                                    {
                                        project.liveLink &&
                                        <Link href={project.liveLink} className="text-[f8f8f8] text-[16px] gap-1 hover:bg-[#0D9488] px-2 py-1 text-[#0D9488] hover:text-[#fff] rounded-full transition-all">Live <LuLink /></Link>
                                    }
                                </CardFooter>
                            </Card>) : <img src="https://i.ibb.co/qJzzZWj/j-KEc-VPZFk-2.gif" alt="loading" />
                    }
                </div>
            </CardBody>
        </Card>
    );
};

export default ProjectCard;