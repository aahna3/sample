import { ActionType } from "../action-types";

const initialState={
    data:[]
}

const fetchDataReducer=(state=initialState, action)=>{
    switch(action.type){

        case ActionType.FETCH_DATA:
            return{
                ...state, data:action.payload
            }
          
                default:
                    return state
    }


}

export default fetchDataReducer;