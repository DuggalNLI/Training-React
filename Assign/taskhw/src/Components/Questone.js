import React , {useState}from 'react'

function Quesone() {
    const [chop, setChop] = useState(0)
  return (
    <>
        <div>1.WAP where a component state affects the other component.</div>
        <h3>{chop}</h3>
        <Child setChop = {setChop}/>
    </>
  )
}
function Child({setChop}) {
    const increasechop = () => {
        setChop(chop => chop + 1)
    }
    return(
    <button onClick={increasechop}>Child 1</button>
  );
}

export default Quesone;