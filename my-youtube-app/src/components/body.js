import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex ">
            <SideBar />
            <Outlet />
        </div>
    );
};

export default Body;
