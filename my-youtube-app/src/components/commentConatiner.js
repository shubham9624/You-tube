
import CommentList from "./commentList";

const commentData = [
    {
        name: "Aarav",
        comment: "This article is very insightful!",
        reply: [
            { 
              name: "Riya", 
              comment: "Absolutely, I learned a lot!" 
            },
            { 
              name: "Dev", 
              comment: "Glad you found it useful!",
              reply: [
                { name: "Rohan", comment: "Same here, great insights!" },
                { name: "Sara", comment: "The examples were helpful too!" }
              ]
            }
          ]
      },
      {
        name: "Sanya",
        comment: "I appreciate the detailed explanation.",
        reply: [
          { name: "Kunal", comment: "Yes, it really cleared things up for me too." }
        ]
      },
      {
        name: "Vikram",
        comment: "Can you share more examples for clarity?",
        reply: [
          { name: "Priya", comment: "Good suggestion, I'll add more soon." }
        ]
      },
      {
        name: "Ananya",
        comment: "I have a different opinion on this.",
        reply: [
          { name: "Raj", comment: "Could you explain your viewpoint?" }
        ]
      },
      {
        name: "Rohit",
        comment: "Excellent analysis, very well done!",
        reply: [
            { 
              name: "Mira", 
              comment: "Thank you so much for the feedback!",
              reply: [
                { name: "Arjun", comment: "Mira, I totally agree with you!" },
                { name: "Pooja", comment: "Thanks for sharing, Rohit!" }
              ]
            },
            { 
              name: "Aditi", 
              comment: "Completely agree, great work!",
              reply: [
                { 
                  name: "Nikhil", 
                  comment: "I found it helpful too!",
                  reply: [
                    { name: "Manoj", comment: "Nikhil, I had the same experience." }
                  ]
                }
              ]
            }
        ]
    }

];
const CommentContainer =()=>{

    return (
        <div className="m-5 p-2">
            <h1 className="font-bold text-2xl">Comments:-</h1>
            <CommentList comments={commentData}/>
        </div>
    )
};

export default CommentContainer;