import {FETCH_USERS} from  "../constants/users";


const initialState = {
    users:[],
};

function reducer(state = initialState, action) {
  switch (action.type){
    case FETCH_USERS:
      return Object.assign({}, state, {
         users: action.payload,
      });
     } 
  return state;
}

export default reducer;