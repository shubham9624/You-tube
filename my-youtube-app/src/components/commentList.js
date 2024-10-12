import Comment from "./comment"

const CommentList =({comments})=>{
   if (!comments) {
      return null; 
    }
    //console.log(comments[0].reply[0]);
    return comments.map((comment,index)=> (
      <div>
          <Comment key={index} data={comment} />
          <div className="ml-6 px-10 border border-l-gray-700 shadow-lg rounded-lg">
               {/* recursion */}
            <CommentList comments={comment.reply} />
          </div>
      </div>
    ));
}

export default CommentList;