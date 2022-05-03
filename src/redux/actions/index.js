/// ALL YOUR CALL TO ACTION FUNCTIONS GO HERE
import {ADD_BOOK, REMOVE_BOOK, CHECK_STATUS} from './types';

export const moreBooks = (data) => {
    return {
      type: ADD_BOOK,
      payload: data
    }
  }
  
export const lessBooks = () => {
    return {
        type: REMOVE_BOOK
    }
}

export const lookAtStatus = () => {
    return {
        type: CHECK_STATUS
    }
}