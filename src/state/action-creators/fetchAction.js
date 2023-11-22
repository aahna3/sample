import { getDataFun } from "../../services/data";
import { ActionType } from "../action-types";

export const getData=()=>{
    return async (dispatch) =>{
        try{

            const response = await getDataFun();
            console.log(response,"response here from actions")
        }catch(error){
            console.log(error)
        }
    }
}