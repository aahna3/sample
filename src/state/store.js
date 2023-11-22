import { applyMiddleware, legacy_createStore as createstore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';


export const store  = createstore(reducers,  composeWithDevTools(applyMiddleware(thunk)))