import { useEffect, useState } from "react"


function UseEfectHook (){
    const [count,setCount] =useState(0);
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    //useEffect after every Render
    // useEffect(()=>{
    //     document.title = `you clickd ${count} times`
    // })
    // return (
    //     <div>
    //         <button onClick={()=>setCount (count+1)}>click{count}</button>
    //     </div>
    // )

    //2.useEffect conditional Render




    //3.useEffect initial Render
    const logMousePosition = e =>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }
    
    
    useEffect (()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosition)
    },[])
    return(
        <div>
            hooks x-{x}  y-{y}
        </div>
    )
    
}
export default UseEfectHook;