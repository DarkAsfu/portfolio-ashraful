import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
const Projects = () => {
    return (
        <div className="flex w-full flex-col max-w-screen-xl mx-auto py-10">
            <h1 className="text-4xl font-extrabold text-center mb-6">My Projects</h1>
            <Tabs aria-label="Options" className="mx-auto mb-4">
                <Tab key="React" title="React" >
                    <Card className="rounded-md">
                        <CardBody className="bg-[#0d948915]">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 px-2">
                            <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
                                <span className="absolute inset-0 border-2 border-dashed border-[#0d948945]"></span>

                                <div
                                    className="relative flex h-full transform items-end border-2 border-[#0d948945] bg-[#0d948915] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                                >
                                    <div
                                        className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-10 sm:size-12"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
                                    </div>

                                    <div
                                        className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                                    >
                                        <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

                                        <p className="mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                                            omnis atque culpa repellendus.
                                        </p>

                                        <p className="mt-8 font-bold">Read more</p>
                                    </div>
                                </div>
                            </a>
                            
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
