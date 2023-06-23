import { ADD_PSITIONS } from "./position-actions";

const positionReducer=(state=[],action)=>{
switch (action.type) {
    case ADD_PSITIONS:
        return action.positions;
       
    default:
       return state;
}
}

export default positionReducer;