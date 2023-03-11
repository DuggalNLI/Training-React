import React from 'react'

function List() {
    const data  = ["harsh","mayank"];
     
  return (
    <>
    <h2>List</h2>
    {data.map((e)=>{
       return (
        <h2>{e}</h2>
     );})}
    </>
    
  );
}

export default List