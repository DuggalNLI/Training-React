import { sculptureList } from './Data.js';
import {useState} from 'react';
import './Styles.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [detail, setDetail] = useState(false);
  function handleClick() {
    if(index < 11){
      setIndex(index + 1);
    }
    else{
      setIndex(0);
    }
    
  }

  function handleDetails() {
    setDetail(!detail);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <button onClick={handleDetails}>
      {detail ? 'Hide' : 'Show'} Show Details
      </button>
      <p>
        {detail && sculpture.description}
      </p>
    </>
  );
}