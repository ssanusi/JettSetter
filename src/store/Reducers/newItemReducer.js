import { UPDATE_ITEM } from "../constants";


export default function(state= '', action){
    if( action.type === UPDATE_ITEM){
        return action.value;
    }
    return state;
}