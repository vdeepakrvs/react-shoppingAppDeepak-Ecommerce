import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ListOfItems from './Page1';
import DataInfo from './DataInfo.js';

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

render(<App />, document.getElementById('root'));
