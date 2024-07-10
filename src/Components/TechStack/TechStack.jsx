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
    console.log(skills);
    return (
        <div className="mb-20 mt-20 px-4">
            <h1 className="text-4xl font-extrabold text-center">My Techonology Stack</h1>
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 mt-8 align-middle items-center">
                {
                    skills.map((skill, idx) => <div className="bg-[#0d948915] h-full px-8 py-6 text-center rounded-md hover:bg-[#0d948945] border-2 border-[#0d948945] hover:border-[#0D9488] transition-all" key={idx}>
                        <img className="w-10 md:w-16 mx-auto" src={skill.iconLink} alt="" />
                        <h1 className="mt-2 text-[14px] md:text-[16px]">{skill.name}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TechStack;