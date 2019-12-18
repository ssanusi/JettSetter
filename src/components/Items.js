import React, { Component } from "react";
import Item from "./Item";


class Items extends Component {
  render() {
    const { title, items, onRemove, onCheckOff } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        {this.props.render && this.props.render()}
        {items.map(item => (
          <Item
            key={item.id}
            onToggle={() => onCheckOff(item.id)}
            onRemove={() => onRemove(item.id)}
            item={item}
          />
        ))}
      </section>
    );
  }
}

export default Items;
