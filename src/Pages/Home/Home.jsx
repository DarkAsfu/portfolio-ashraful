import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Blogs from "../../Components/Blogs/Blogs";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import TechStack from "../../Components/TechStack/TechStack";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <TechStack/>
            <Experience/>
            <Projects/>
            <Blogs/>
            <Contact/>
        </div>
    );
};

export default Home;