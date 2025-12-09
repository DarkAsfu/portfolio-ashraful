import { Button, Input } from "@nextui-org/react";
import { BiChat } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
const Contact = () => {
    return (
        <div>
            <ScrollToTop/>
            <div className="bg-white mx-4 md:mx-6 xl:mx-auto max-w-screen-xl px-4 md:px-10 md:flex gap-20 py-10 border-4 my-20 border-[#000] rounded-3xl">
                <div className="mb-4 md:mb-0">
                    <div className="flex flex-col">
                        <div className="flex gap-2 mb-8">
                            <div>
                                <BiChat className="border p-1 text-[30px] rounded-md" />
                            </div>
                            <div className="text-[14px]">
                                <h3 className="font-bold text-[18px]">Chat with me</h3>
                                <p>I'm here to help your project</p>
                                <p>ashrafulislamdev01@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-8">
                            <div>
                                <IoLocationOutline className="border p-1 text-[30px] rounded-md" />
                            </div>
                            <div className="text-[14px]">
                                <h3 className="font-bold text-[18px]">Visit Us</h3>
                                <p>Nikunjo-2, Dhaka</p>
                                <p>Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <LuPhoneCall className="border p-1 text-[30px] rounded-md" />
                            </div>
                            <div className="text-[14px]">
                                <h3 className="font-bold text-[18px]">Call Us</h3>
                                <p>Always available</p>
                                <p>+880 1777112564</p>
                            </div>
                        </div>
                        <div className="md:relative -bottom-44 text-[28px] flex gap-2 pt-4">
                            <Link to="https://github.com/DarkAsfu">
                                <FaGithub className="text-black hover:text-[#0D9488] transition-all border p-1 rounded-md" />
                            </Link>
                            <Link to="https://bd.linkedin.com/in/ashrafulislamm">
                                <FaLinkedinIn className="text-black hover:text-[#0D9488] transition-all border p-1 rounded-md" />
                            </Link>
                            <Link to="https://web.facebook.com/heyashrafulislam">
                                <FaFacebookF className="text-black hover:text-[#0D9488] transition-all border p-1 rounded-md" />
                            </Link>
                            <Link to=""><FaXTwitter className="text-black hover:text-[#0D9488] transition-all border p-1 rounded-md" /></Link>
                        </div>
                    </div>
                </div>
                <div className="border-1 px-6 md:px-16 py-10 bg-[#0d948926] rounded-3xl">
                    <h1 className="text-[24px] md:text-[36px] font-bold"> Have an idea? As a web developer, I can help bring it to life!</h1>
                    <p className="md:font-semibold">Let's collaborate to create something extraordinary together.</p>

                    <form>
                        <Input className="mt-3" type="text" variant="underlined" label="Your name" />
                        <Input className="mt-3" type="email" variant="underlined" label="Your email" />
                        <Input className="mt-3" type="text" variant="underlined" label="Write your message..." />
                        <Button color="primary" className="w-full mt-10 rounded-md bg-[#101727] py-6" radius="none">
                            Send message
                        </Button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;