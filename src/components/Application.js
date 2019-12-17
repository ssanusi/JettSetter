import React, { Component } from "react";
import CountDown from "./CountDown";
import NewItem from "./NewItem";
import Items from "./Items";
import itemStore from '../itemStore';
//import { addItem } from '../lib/Actions';


import "./Application.css";


class Application extends Component {
  state = {
    items:itemStore.getItems()
  }

  updateItems =() =>{
    this.setState({ items: itemStore.getItems()});
  }

  markAllAsUnpacked = () => {
    const items = this.state.items.map(item => {
      return { ...item, packed: false};
    });
    this.setState({ items })
  }

  componentDidMount(){
    itemStore.on("change", this.updateItems)
  }

  componentWillUnmount(){
    itemStore.off("change", this.updateItems)
  }

  render() {
    console.log(this.state.items)
    const { items } = this.state;
    const packedItems = items.filter(item => item.packed);
    const unPackedItems = items.filter(item => !item.packed);

    return (
      <div className="Application">
        <NewItem  onSubmit={() => {}}/>
        <CountDown />
        <Items title="Unpacked Items" items={unPackedItems}  />
        <Items title="Packed Items" items={packedItems} />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
