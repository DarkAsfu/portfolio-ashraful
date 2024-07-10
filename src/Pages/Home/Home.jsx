import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Blogs from "../../Components/Blogs/Blogs";
import Projects from "../../Components/Projects/Projects";
import TechStack from "../../Components/TechStack/TechStack";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <TechStack/>
            <Projects/>
            <Blogs/>
        </div>
    );
};

export default Home;