import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";
import Loading from "../Components/Loading/Loading";
import { useState } from "react";

const Main = () => {
    const [loading, setLoading] = useState(true)
    if (loading) {
        return <Loading setLoading={setLoading} />;
    }
    return (
        <div className="">
            <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;