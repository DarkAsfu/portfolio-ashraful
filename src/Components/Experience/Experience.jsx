import { FaBriefcase, FaAward, FaArrowRight } from 'react-icons/fa6';

const Experience = () => {
    const experiences = [
        {
            company: "SAS Corporation BD",
            position: "Frontend Developer",
            duration: "August 2024 - Present",
            description: [
                "Led frontend development efforts using React.js and Next.js to build dynamic, responsive web applications.",
                "Worked closely with design and backend teams to integrate new features and ensure smooth user experiences.",
                "Maintained and improved existing projects while adhering to company coding standards and best practices.",
                "Enhanced project deployment and workflow using tools like Vercel and Netlify."
            ],
            keyProjects: [
                { name: "Turag Waterfront Resort", url: "https://turagwaterfrontresort.com" },
                { name: "Traveloara", url: "https://traveloara.com" },
                { name: "SAS Corporation BD", url: "https://sascorporationbd.com" },
                { name: "Star Ad Agency", url: "#" },
                { name: "Fuel Station Management", url: "#" },
                { name: "Viptap.club", url: "https://viptap.club" }
            ]
        },
        {
            company: "Talentship Global Advisory Forum",
            position: "Frontend Developer Intern",
            duration: "August 2023 - October 2023",
            description: [
                "Front-End Development: Contributed to website development using ReactJS, HTML, CSS, and Tailwind.",
                "Skills Acquired: Proficiency in ReactJS, and ExpressJs.",
                "Achievements: Recognized for outstanding contributions, effective teamwork, and timely project completion.",
                "Project Highlights: Developed key sections for the 6Sparks LLC website, Talentship Global Advisory Forum."
            ],
            keyProjects: [
                { name: "6Sparks LLC", url: "#" },
                { name: "Talentship Global Advisory Forum", url: "#" }
            ],
            certificate: "Awarded on 7th Oct 2023 by Shobhit Jain, Founder, Talentship Global Advisory Forum"
        }
    ];

    return (
        <div className="mb-20 mt-20 px-4 relative" data-aos="fade-up">
            {/* Background gradient decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#0D9488] opacity-5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0D9488] opacity-5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-screen-xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-[#222222] mb-4">My Experience</h1>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Timeline Line */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0D9488] via-[#0D9488] to-transparent"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div 
                                key={index} 
                                data-aos="zoom-in-up"
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-stretch lg:items-center`}
                            >
                                {/* Timeline Dot - Desktop */}
                                <div className="hidden lg:flex flex-col items-center lg:w-auto absolute left-1/2 transform -translate-x-1/2">
                                    <div className="relative">
                                        {/* Outer pulse ring */}
                                        <div className="absolute inset-0 bg-[#0D9488] rounded-full animate-pulse opacity-20"></div>
                                        {/* Main dot */}
                                        <div className="relative w-8 h-8 bg-[#0D9488] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full lg:w-[calc(50%-2rem)] group">
                                    <div className="relative bg-white border-3 border-[#0D9488] rounded-xl p-8 md:p-10 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                        {/* Gradient border on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0D9488] to-[#0a7a6b] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

                                        {/* Index badge */}
                                        <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#0D9488] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                            {index + 1}
                                        </div>

                                        {/* Header with icon */}
                                        <div className="flex items-start gap-4 mb-6 relative z-10">
                                            <div className="bg-gradient-to-br from-[#0D9488] to-[#0a7a6b] p-4 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                                                <FaBriefcase className="text-white text-2xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl md:text-3xl font-bold text-[#222222] group-hover:text-[#0D9488] transition-colors">
                                                    {exp.company}
                                                </h3>
                                                <p className="text-lg text-[#0D9488] font-semibold mt-2 flex items-center gap-2">
                                                    <FaArrowRight className="text-sm" />
                                                    {exp.position}
                                                </p>
                                                {exp.duration && (
                                                    <p className="text-gray-500 text-sm font-medium mt-3 bg-[#f0f0f0] px-3 py-1 rounded-full w-fit">
                                                        {exp.duration}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-1 bg-gradient-to-r from-[#0D9488] to-transparent rounded-full mb-6"></div>

                                        {/* Description */}
                                        <ul className="space-y-4 mb-8 relative z-10">
                                            {exp.description.map((point, idx) => (
                                                <li key={idx} className="flex items-start text-gray-700 text-[15px] md:text-[16px] leading-relaxed group/item">
                                                    <span className="text-[#0D9488] mr-4 mt-1 font-bold text-xl flex-shrink-0 group-hover/item:scale-110 transition-transform">✓</span>
                                                    <span className="group-hover/item:text-[#222222] transition-colors">{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Key Projects */}
                                        {exp.keyProjects && (
                                            <div className="mt-8 pt-8 border-t-2 border-[#0D9488] border-dashed relative z-10">
                                                <p className="font-bold text-[#222222] mb-4 flex items-center gap-2 text-lg">
                                                    <span className="text-2xl">🚀</span> Key Projects
                                                </p>
                                                <div className="flex flex-wrap gap-3">
                                                    {exp.keyProjects.map((project, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={project.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="bg-gradient-to-r from-[#0d948910] to-[#0d948905] text-[#0D9488] px-4 py-2 rounded-full text-xs md:text-sm font-semibold border-2 border-[#0D9488] hover:bg-[#0D9488] hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 transform inline-block"
                                                        >
                                                            {project.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Certificate */}
                                        {exp.certificate && (
                                            <div className="mt-8 pt-8 border-t-2 border-[#0D9488] border-dashed bg-gradient-to-br from-[#0d948910] to-[#0d948905] p-5 rounded-lg relative z-10">
                                                <p className="text-gray-700 text-sm md:text-[15px] flex items-start gap-3">
                                                    <FaAward className="text-[#0D9488] text-2xl mt-0.5 flex-shrink-0 animate-bounce" />
                                                    <span>
                                                        <span className="font-bold text-[#222222] block mb-1">Certificate</span>
                                                        <span className="text-gray-600">{exp.certificate}</span>
                                                    </span>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;