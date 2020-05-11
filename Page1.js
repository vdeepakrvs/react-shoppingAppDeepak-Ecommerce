import React, { Component } from 'react';

function ListOfItems(props){
  return(
    <div className="parent-div">
    <div className="row">
      <div className="individual-item">     
        <img src={props.item.pic} alt={props.item.text} class="img-responsive"/>
      </div>
    </div>
    <div className="row">
      <div className="text-class">       
        <h2>{props.item.material} - {props.item.price}</h2>
         <h1 className="text-h1">{props.item.text}</h1>
      </div>
    </div>
    </div>

  )
}

export default ListOfItems