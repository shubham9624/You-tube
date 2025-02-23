import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./commentConatiner";
const WatchPage = ()=>{
   const [searchParams] =useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(closeMenu());
    },[]);
    return(
        
        <div className="flex flex-col p-2 m-2">
        <div className="px-14 m-11 rounded-lg">
            <iframe width="1000" height="700" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
            <CommentContainer/>
        </div>

    );
};
export default WatchPage;