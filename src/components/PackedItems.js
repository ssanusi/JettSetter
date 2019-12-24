import React from 'react'
import { inject, observer } from "mobx-react";
import Items from "./Items";
import Filter from './Filter';

const PackedItems = inject("itemList")(
  observer(({ itemList }) => (
    <Items
      title="Packed Items"
      items={itemList.filteredPackedList}
    >
      <Filter searchTerm={itemList.packedItemFilter} onChange={itemList.updatePackedItemFilter} />
    </Items>
  ))
);

export default PackedItems;