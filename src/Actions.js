import AppDispatcher from './ActionDispatcher';
import { uniqueId } from 'lodash/uniqueId';

export const addItem = (value) => {
    const action = {
        type : "ADD_NEW_ITEM",
        payload: { value, id:uniqueId(), packed: false}
    }
  AppDispatcher.dispatch(action);
};

export const removeItem = (value) => {
    const action = {
        type : "REMOVE_ITEM",
        payload: value
    }
  AppDispatcher.dispatch(action);
};

export const toggleItem = (item) => {
    const action = {
        type : "TOGGLE_ITEM",
        payload : {...item, packed: !item.packed}
    }
  AppDispatcher.dispatch(action);
};


