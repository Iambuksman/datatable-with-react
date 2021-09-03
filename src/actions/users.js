import {FETCH_USERS} from '../constants/user';
import { defaultHandler } from '../requests/global';
import {wait, unexpectedError, notify} from './index';

export function getUsers(body){
    return async dispatch =>  {
        const url = "/users/all";
        dispatch(wait(true));
        const [res, status] = await defaultHandler(url, body);
        if (status == "ok"){
            if(res){
                dispatch(fetchUsers(res.response.dispatch[0]));
                dispatch(notify({message:"profile updated successfully", status: "success"}))
            }
        }else{
            dispatch(unexpectedError());
        }
        dispatch(wait(false));
    };
  }

  export function fetchUsers(payload){
    return { type: FETCH_USERS, payload }
  }