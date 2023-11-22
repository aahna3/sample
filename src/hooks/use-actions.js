import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getData } from "../state/action-creators/fetchAction";



export const useActions = () => 
    {
        const dispatch = useDispatch();
        return bindActionCreators(getData , dispatch);
    };