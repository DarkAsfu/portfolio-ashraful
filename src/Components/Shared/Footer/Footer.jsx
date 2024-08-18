const Footer = () => {
    return (
        // <footer className="bg-[#f9f9f9b9]">
        //     <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-0">
        //         <div className="lg:grid lg:grid-cols-2">
        //             <div
        //                 className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
        //             >
        //                 <div className="block text-teal-600 lg:hidden">
        //                     <h1 className="text-2xl font-extrabold">{`<Ashraful/>`}</h1>
        //                 </div>

        //                 <div className="mt-8 space-y-4 lg:mt-0">
        //                     <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

        //                     <div>
        //                         <h2 className="text-[18px] font-medium text-gray-900">See My Work in Action: Request a Demo Today</h2>

        //                         <p className="mt-4 max-w-lg text-gray-500 text-[12px] md:text-[14px]">
        //                         Curious about my work? Request a demo to get a firsthand look at my web development projects. See live demonstrations of my latest applications, and discover how my skills can help bring your ideas to life.
        //                         </p>
        //                     </div>

        //                     <form className="mt-6 w-full">
        //                         <label htmlFor="UserEmail" className="sr-only"> Email </label>

        //                         <div
        //                             className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4
        //                             "
        //                         >
        //                             <input
        //                                 type="email"
        //                                 id="UserEmail"
        //                                 placeholder="john@rhcp.com"
        //                                 className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm
        //                                 bg-[#f9f9f9b9]"
        //                             />

        //                             <button
        //                                 className="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
        //                             >
        //                                 Sign Up
        //                             </button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>

        //             <div className="py-8 lg:py-16 lg:pe-16">
        //                 <div className="hidden text-teal-600 lg:block">
        //                     <h1 className="text-4xl font-extrabold">{`<Ashraful/>`}</h1>
        //                 </div>

        //                 <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        //                     <div>
        //                         <p className="font-medium text-gray-900">Services</p>

        //                         <ul className="mt-6 space-y-4 text-[12px] md:text-sm ">
        //                             <li>
        //                                 <a href="#" className="text-gray-700 transition hover:opacity-75"> Figma to React </a>
        //                             </li>

        //                             <li>
        //                                 <a href="#" className="text-gray-700 transition hover:opacity-75"> Leanding Page Design </a>
        //                             </li>

        //                             <li>
        //                                 <a href="#" className="text-gray-700 transition hover:opacity-75"> Api Intregation </a>
        //                             </li>

        //                             <li>
        //                                 <a href="#" className="text-gray-700 transition hover:opacity-75"> MERN Stack Web Application Development </a>
        //                             </li>

        //                             <li>
        //                                 <a href="#" className="text-gray-700 transition hover:opacity-75"> Frontend Web Application </a>
        //                             </li>
        //                         </ul>
        //                     </div>

        //                     <div>
        //                         <p className="font-medium text-gray-900">Helpful Links</p>

        //                         <ul className="mt-6 space-y-4 text-[12px] md:text-sm">
        //                             <li>
        //                                 <a href="/contact" className="text-gray-700 transition hover:opacity-75"> Contact </a>
        //                             </li>

        //                             <li>
        //                                 <a href="/" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
        //                             </li>

        //                             <li>
        //                                 <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat (Upcoming) </a>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>

        //                 <div className="mt-8 border-t border-gray-100 pt-8">
        //                     {/* <ul className="flex flex-wrap gap-4 text-xs">
        //                         <li>
        //                             <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
        //                         </li>

        //                         <li>
        //                             <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
        //                         </li>

        //                         <li>
        //                             <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
        //                         </li>
        //                     </ul> */}

        //                     <p className="mt-8 text-xs text-gray-500">&copy; 2024. Ashraful Islam. All rights reserved.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        <footer className="bg-[#f9f9f9b9]">
            <div className="mx-auto max-w-screen-xl px-4 py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                    <h1 className="text-2xl font-extrabold">{`<Ashraful/>`}</h1>
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; 2024. All rights reserved by <span className="text-teal-500">Ashraful Islam</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;