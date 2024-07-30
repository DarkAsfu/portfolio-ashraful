import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa6';

const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="">
            <div className="md:mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 md:border md:rounded-md md:mt-4 bg-[#ffffff34]">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            <h1 className='text-3xl md:text-4xl font-extrabold'>ASHRAFUL</h1>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                                </li>

                                {/* <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/#test"> Services </a>
                                </li> */}

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/#projects"> Portfolio </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/blogs"> Blogs </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4 text-[22px] text-[#0D9488]">
                            <div className="flex gap-4">
                                <BsGithub />
                                <FaLinkedinIn />
                            </div>

                            <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                    onClick={toggleMobileMenu}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <nav aria-label="Global" className="bg-white">
                        <ul className="flex flex-col items-start gap-4 p-4 text-sm">
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                            </li>
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                            </li>
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Portfolio </a>
                            </li>
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/blogs"> Blogs </a>
                            </li>
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default NavBar;
