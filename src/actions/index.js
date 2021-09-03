import {INITIALIZE, WAIT, NOTIFY, UNEXPECTED_ERROR, CLEAR_NOTIFY} from '../constants/index';
  
  
  export function initialize(payload){
    return { type: INITIALIZE, payload }
  }
  
  export function unexpectedError(payload){
    return { type: UNEXPECTED_ERROR, payload }
  }
  
  export function wait(payload){
    return { type: WAIT, payload }
  }
  
  export function notify(payload){
    return { type: NOTIFY, payload }
  }
  
  export function clearNotify(payload){
    return { type: CLEAR_NOTIFY, payload }
  }
  

  