import React, { useState } from 'react'

function DateCounter() {
    const[count, setCount] =useState(0)
    const [range, setRange] = useState(1)
  return (
    <>
    <div>
        <div>
            <input type="range" min={0} max={10} value={range} onChange={(e) => setRange(e.target.value)} /> {range} 
        </div>
        <div>
            <span><button onClick={()=> {if(count>0) setCount(count-range)}}>-</button></span> <input type="text" value={count}/> <span><button onClick={()=>setCount(count+ Number(range))}>+</button></span>
        </div>
        <div>
            <button 
            onClick={()=>{setCount(0) 
                setRange(1)}}>Reset</button>
        </div>
    </div>
    </>
  )
}

export default DateCounter