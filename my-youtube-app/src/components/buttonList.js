import Button from "./button";
const ButtonList = ()=>{
    const buttonNames = ["Game", "Music", "Coldplay", "Cricket", "News","Cooking","Pinjab Song"];

    return (
       <div className="flex p-2 m-2">
          {
             buttonNames.map((name)=><Button key={name} name={name} />)  // Using key prop for React's virtual DOM to identify elements uniquely.
          }
       </div>
    );
}
export default ButtonList;