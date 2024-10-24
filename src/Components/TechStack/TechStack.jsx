import { Spotlight, SpotLightItem } from '../Test/main-spotlight';
const TechStack = () => {
    const skills = [
        {
            "name": "HTML5",
            "iconLink": "https://i.ibb.co/zVrvz5F/html.png"
        },
        {
            "name": "CSS3",
            "iconLink": "https://i.ibb.co/Wybqmtm/css-3.png"
        },
        {
            "name": "BootStrap",
            "iconLink": "https://i.ibb.co/T0qmV7d/bootstrap-4-icon.png"
        },
        {
            "name": "Tailwind",
            "iconLink": "https://i.ibb.co/9pJ5L19/tailwind-css-icon.png"
        },
        {
            "name": "JavaScript",
            "iconLink": "https://i.ibb.co/jG4bx92/js.png"
        },
        {
            "name": "React.js",
            "iconLink": "https://i.ibb.co/7WRW6dt/atom.png"
        },
        {
            "name": "Node.js",
            "iconLink": "https://i.ibb.co/nrQnN65/node-js.png"
        },
        {
            "name": "Express.js",
            "iconLink": "https://i.ibb.co/J3K40n2/icons8-express-js-144.png"
        },
        {
            "name": "MongoDB",
            "iconLink": "https://i.ibb.co/603zx2z/mongodb-original-wordmark-logo-icon-146425.png"
        },
        {
            "name": "TypeScript",
            "iconLink": "https://i.ibb.co/cg1Hw0r/typescript.png"
        },
        {
            "name": "Next.js",
            "iconLink": "https://i.ibb.co/hcWDV1r/nextjs-icon.png"
        },
        {
            "name": "Redux",
            "iconLink": "https://i.ibb.co/vJWyr7L/icons8-redux-144.png"
        },
        {
            "name": "Firebase",
            "iconLink": "https://i.ibb.co/4Tfq1p9/1175544-firebase-google-icon.png"
        },
        {
            "name": "MySQL",
            "iconLink": "https://i.ibb.co/CMqZgF9/mysql.png"
        },
        {
            "name": "GitHub",
            "iconLink": "https://i.ibb.co/yW77K9T/github-sign.png"
        }
    ]
    return (
        <div className="mb-20 mt-20 px-4" data-aos="fade-up">
            <h1 className="text-4xl font-extrabold text-center text-[#222222]">My Technology Stack</h1>
            <Spotlight className="bg-[#0d948969] p-10 max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4 mt-8 align-middle items-center">
                {
                    skills.map((skill, idx) => <SpotLightItem className='bg-[#0d948915] h-full' key={idx}>
                        <div data-aos="zoom-in-up" className="px-8 py-6 text-center rounded-md transition-all">
                            <img className="w-10 md:w-14 mx-auto" src={skill.iconLink} alt="" />
                            <h1 className="mt-2 text-[13px] md:text-[14px]">{skill.name}</h1>
                        </div>
                    </SpotLightItem>
                    )
                }
            </Spotlight>
        </div>
    );
};

export default TechStack;