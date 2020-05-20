
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ListOfItems from './ListOfItems';
import DataInfo from './DataInfo';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      ListItems : DataInfo
    };
  }

  render() {
    const ItemstoMap = this.state.ListItems.map(item=><ListOfItems key={item.id} item={item}/>)
    return (
      <div>
        {ItemstoMap}
      </div>
    )
  }
}

export default Product