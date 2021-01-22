import { combineReducers } from "redux";
import userReducer from 'src/modules/user/reducer';

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;