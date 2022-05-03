import {ADD_BOOK, REMOVE_BOOK} from '../actions/types';

const initialState = {
    id: '',
    title: '',
    author: ''
  }

export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_BOOK: return [
        ...state,
        {
          id: 1,
          title: 'Title',
          author: 'Tafara'
        }
      ]
  
      case REMOVE_BOOK: return [
        ...state,
        {
          id: '',
          title: '',
          author: ''
        }
      ]
      default: return state
    }
  
  }