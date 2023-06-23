import { ADD_FILTER } from "./filter-actions";
import { REMOVE_FILTER } from "./filter-actions";
import { CLEAR_FILTER } from "./filter-actions";


const filterReducer =(state=[], actions)=>{
switch (actions.type) {
    case ADD_FILTER: 
    if(!state.includes(actions.filter))   {
        return [...state, actions.filter];
    }   
    return state;

    case REMOVE_FILTER:       
    return state.filter(elem=>elem!==actions.filter)

    case CLEAR_FILTER:       
    return [];

    default:
    return state;
}
}

export default filterReducer;