import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    let newLocation = prompt("Please enter your location");
    console.log(newLocation)
    this.props.store.editItem(newLocation, this.props.item.name)
  }
  deleteItem = () => {
    console.log(this.props.item.name)
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    console.log(this.props.store)
    let item = this.props.item
    console.log(item.location)
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox"
          onClick={this.checkItem}
          value={item.name} />
          
        <span>{item.name}</span><span>{item.location}</span><br></br>
        <button onClick={this.editItem}>Edit Item</button>
        <button onClick={this.deleteItem}>Delete Item</button>
      </div>)
  }
}

export default observer(Item)