import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Blogs from "../../Components/Blogs/Blogs";
import TechStack from "../../Components/TechStack/TechStack";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <TechStack/>
            <Blogs/>
        </div>
    );
};

export default Home;