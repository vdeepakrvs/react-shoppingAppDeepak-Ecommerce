
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ListOfItems from './Page1.jsx';
import DataInfo from './DataInfo.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ListItems : DataInfo
    };
  }

  render() {
    debugger;
    const ItemstoMap = this.state.ListItems.map(item=><ListOfItems key={item.id} item={item}/>)
    return (
      <div>
        {ItemstoMap}
      </div>
    )
  }
}

export default App