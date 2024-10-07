import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCards from "./videoCards";
import { Link } from "react-router-dom";
const VideoContainer = ()=>{

    const [videos, setvideos] =useState([]);
    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async ()=>{
        const response = await fetch(YOUTUBE_API);
        const data = await response.json();
        setvideos(data.items);
        //console.log(data);
    };
    return (
        <div className="flex flex-wrap">
            {
                videos.map((video)=>(
                    <Link to={"/watch?v="+video.id}><VideoCards key={video.id} info={video}/></Link>
                ))
            }
        </div>
    );
};
export default VideoContainer;