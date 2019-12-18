import { UPDATE_ITEM } from "../constants";


export const updateNewItemValue = value => ({
    type: UPDATE_ITEM,
    value
});