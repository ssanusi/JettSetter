import { UPDATE_ITEM, RESET_NEW_INPUT } from "../constants";


export default function(state= '', action){
    if( action.type === UPDATE_ITEM){
        return action.value;
    }

    if( action.type === RESET_NEW_INPUT){
        return action.value
    }
    return state;
}