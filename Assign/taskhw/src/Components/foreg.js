import React , {useState}from 'react'

function Foreg() {
    const [chop, setChop] = useState(0)
  return (
    <>
        <div>foreg</div>
        <h3>{chop}</h3>
        <Childone setChop = {setChop}/>
        <Childtwo setChop = {setChop}/>
        <Childthree setChop = {setChop}/>
    </>
  )
}
function Childone({setChop}) {
    const increasechop = () => {
        setChop(chop => chop + 1)
    }
    return(
    <button onClick={increasechop}>Child 1</button>
  );
}
function Childtwo({setChop}) {
    const increasechop = () => {
        setChop(chop => chop + 1)
    }
    return(
    <button onClick={increasechop}>Child 2</button>
  );
}
function Childthree({setChop}) {
    const increasechop = () => {
        setChop(chop => chop + 1)
    }
    return(
    <button onClick={increasechop}>Child 2</button>
  );
}

export default Foreg