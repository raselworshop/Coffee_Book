import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const MainLayOutes = () => {
    return (
        <div>
            <div className="h-16">
            <NavBar></NavBar>
            </div>
            <div className="min-h-[calc(100vh-165px)] container p-12 mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOutes;