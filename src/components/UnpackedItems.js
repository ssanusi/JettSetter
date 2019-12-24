import React from 'react'
import { inject, observer } from "mobx-react";
import Items from "./Items";
import Filter from './Filter';

const UnpackedItems = inject("itemList")(
  observer(({ itemList }) => (
    <Items
      title="Unpacked Items"
      items={itemList.filteredUnpackedList}
    >
      <Filter searchTerm={itemList.unpackedItemFilter} onChange={itemList.updateUnpackedItemFilter} />
    </Items>
  ))
);

export default UnpackedItems;