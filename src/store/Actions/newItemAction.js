import { UPDATE_ITEM, RESET_NEW_INPUT } from "../constants";


export const updateNewItemValue = value => ({
    type: UPDATE_ITEM,
    value
});

export const resetNewInput = () =>({
    type : RESET_NEW_INPUT,
    value: ""
  });