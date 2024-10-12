
import { dayCount } from "../utils/constant";
const VideoCards = (props)=>{
    
    const {info} = props;
    
  
    const {snippet, statistics} =info;
    const {title, channelTitle, thumbnails, publishedAt} = snippet;
    const views =(Math.floor(Number(statistics.viewCount))/100000).toFixed(1);
    
    //console.log(info);
    return (
        <div className="p-2 m-2 w-72 shadow-xl rounded-lg">
            <img className=" rounded-2xl hover:rounded-none" alt="thumbnails" src={thumbnails.high.url}></img>
           <ul>
            <li className="font-semibold text-gray-700">{title}</li>
            <li className="text-gray-500">{channelTitle}</li>
            <li className="text-gray-500">{views} M views</li>
            <li className="text-gray-500">{dayCount(publishedAt)} days ago</li>
           </ul>
        </div>
    );

}
export default VideoCards;