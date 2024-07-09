const Banner = () => {
    return (
        <>
            {/* <div className="fixed top-0 -z-20 h-screen w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}
            <div>
                <section className="">
                    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                        <div className="mx-auto max-w-xl text-center">
                            <h1 className="text-3xl font-extrabold sm:text-5xl">
                                Are you looking for a
                                <strong className="font-extrabold text-[#0D9488] sm:block"> Front-end Developer? </strong>
                            </h1>

                            <p className="mt-4 sm:text-xl/relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                                numquam ea!
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    className="block w-full rounded bg-[#0D9488] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#0D9488] focus:outline-none focus:ring active:bg-[#33a89e] sm:w-auto"
                                    href="#"
                                >
                                    Get Started
                                </a>

                                <a
                                    className="block w-full rounded px-12 py-3 text-sm font-medium text-[#0D9488] shadow hover:text-[#0D9488] focus:outline-none focus:ring active:text-[#349e95] sm:w-auto"
                                    href="#"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Banner;