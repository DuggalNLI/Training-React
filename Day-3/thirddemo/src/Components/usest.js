import React from 'react'
import { useState } from 'react'

function Usest() {
    const [count, setCount] = useState(0)
  return (
    <>
        <h2>Use state</h2>
        <h3>Count is {count}</h3>
        <button onClick={()=>{setCount(count+1)}}>Click To increase</button>
    </>
    
  )
}

export default Usest