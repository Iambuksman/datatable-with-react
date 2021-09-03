import {combineReducers} from "redux";
import {INITIALIZE, UNEXPECTED_ERROR, WAIT, NOTIFY, CLEAR_NOTIFY} from  "../constants/index";
import userReducer from "./users";

const initialState = {
    loading: false,
    notify:{
      message: "",
      status: "",
    },
    loggedIn: false,
};

function mainReducer(state = initialState, action) {
  switch (action.type){
    case INITIALIZE:
      return Object.assign({}, state, {
         loading: false,
         loggedIn: false,
       });
     case UNEXPECTED_ERROR:
       return Object.assign({}, state, {
         notify:{
           message: "unexpected error occured",
           status: "error",
         },
        });
      case WAIT:
        return Object.assign({}, state, {
          loading: action.payload
        });
     case NOTIFY:
       return Object.assign({}, state, {
         notify: action.payload
       });
     case CLEAR_NOTIFY:
       return Object.assign({}, state, {
         notify:{
           message: "",
           status: "",
         }
       });
  }
  return state;
}

const rootReducer = combineReducers({
    main: mainReducer,
    user: userReducer,
});

export default rootReducer
