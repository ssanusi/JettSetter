import React, { Component } from "react";
//import CountDown from "./CountDown";
import NewItem from "./NewItem";
import PackedItems from "./PackedItems";
import UnpackedItems from "./UnpackedItems";
import MarkAllAsUnpacked from "./MarkAllAsUnPacked";

import "./Application.css";


class Application extends Component {

  render() {
    return (
      <div className="Application">
        <NewItem  onSubmit={() => {}}/>
        {/* <CountDown /> */}
        <UnpackedItems />
        <PackedItems />
        <MarkAllAsUnpacked />
      </div>
    );
  }
}

export default Application;
