import React from "react";
// import './Styles/Sales';

function Item({ name, isSold }) {
    if (isSold) {
        return <li className="item" ><del>{name}</del> ✔</li>;
      }
      return <li className="item">{name}</li>;
    }
  
  export default function SellList() {
    return (
      <section>
        <h1>Volvo Showroom</h1>
        <ul>
          <Item 
            isSold ={true} 
            name="Volvo 1" 
          />
          <Item 
            isSold ={false} 
            name=" Volvo 2" 
          />
          <Item 
            isSold ={true} 
            name=" Volvo 3" 
          />
          <Item 
            isSold ={true} 
            name="Volvo 4" 
          />
          <Item 
            isSold ={false} 
            name="Volvo 5" 
          />
        </ul>
      </section>
    );
  }