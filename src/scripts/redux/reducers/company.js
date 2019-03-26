// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../ActionTypes";

// data format: {[id]: { name: null, address: null, revenue: null, phone: null, count: null } }

const initialState = {};

export default function data(state = state ? state : initialState, action) {
  switch (action.type) {
    case ActionTypes.COMPANY_ADD:
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.COMPANY_COUNT:
      return {};
    default:
      return state;
  }
}
