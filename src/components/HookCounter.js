//useState eith previous state
import React, { useState } from 'react'

const HookCounter = () => {
    const initialCount =0;
    const [count, setCount] = useState(initialCount);

    const incrementFive =()=>{
        for (let i=0; i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    
  return (
    <div>
        count: {count}
        <button onClick={()=>{setCount(initialCount)}}>Reset</button>
        <button onClick={()=>{setCount(prevCount => prevCount+ 1 )}}>increment</button>
        <button onClick={()=>{setCount(prevCount => prevCount-1 )}}>decrement</button>

        <button onClick={incrementFive}>incre + 5</button>

    </div>
  )
}

export default HookCounter