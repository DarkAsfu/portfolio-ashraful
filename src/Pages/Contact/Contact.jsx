import { Button, Input } from "@nextui-org/react";
import { BiChat } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
const Contact = () => {
    return (
        <div>
            <div className="bg-white mx-auto max-w-screen-xl px-4 md:px-10 md:flex gap-20 py-10 border-4 my-10 border-[#000] rounded-3xl">
                <div className="mb-4 md:mb-0">
                    <div className="flex flex-col">
                        <div className="flex gap-2 mb-8">
                            <div>
                                <BiChat className="border p-1 text-[30px] rounded-md" />
                            </div>
                            <div className="text-[14px]">
                                <h3 className="font-bold text-[18px]">Chat to us</h3>
                                <p>Our friendly team is here to help</p>
                                <p>ashraful.islam0871@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-8">
                            <div>
                                <IoLocationOutline className="border p-1 text-[30px] rounded-md" />
                            </div>
                            <div className="text-[14px]">
                                <h3 className="font-bold text-[18px]">Visit Us</h3>
                                <p>Come say hello at our office</p>
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
                                <p>Mon-Fri from 8am to 5pm.</p>
                                <p>+880 1777112564</p>
                            </div>
                        </div>
                        <div className="md:absolute bottom-10 text-[24px] flex gap-2">
                            <Link to="https://github.com/DarkAsfu">
                                <FaGithub className="text-black hover:text-[#0D9488] transition-all" />
                            </Link>
                            <Link to="https://bd.linkedin.com/in/ashrafulislamm">
                                <FaLinkedinIn className="text-black hover:text-[#0D9488] transition-all" />
                            </Link>
                            <Link to="https://web.facebook.com/heyashrafulislam">
                                <FaFacebookF className="text-black hover:text-[#0D9488] transition-all" />
                            </Link>
                            <Link to=""><FaXTwitter className="text-black hover:text-[#0D9488] transition-all" /></Link>
                        </div>
                    </div>
                </div>
                <div className="border-1 px-6 md:px-16 py-10 bg-[#0d948926] rounded-3xl">
                    <h1 className="text-[24px] md:text-[42px] font-bold"> Got ideas? We've got the skills. Let's team up.</h1>
                    <p className="md:font-semibold">Tell is more about yourself and what you're got in mind.</p>

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