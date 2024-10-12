import { USER_COMMENT_ICON_IMAGE_URL } from "../utils/constant";

const Comment = ({data})=>{
   // console.log(data);
    const {name,comment}=data;

   return(
    <div className="flex shadow-lg bg-gray-100 rounded-lg my-6">
       <img className="w-16" alt="user-image" src={USER_COMMENT_ICON_IMAGE_URL}></img>
       <div className="px-3">
        <h3 className="font-bold">{name}</h3>
        <p>{comment}</p>
       </div>
    </div>
   );
};

export default Comment;