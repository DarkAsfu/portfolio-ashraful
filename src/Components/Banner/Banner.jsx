import { Link } from "react-router-dom";
import resume from '../../../public/resume_ashraful.pdf'
const Banner = () => {
    return (
        <>
            {/* <div className="fixed top-0 -z-20 h-screen w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}
            <div>
                <section className="">
                    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                        <div className="mx-auto max-w-xl text-center">
                            <h1 className="text-3xl font-extrabold sm:text-[46px] leading-tight">
                                Are you looking for a
                                <strong className="font-extrabold text-[#0D9488] sm:block"> Mern Stack Developer? </strong>
                            </h1>

                            <p className="mt-4 text-[14px]/relaxed md:text-xl/relaxed">
                            Creating stunning, functional websites with React. Explore my projects and see my passion for seamless user experiences.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a  download
                                    className="block w-full rounded bg-[#0D9488] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#0D9488] focus:outline-none focus:ring active:bg-[#33a89e] sm:w-auto"
                                    href={resume}
                                >
                                    Download Resume
                                </a>

                                <Link
                                    className="block w-full rounded px-12 py-3 text-sm font-medium text-[#0D9488] shadow hover:text-[#0D9488] focus:outline-none focus:ring active:text-[#349e95] sm:w-auto"
                                    to="/resume"
                                >
                                    Preview Resume
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Banner;