import {CHECK_STATUS} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case CHECK_STATUS: { return 'Under construction ' };
    default: return state;
  }
}