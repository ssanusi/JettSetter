import React from "react";
import { inject } from "mobx-react";

const MarkAllAsUnpacked = inject("itemList")(({ itemList }) => {
  return (
    <button className="button full-width" onClick={itemList.markedAllAsUnpacked}>
      Mark All As Unpacked
    </button>
  );
});

export default MarkAllAsUnpacked;
