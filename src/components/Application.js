import React, { Component } from "react";
import CountDown from "./CountDown";
import NewItemContainer from "../containers/NewItemContainer";
import MarkAllAsUnpacked from "../containers/MarkAllAsUnpacked";
import PackedItemsContainer from "../containers/PackedItemsContainer";
import PackedFilterContainer from '../containers/PackedFilterContainer';
import UnPackedItemsContainer from "../containers/UnPackedItemsContainer";
import UnPackedFilterContainer from "../containers/UnPackedFilterContainer";

import "./Application.css";

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItemContainer />
        <CountDown />
        <UnPackedItemsContainer
          title="Unpacked Items"
          render={() => <UnPackedFilterContainer />}
          />
        <PackedItemsContainer
          title="Packed Items"
          render={() => <PackedFilterContainer />}
          />
        <MarkAllAsUnpacked />
      </div>
    );
  }
}

export default Application;
