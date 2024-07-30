import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const About = () => {
    return (
        <div>
            {/* <h1 className='text-4xl font-extrabold text-center py-20 bg-white'>About Me</h1> */}
            <section className="mb-10">
                <div className="mx-auto max-w-screen-xl  bg-[#fff] border rounded-md">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 align-middle items-center px-4 pb-10 md:pb-0 border-[#0D9488] border-3 rounded-md">
                        <div className="overflow-hidden rounded-lg sm:h-80 lg:order-last h-64 md:h-96">
                            <img
                                alt=""
                                src="https://i.ibb.co/K6hmjYd/Programmer-Thomas.gif"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="pb-3 lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Who Am I</h2>

                            <p className="mt-4 text-gray-600 pb-10 text-[14px] md:text-[16px]">
                                I am Md. Ashraful Islam, a dedicated MERN Stack Developer based in Dhaka, Bangladesh. With a strong foundation in front-end technologies such as HTML5, CSS3, JavaScript (ES6+), ReactJS, and various UI libraries including TailwindCSS and MaterialUI, I excel in creating visually appealing and highly functional web applications. My backend expertise spans NodeJs, ExpressJs, and MongoDB, enabling me to develop robust full-stack solutions.

                                My professional experience includes significant contributions to projects like Learner Cafe, an innovative online course portal, and the HR Management Client-Server system. I have a proven track record of implementing secure authentication systems, integrating payment gateways like Stripe, and managing complex user workflows.

                                I am committed to delivering seamless user experiences and continually advancing my skills and knowledge in web development. I am recognized for my outstanding contributions, effective teamwork, and timely project completion.

                                Explore my projects and connect with me on LinkedIn or GitHub to learn more about my work and professional journey.
                            </p>
                            <div className="flex gap-3 mb-4 text-[24px] text-[#0D9488] ">
                            <FaGithub className="hover:text-black transition-all"/>
                            <FaLinkedinIn className="hover:text-black transition-all" />
                            <FaFacebookF className="hover:text-black transition-all" />
                            <FaXTwitter className="hover:text-black transition-all" />
                            </div>
                            {/* <a
                                href="#"
                                className="rounded bg-[#0D9488] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#0D9488] focus:outline-none focus:ring active:bg-[#33a89e]"
                            >
                                See my resume
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;