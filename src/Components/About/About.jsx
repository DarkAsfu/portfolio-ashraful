import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="">
            <div className="mx-4 md:mx-auto max-w-screen-xl bg-[#fff] border rounded-md">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 align-middle items-center px-4 md:pb-0 border-[#0D9488] border-3 rounded-md">
                    <div data-aos="zoom-in-left" className="overflow-hidden rounded-lg sm:h-80 lg:order-last h-64 md:h-96">
                        <img
                            alt=""
                            src="https://i.ibb.co/K6hmjYd/Programmer-Thomas.gif"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div data-aos="zoom-in-right" className="pb-3 lg:py-10">
                        <h2 className="text-3xl font-bold sm:text-4xl">Who Am I</h2>

                        <p className="mt-4 text-gray-600  text-[14px] md:text-[16px]">
                            My name is Md. Ashraful Islam, and I am a dedicated MERN Stack Developer based in Dhaka, Bangladesh.
                        </p>

                        <p className="mt-4 text-gray-600  text-[14px] md:text-[16px]">
                            I have a strong foundation in front-end technologies such as HTML5, CSS3, JavaScript (ES6+), and ReactJS. I excel in creating visually appealing and highly functional web applications, utilizing UI libraries like TailwindCSS and MaterialUI.
                        </p>

                        <p className="mt-4 text-gray-600  text-[14px] md:text-[16px]">
                            My backend expertise includes NodeJs, ExpressJs, and MongoDB, allowing me to develop robust full-stack solutions.
                        </p>
                        <p className="mt-4 text-gray-600  text-[14px] md:text-[16px]">
                            My professional experience includes significant contributions to projects like Learner Cafe, an innovative online course portal, and the HR Management Client-Server system. I have a proven track record of implementing secure authentication systems, integrating payment gateways like Stripe, and managing complex user workflows.
                        </p>
                        <p className="mt-4 text-gray-600  text-[14px] md:text-[16px]">
                            I am committed to delivering seamless user experiences and continually advancing my skills and knowledge in web development. I am recognized for my outstanding contributions, effective teamwork, and timely project completion.
                        </p>

                        <p className="mt-4 text-gray-600  text-[14px] md:text-[16px]">
                            Explore my projects and connect with me on LinkedIn or GitHub to learn more about my work and professional journey.
                        </p>

                        <div className="flex gap-3 my-4 text-[24px] text-[#0D9488]">
                            <Link to="https://github.com/DarkAsfu">
                                <FaGithub className="hover:text-black transition-all" />
                            </Link>
                            <Link to="https://bd.linkedin.com/in/ashrafulislamm">
                                <FaLinkedinIn className="hover:text-black transition-all" />
                            </Link>
                            <Link to="https://web.facebook.com/heyashrafulislam">
                                <FaFacebookF className="hover:text-black transition-all" />
                            </Link>
                            <Link to="">
                                <FaXTwitter className="hover:text-black transition-all" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
