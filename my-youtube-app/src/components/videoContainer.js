import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCards from "./videoCards";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
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
    if(videos === null)
    {
        return <Shimmer />;
    }
    return (
        <div className="flex flex-wrap">
            {
                videos.map((video)=>(
                    <Link key={video.id} to={"/watch?v="+video.id}><VideoCards  info={video}/></Link>
                ))
            }
        </div>
    );
};
export default VideoContainer;