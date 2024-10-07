import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = ()=>{
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    //early return
    if(!isMenuOpen)
    {
        return null;
    }
    return (
        <div className="p-5 m-2 shadow-lg w-48">
            <ul>
                <Link to='/'><li>Home</li></Link>
                <li>Shorts</li>
                <li>Subscription</li>
                <li>YT Music</li>
            </ul>
            <h1 className="font-bold py-5">You</h1>
            <ul>
                <li>Your Channel</li>
                <li>History</li>
                <li>Your Course</li>
                <li>Your Videos</li>
                <li>Watch later</li>
            </ul>
            <h1 className="font-bold py-5">Subscription</h1>
            <ul>
                <li>Javascript</li>
                <li>Coding Ninja</li>
                <li>React</li>
                <li>Tech talk</li>
            </ul>

        </div>
    );
};

export default SideBar;