import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { LuLink } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';

const Project = () => {
    const [loading, setLoading] = useState(true);
    const project = useLoaderData();

    if (loading) {
        return <Loading setLoading={setLoading} />;
    }

    return (
        <div className="mb-20">
            <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <div className="w-10/12 mx-auto mt-10 grid md:grid-cols-2 align-middle">
                <img className="w-full md:order-2" src={project.projectImgs} alt={project.projectTitle} />
                <div>
                    <h3 className="text-[18px] md:text-2xl font-bold mt-2 md:mt-0">{project.projectTitle}</h3>
                    <h3 className="text-[12px] md:text-[14px] mt-2">
                        <span className="font-bold text-[#0D9488]">Description: </span>{project.projectDescription}
                    </h3>
                    {project.features.length > 0 && (
                        <h2>
                            <span className="font-bold text-[#0D9488]">Features:</span>
                        </h2>
                    )}
                    <h2 className="text-[12px] md:text-[14px] mt-2">
                        {project.features.map((feature, idx) => (
                            <p key={idx}>{idx + 1}. {feature}</p>
                        ))}
                    </h2>
                    <h2 className="text-[14px] mt-2">
                        <span className="font-bold text-[#0D9488]">Technologies Used: </span><br />
                        {project.technologies.map((tech, idx) => (
                            <span className="bg-[#0d94892f] mx-1 p-1 leading-[32px] text-[#0D9488] rounded-md text-[12px] md:text-[14px]" key={idx}> {tech} </span>
                        ))}
                    </h2>
                </div>
            </div>
            <div className="w-10/12 mx-auto">
                <h3 className="text-[12px] md:text-[14px] mt-2 flex items-center">
                    <span className="font-bold text-[#0D9488]">Links: </span>
                    {project.githubClient && (
                        <Link to={project.githubClient} className="text-[f8f8f8] text-[14px] gap-1 hover:bg-[#0D9488] px-2 py-1 text-[#111111] hover:text-[#fff] rounded-full transition-all flex items-center">
                            Client <FaGithub />
                        </Link>
                    )}
                    {project.githubServer && (
                        <Link to={project.githubServer} className="text-[f8f8f8] text-[14px] gap-1 hover:bg-[#0D9488] px-2 py-1 text-[#111111] hover:text-[#fff] rounded-full transition-all flex items-center">
                            Server <FaGithub />
                        </Link>
                    )}
                    {project.liveLink && (
                        <Link to={project.liveLink} className="text-[f8f8f8] text-[14px] gap-1 hover:bg-[#0D9488] px-2 py-1 text-[#111111] hover:text-[#fff] rounded-full transition-all flex items-center">
                            Live <LuLink />
                        </Link>
                    )}
                </h3>
                {project.outcome && (
                    <h3 className="text-[12px] md:text-[14px] mt-2">
                        <span className="font-bold text-[#0D9488]">Outcome: </span>{project.outcome}
                    </h3>
                )}
                {project.tags.length > 0 && (
                    <h2 className="text-[12px] md:text-[14px] mt-2">
                        <span className="font-bold text-[#0D9488]">Tags:</span>
                        {project.tags.map((tag, idx) => (
                            <span className="bg-[#0d94892f] mx-1 p-1 leading-[32px] text-[#0D9488] rounded-md" key={idx}> #{tag} </span>
                        ))}
                    </h2>
                )}
            </div>
        </div>
    );
};

export default Project;
