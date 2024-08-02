import { useState, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page is scrolled more than 50 pixels
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-[#ffffff34]'} relative`}
        >
            <div className="md:mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 md:border md:rounded-md md:mt-4">
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
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/#projects"> Portfolio </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/blogs"> Blogs </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/contact"> Contact </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4 text-[22px] text-[#0D9488]">
                            <div className="flex gap-4">
                                <Link to="https://github.com/DarkAsfu"><BsGithub /></Link>
                                <Link to="https://bd.linkedin.com/in/ashrafulislamm"><FaLinkedinIn /></Link>
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
                <div className="absolute top-full left-0 w-full bg-white z-60 border-[#0d948964] border-b-2 border-l-2 border-r-2">
                    <nav aria-label="Global" className="bg-white">
                        <ul className="flex flex-col items-start gap-4 p-4 text-sm">
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                            </li>
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#projects"> Portfolio </a>
                            </li>
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/blogs"> Blogs </a>
                            </li>
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/contact"> Contact </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default NavBar;
