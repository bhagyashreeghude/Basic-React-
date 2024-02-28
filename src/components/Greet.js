// 1. function component
// import React from "react";
// function Greet (){
//     return (
//         <h1>
//             Hello Shree
//         </h1>
//     )
// }
// export default Greet;

// ------------------------------------------------

// 2. function component using  arrow function
// import React from "react";
// const Greet =()=>{
//     return(
//         <h2>Good Noon !</h2>
//     )
// }
//  export default Greet;

// --------------------------------------------
// 3. class Component
// import React,{Component} from "react";

// class Greet extends Component{
//     render(){
//         return<h1>hello today is a great day. </h1>
//     }
// }
// export default Greet;
// ---------------------------------------
// 4. Props
import React, { useState } from "react";
const Greet = (info) => {
  const handleBtnClick = () => {
    const btn="thank you";
    console.log("btnclicked");
    setMessage(btn);
    // console.log(setMessage);
  };

  const [message,setMessage] = useState(0);

  console.log(info);
  return (
    <div>
      <h2>
        Good Noon !{info.name} hi {info.date}
      </h2>
      <button onClick={() => {setMessage("unsubscribe")}}>Subscribe</button>
      
    </div>
  );
};
export default Greet;
