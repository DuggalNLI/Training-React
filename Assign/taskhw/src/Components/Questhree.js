import React , {useState}from 'react'

function Questhree() {
    const [chop, setChop] = useState(0)
  return (
    <>
        <div>Sharing a state bw multiple components(min three).</div>
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

export default Questhree;