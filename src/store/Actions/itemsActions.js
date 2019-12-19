import Api from "../../lib/api";
import {
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  TOGGLE_ITEM,
  MARK_ALL_AS_UNPACKED,
  UPDATE_ALL_ITEMS,
} from "../constants";
import { resetNewInput } from "./newItemAction";

export const addItem = value => {
  const item = {
    packed: false,
    value
  };
  return dispatch => {
    Api.add(item).then(item => {
      dispatch({
        type: ADD_NEW_ITEM,
        item
      });
      dispatch(resetNewInput())
    });
  };
};

export const removeItem = id => {
  return dispatch => {
    Api.delete(id).then(() => {
      dispatch({
        type: REMOVE_ITEM,
        id
      });
    });
  };
};

export const toggleItem = item => {
  const updateItem = { ...item, packed: !item.packed };
  return dispatch => {
    Api.update(updateItem).then(() => {
      dispatch({
        type: TOGGLE_ITEM,
        item:updateItem
      });
    });
  };
};

export const markAllAsUnpacked = () => {
  return dispatch => {
    Api.markAllAsUnpacked().then(() => {
      dispatch({
        type: MARK_ALL_AS_UNPACKED
      });
    });
  };
};

export const getAllItems = () => {
  return dispatch => {
    Api.getAll().then(items => {
      dispatch({
        type: UPDATE_ALL_ITEMS,
        items
      });
    });
  };
};

