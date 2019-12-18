import {
  UPDATE_UNPACKED_ITEMS_FILTER,
  UPDATE_PACKED_ITEMS_FILTER
} from "../constants";

export const filterPackedItems = text => ({
  type: UPDATE_PACKED_ITEMS_FILTER,
  text
});

export const filterUnpackedItems = text => ({
  type: UPDATE_UNPACKED_ITEMS_FILTER,
  text
});

